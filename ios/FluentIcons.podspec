#
# Be sure to run `pod lib lint FluentIcons.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'FluentIcons'
  s.version          = '1.1.315'
  s.summary          = 'FluentIcons'

  s.description      = <<-DESC
FluentIcons
                       DESC

  s.homepage         = 'https://github.com/microsoft/fluentui-system-icons'
  s.license          = { :type => 'Microsoft', :file => 'LICENSE' }
  s.author           = { 'Microsoft, Inc.' => 'nicroma@microsoft.com' }
  s.source           = { :git => 'https://github.com/microsoft/fluentui-system-icons.git', :tag => s.version.to_s }

  s.ios.deployment_target = '12.0'
  s.osx.deployment_target  = '10.13'

  # This podspec is symlinked to the root directory of this repo
  # so all paths will need the prefix `ios/FluentIcons`

  s.subspec 'Code' do |sp|
    sp.source_files = 'ios/FluentIcons/Classes/*.swift'
    sp.ios.source_files   = 'ios/FluentIcons/Classes/*.swift'
    sp.osx.source_files   = 'ios/FluentIcons/Classes/*.swift'
  end

  s.subspec 'Assets' do |sp|
    if ENV['FLUENT_ICONS_USE_RESOURCE_BUNDLES'] == '1'
      sp.resource_bundles = {
        'FluentIcons' => ['ios/FluentIcons/Assets/IconAssets.xcassets']
      }
      sp.pod_target_xcconfig = {
        'OTHER_SWIFT_FLAGS' => '-DFLUENT_ICONS_USE_RESOURCE_BUNDLES'
      }
    else
      # Require this to be used as a dynamic framework
      # `resource_bundles` are unable to load around 1 in a thousand times
      # so we need to stick to `resources` here instead.
      sp.resource = 'ios/FluentIcons/Assets/IconAssets.xcassets'
    end
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
