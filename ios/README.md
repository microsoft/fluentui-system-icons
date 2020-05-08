# FluentIcons iOS

![fluent design icons](../../art/readme-asset.png)

## Installation

### Cocoapods

```ruby
use_frameworks!
pod "FluentIcons", git: "https://microsoftdesign@dev.azure.com/microsoftdesign/Design%20System/_git/fluent-mobile-icons", tag: "1.0.218"
```

### Carthage

```bash
git "git@ssh.dev.azure.com:v3/microsoftdesign/Design%20System/fluent-mobile-icons" "1.0.218"
```

## Usage

```swift
UIImage(fluent: .appStore24Filled)

# To specify a tint color
let imageView = UIImage(fluent: .appStore24Regular)
imageView.tintColor = .label

# or
let imageView = UIImage(fluent: .appStore24Regular, tintColor: .label)
```

## Benefits

#### 1. No more missing assets!

By using the enum `FluentIcon.myIcon24Regular` you can be sure that the icon exists in your app at compile time.

No more risky stringly typed `UIImage(named: "")!`

#### 2. Only includes what you use

At build/release time you can run the following script to ensure all unused assets are stripped from the app:

Cocoapods

```
ICON_SOURCE_PATH="./Pods/FluentIcons"

$ICON_SOURCE_PATH/ios/remove-unused-fluent-icons/run \
	--path-to-source-code "." \
	--path-to-fluent-icon-source $ICON_SOURCE_PATH
```

Carthage

```
ICON_SOURCE_PATH="./Carthage/Checkouts/fluent-mobile-icons"

$ICON_SOURCE_PATH/ios/remove-unused-fluent-icons/run \
	--path-to-source-code "." \
	--path-to-fluent-icon-source $ICON_SOURCE_PATH

carthage build --platform iOS fluent-mobile-icons
```

Optionally if you are using React Native or are referencing icons outside of your codebase, you can pass an icon list to prevent these icons from being removed.
```
--path-to-list-of-icons-to-keep OutlookReactNativeKit/ReactResources/FluentIcons.txt
```

#### 3. Consistent asset rendering

All non-color icons are rendered as template images so you can easily apply a `tintColor` to your `UIImageView` or `UIButton`.  You no longer need to specify `.withRenderingMode(.alwaysTemplate)` in case you're unsure the asset was misconfigured.

## FAQ

#### 1. Will this increase my apps build size

No, but please remember to set setup the script using the instructions above ^ to strip out all unused assets.

#### 2. Why are their assets of different sizes? Can't all PDFs be scaled?

Technically they can!  But design has tailored each icon to each specific size.  For example, smaller icons generally have less detail in the image.