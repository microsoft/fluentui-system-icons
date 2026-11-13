# Maven Central publishing

The main `publish.yml` workflow creates the release tag and then dispatches
`publish-android.yml`, matching the CocoaPods release pattern.
`publish-android.yml` checks out that tag, builds the signed AAR publication,
and uploads it to the existing
`com.microsoft.design:fluent-system-icons` coordinates through the Central
Portal Publisher API.

## One-time setup

A Central Portal administrator for the `com.microsoft.design` namespace must:

1. [Create a Central Portal user token](https://central.sonatype.org/publish/generate-portal-token/)
   and copy both the generated username and password. The token is displayed
   only once; use an expiring token and rotate it when access changes.
2. Prepare a PGP signing key. The public key must be published to a
   [Maven Central-compatible keyserver](https://central.sonatype.org/publish/requirements/gpg/).
   For an existing key, list its fingerprint with
   `gpg --list-secret-keys --keyid-format LONG`, publish the public key with
   `gpg --keyserver keyserver.ubuntu.com --send-keys <fingerprint>`, and export
   the private key with `gpg --armor --export-secret-keys <fingerprint>`.
3. Create a [GitHub environment](https://docs.github.com/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments)
   named `android-maven-central`.
4. Add these environment secrets:

   | Secret | Value |
   | --- | --- |
   | `MAVEN_CENTRAL_USERNAME` | Central Portal user-token username |
   | `MAVEN_CENTRAL_PASSWORD` | Central Portal user-token password |
   | `GPG_SIGNING_KEY` | ASCII-armored PGP private key |
   | `GPG_SIGNING_PASSWORD` | Signing key passphrase |

5. Ensure the Portal token can publish the namespace.

No publishing credential belongs in the repository or a workflow file.

## Retrying a release

Run **Publish Android library** in GitHub Actions and enter the existing release
tag. Maven Central versions are immutable, so a failure after publication
requires a new version.
