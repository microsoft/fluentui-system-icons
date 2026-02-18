//
//  Copyright (c) Microsoft Corporation.
//  Licensed under the MIT license.
//

#if os(macOS)
import AppKit

private class FluentIconsBundleCheck {}

public extension NSImage {
#if FLUENT_ICONS_USE_RESOURCE_BUNDLES
  @objc static let fluentIconBundle = Bundle(path: Bundle(for: FluentIconsBundleCheck.self).path(forResource: "FluentIcons", ofType: "bundle")!)
#else
  @objc static let fluentIconBundle = Bundle(for: FluentIconsBundleCheck.self)
#endif

  @objc static func fluentIcon(_ fluent: FluentIcon) -> NSImage {
    // Force unwrap here because the resource strings
    // are generated so we can be confident that the image
    // exits at runtime.
    #if SWIFT_PACKAGE
    return Bundle.module.image(forResource: NSImage.Name(fluent.resourceString))!
    #else
    return NSImage.fluentIconBundle.image(forResource: NSImage.Name(fluent.resourceString))!
    #endif
  }
}

#endif

#if os(iOS)
import UIKit

private class FluentIconsBundleCheck {}

public extension UIImage {
#if FLUENT_ICONS_USE_RESOURCE_BUNDLES
  @objc static let fluentIconBundle = Bundle(path: Bundle(for: FluentIconsBundleCheck.self).path(forResource: "FluentIcons", ofType: "bundle")!)
#else
  @objc static let fluentIconBundle = Bundle(for: FluentIconsBundleCheck.self)
#endif

  @objc convenience init(fluent: FluentIcon) {
    // Force unwrap here because the resource strings
    // are generated so we can be confident that the image
    // exits at runtime.
    #if SWIFT_PACKAGE
    self.init(named: fluent.resourceString, in: Bundle.module, compatibleWith: nil)!
    #else
    self.init(named: fluent.resourceString, in: UIImage.fluentIconBundle, compatibleWith: nil)!
    #endif
  }
}

public extension UIImageView {
  @objc convenience init(fluent: FluentIcon, tintColor: UIColor) {
    self.init(image: UIImage(fluent: fluent))
    self.tintColor = tintColor
  }

  @objc convenience init(fluent: FluentIcon, highlightedFluent: FluentIcon, tintColor: UIColor) {
    self.init(image: UIImage(fluent: fluent), highlightedImage: UIImage(fluent: highlightedFluent))
    self.tintColor = tintColor
  }
}
#endif
