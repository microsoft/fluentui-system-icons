//
//  Copyright (c) Microsoft Corporation. All rights reserved.
//  Licensed under the MIT License.
//

public class FluentIconsBundle: NSObject {
    @objc public static var bundle: Bundle { return Bundle(for: self) }
    @objc public static let resourceBundle: Bundle = {
        guard let url = bundle.resourceURL?.appendingPathComponent("FluentIconsResources.bundle", isDirectory: true), let bundle = Bundle(url: url) else {
            preconditionFailure("FluentUI resource bundle is not found")
        }
        return bundle
    }()
}
