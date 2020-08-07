//
//  Copyright (c) Microsoft Corporation.
//  Licensed under the MIT license.
//

import UIKit

public extension UIImage {
  @objc static let fluentIconBundle = FluentIconsBundle.resourceBundle

  @objc convenience init(fluent: FluentIcon) {
    // Force unwrap here because the resource strings
    // are generated so we can be confident that the image
    // exits at runtime.
    self.init(named: fluent.resourceString, in: UIImage.fluentIconBundle, compatibleWith: nil)!
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
