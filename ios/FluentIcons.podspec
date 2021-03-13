#
# Be sure to run `pod lib lint FluentIcons.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'FluentIcons'
  s.version          = '1.1.110'
  s.summary          = 'FluentIcons'

  s.description      = <<-DESC
FluentIcons
                       DESC

  s.homepage         = 'https://github.com/microsoft/fluentui-system-icons'
  s.license          = { :type => 'Microsoft', :file => 'LICENSE' }
  s.author           = { 'Microsoft, Inc.' => 'nicroma@microsoft.com' }
  s.source           = { :git => 'https://github.com/microsoft/fluentui-system-icons.git', :tag => s.version.to_s }

  s.ios.deployment_target = '8.0'
  s.osx.deployment_target  = '10.12'

  # This podspec is symlinked to the root directory of this repo
  # so all paths will need the prefix `ios/FluentIcons`

  s.subspec 'Code' do |sp|
    sp.source_files = 'ios/FluentIcons/Classes/*.swift'
    sp.ios.source_files   = 'ios/FluentIcons/Classes/ios/*.swift'
    sp.osx.source_files   = 'ios/FluentIcons/Classes/mac/*.swift'
  end

  s.subspec 'Assets' do |sp|
    # Require this to be used as a dynamic framework
    # `resource_bundles` are unable to load around 1 in a thousand times
    # so we need to stick to `resources` here instead.
    sp.resource = 'ios/FluentIcons/Assets/IconAssets.xcassets'
  end

  s.subspec 'RemovalScript' do |sp|
    # Command line tool to remove unused fluent icons
    sp.preserve_path = 'ios/remove-unused-fluent-icons/run'
  end

  s.default_subspecs = 'Code', 'Assets', 'RemovalScript'

  # s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  # s.dependency 'AFNetworking', '~> 2.3'
end
