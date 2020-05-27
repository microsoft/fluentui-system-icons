#
# Be sure to run `pod lib lint FluentIcons.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'FluentIcons'
  s.version          = '1.0.225'
  s.summary          = 'FluentIcons'

  s.description      = <<-DESC
FluentIcons
                       DESC

  s.homepage         = 'https://dev.azure.com/microsoftdesign/Design%20System/_git/fluent-mobile-icons'
  s.license          = { :type => 'Microsoft', :file => 'LICENSE' }
  s.author           = { 'Microsoft, Inc.' => 'nicroma@microsoft.com' }
  s.source           = { :git => 'https://microsoftdesign@dev.azure.com/microsoftdesign/Design%20System/_git/fluent-mobile-icons', :tag => s.version.to_s }

  s.ios.deployment_target = '8.0'
  s.osx.deployment_target  = '10.12'

  # This podspec is symlinked to the root directory of this repo
  s.source_files = 'ios/FluentIcons/Classes/*.swift'
  s.ios.source_files   = 'ios/FluentIcons/Classes/ios/*.swift'
  s.osx.source_files   = 'ios/FluentIcons/Classes/mac/*.swift'

  # Require this to be used as a dynamic framework
  # `resource_bundles` are unable to load around 1 in a thousand times
  # so we need to stick to `resources` here instead.
  s.resource = 'ios/FluentIcons/Assets/IconAssets.xcassets'

  # Command line tool to remove unused fluent icons
  s.preserve_path = 'ios/remove-unused-fluent-icons/run'

  # s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  # s.dependency 'AFNetworking', '~> 2.3'
end
