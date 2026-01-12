//
//  Copyright (c) Microsoft Corporation.
//  Licensed under the MIT license.
//

import SwiftUI

@available(iOS 13.0, macOS 10.15, *)
public extension Image {
  
  init(fluent: FluentIcon) {
      self.init(fluent.resourceString, bundle: Bundle.module)
  }
}

@available(iOS 13.0, macOS 10.15, *)
#Preview {
    HStack {
        Image(fluent: .accessTime24Regular)
            .resizable()
            .frame(width: 400, height: 400)
    }
}
