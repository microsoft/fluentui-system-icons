//
//  Copyright (c) Microsoft Corporation.
//  Licensed under the MIT license.
//

import AppKit

private class FluentIconsBundleCheck {}

public extension NSImage {
  @objc static let fluentIconBundle = Bundle(for: FluentIconsBundleCheck.self)

  @objc static func fluentIcon(_ fluent: FluentIcon) -> NSImage {
    // Force unwrap here because the resource strings
    // are generated so we can be confident that the image
    // exits at runtime.
    return NSImage.fluentIconBundle.image(forResource: fluent.resourceString)!
  }
}
