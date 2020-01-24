set -ex

git checkout master
git clean -f -d
git pull origin master
find . -type d -maxdepth 1 \
	-not -name '.gitignore' \
	-not -path '*/\.*' \
	-exec cp -rp {} /tmp/assets_temp \;
rm /tmp/assets_temp/.gitignore
# rm /tmp/assets_temp/LICENSE
rm -rf /tmp/assets_temp/android
rm -rf /tmp/assets_temp/art
rm -rf /tmp/assets_temp/assets
rm -rf /tmp/assets_temp/importer
rm -rf /tmp/assets_temp/ios
git checkout library
rm -rf assets
mv /tmp/assets_temp assets
git add .
git commit -am "Pull in latest changes from master"
