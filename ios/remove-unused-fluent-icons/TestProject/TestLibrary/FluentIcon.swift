//
//  Copyright (c) Microsoft Corporation. All rights reserved.
//

import Foundation

@objc public enum FluentIcon: Int, Equatable, CaseIterable {
  case accessTime20Filled = 0

  public var resourceString: String {
    switch self {
    case .accessTime20Filled: return "ic_fluent_access_time_20_filled"
    }
  }
}
