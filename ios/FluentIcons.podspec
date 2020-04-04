#
# Be sure to run `pod lib lint FluentIcons.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'FluentIcons'
  s.version          = '1.0.201'
  s.summary          = 'FluentIcons'

  s.description      = <<-DESC
FluentIcons
                       DESC

  s.homepage         = 'https://dev.azure.com/microsoftdesign/Design%20System/_git/fluent-mobile-icons'
  s.license          = { :type => 'Microsoft', :file => 'LICENSE' }
  s.author           = { 'Microsoft, Inc.' => 'nicroma@microsoft.com' }
  s.source           = { :git => 'https://microsoftdesign@dev.azure.com/microsoftdesign/Design%20System/_git/fluent-mobile-icons', :tag => s.version.to_s }

  s.ios.deployment_target = '8.0'

  # This podspec is symlinked to the root directory of this repo
  s.source_files = 'ios/FluentIcons/Classes/**/*'
  s.resource_bundles = {
    'FluentIcons' => ['ios/FluentIcons/Assets/IconAssets.xcassets'],
  }
  s.resource = 'ios/FluentIcons/remove_unused_fluent_icons.swift'

  # s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  # s.dependency 'AFNetworking', '~> 2.3'
end
