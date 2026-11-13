#!/usr/bin/env bash

set -euo pipefail

: "${VERSION_NAME:?VERSION_NAME must be set to the version from the release tag}"
: "${MAVEN_CENTRAL_USERNAME:?MAVEN_CENTRAL_USERNAME must contain the Central Portal token username}"
: "${MAVEN_CENTRAL_PASSWORD:?MAVEN_CENTRAL_PASSWORD must contain the Central Portal token password}"

if [[ ! "$VERSION_NAME" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "VERSION_NAME must be an X.Y.Z release version, got: $VERSION_NAME" >&2
  exit 1
fi

GROUP_PATH="com/microsoft/design"
ARTIFACT_ID="fluent-system-icons"
REPOSITORY_DIR="${CENTRAL_REPOSITORY_DIR:-library/build/artifacts}"
VERSION_DIR="$REPOSITORY_DIR/$GROUP_PATH/$ARTIFACT_ID/$VERSION_NAME"
PUBLISHING_TYPE="${MAVEN_CENTRAL_PUBLISHING_TYPE:-AUTOMATIC}"
API_URL="${MAVEN_CENTRAL_API_URL:-https://central.sonatype.com/api/v1/publisher}"
WORK_DIR="$(mktemp -d)"
BUNDLE="$WORK_DIR/$ARTIFACT_ID-$VERSION_NAME.zip"

trap 'rm -rf "$WORK_DIR"' EXIT

if [[ "$PUBLISHING_TYPE" != "AUTOMATIC" && "$PUBLISHING_TYPE" != "USER_MANAGED" ]]; then
  echo "MAVEN_CENTRAL_PUBLISHING_TYPE must be AUTOMATIC or USER_MANAGED" >&2
  exit 1
fi

if [[ ! -d "$VERSION_DIR" ]]; then
  echo "Published Maven directory does not exist: $VERSION_DIR" >&2
  exit 1
fi

required_files=(
  "$ARTIFACT_ID-$VERSION_NAME.aar"
  "$ARTIFACT_ID-$VERSION_NAME.pom"
  "$ARTIFACT_ID-$VERSION_NAME-sources.jar"
  "$ARTIFACT_ID-$VERSION_NAME-javadoc.jar"
)

for file in "${required_files[@]}"; do
  if [[ ! -s "$VERSION_DIR/$file" ]]; then
    echo "Required Maven artifact is missing or empty: $VERSION_DIR/$file" >&2
    exit 1
  fi
done

while IFS= read -r -d '' file; do
  if [[ ! -s "$file" ]]; then
    echo "Publication contains an empty file: $file" >&2
    exit 1
  fi
  if [[ ! -s "$file.asc" ]]; then
    echo "Missing PGP signature: $file.asc" >&2
    exit 1
  fi
  if [[ ! -f "$file.md5" ]]; then
    openssl dgst -md5 -r "$file" | awk '{print $1}' > "$file.md5"
  fi
  if [[ ! -f "$file.sha1" ]]; then
    openssl dgst -sha1 -r "$file" | awk '{print $1}' > "$file.sha1"
  fi
  if [[ ! -s "$file.md5" || ! -s "$file.sha1" ]]; then
    echo "Failed to generate checksums for: $file" >&2
    exit 1
  fi
done < <(
  find "$VERSION_DIR" -type f \
    ! -name '*.asc' \
    ! -name '*.md5' \
    ! -name '*.sha1' \
    ! -name '*.sha256' \
    ! -name '*.sha512' \
    -print0
)

(
  cd "$REPOSITORY_DIR"
  zip -q -r "$BUNDLE" "$GROUP_PATH/$ARTIFACT_ID/$VERSION_NAME"
)

auth="$(printf '%s:%s' "$MAVEN_CENTRAL_USERNAME" "$MAVEN_CENTRAL_PASSWORD" | base64 | tr -d '\n')"
upload_response="$(
  curl --fail-with-body --silent --show-error \
    --request POST \
    --header "Authorization: Bearer $auth" \
    --form "bundle=@$BUNDLE;type=application/zip" \
    "$API_URL/upload?name=$ARTIFACT_ID-$VERSION_NAME&publishingType=$PUBLISHING_TYPE"
)"

deployment_id="$(
  printf '%s' "$upload_response" | python3 -c '
import json
import sys

value = sys.stdin.read().strip()
try:
    data = json.loads(value)
    if isinstance(data, dict):
        print(data.get("deploymentId") or data.get("id") or "")
    else:
        print(data.strip("\""))
except json.JSONDecodeError:
    print(value.strip("\""))
'
)"

if [[ -z "$deployment_id" ]]; then
  echo "Central Portal did not return a deployment id: $upload_response" >&2
  exit 1
fi

echo "Central Portal deployment: $deployment_id"

for attempt in $(seq 1 120); do
  status_response="$(
    curl --fail-with-body --silent --show-error \
      --retry 3 \
      --retry-all-errors \
      --request POST \
      --header "Authorization: Bearer $auth" \
      "$API_URL/status?id=$deployment_id"
  )"
  state="$(
    printf '%s' "$status_response" | python3 -c '
import json
import sys

data = json.load(sys.stdin)
print(data.get("deploymentState") or data.get("state") or "")
'
  )"

  case "$state" in
    PUBLISHED)
      echo "Published $ARTIFACT_ID $VERSION_NAME to Maven Central."
      exit 0
      ;;
    FAILED)
      echo "Central Portal deployment failed: $status_response" >&2
      exit 1
      ;;
    VALIDATED)
      if [[ "$PUBLISHING_TYPE" == "USER_MANAGED" ]]; then
        echo "Deployment validated. Publish it in the Central Portal: $deployment_id"
        exit 0
      fi
      ;;
    PENDING|VALIDATING|PUBLISHING)
      ;;
    *)
      echo "Unknown Central Portal deployment state '$state': $status_response" >&2
      exit 1
      ;;
  esac

  if (( attempt < 120 )); then
    sleep 10
  fi
done

echo "Timed out waiting for Central Portal deployment $deployment_id" >&2
exit 1
