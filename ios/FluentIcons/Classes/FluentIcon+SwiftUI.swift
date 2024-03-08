//
//  Copyright (c) Microsoft Corporation.
//  Licensed under the MIT license.
//

import SwiftUI

@available(iOS 13.0, macOS 10.15, *)
public extension Image {
  
  init(fluent: FluentIcon) {
    #if os(macOS)
    self.init(nsImage: NSImage.fluentIcon(fluent))
    #else
    self.init(uiImage: UIImage(fluent: fluent))
    #endif
  }
}
