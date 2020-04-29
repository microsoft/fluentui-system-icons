//
//  Copyright (c) Microsoft Corporation. All rights reserved.
//

import ArgumentParser
import Foundation
import RemoveUnusedIcons

/// Remove unused FluentIcons
///
/// Run with `--help` for documentation
struct Run: ParsableCommand {
  @Option(name: .long, default: "FluentIcons", help: "Name of the icon library.")
  var libraryName: String

  @Option(name: .long, default: "IconAssets", help: "Name of the asset catalog.")
  var assetCatalogName: String

  @Option(name: .long, help: "Path to your app's source code.")
  var pathToSourceCode: String

  @Option(name: .long, help: "Path to the fluent icon library's source code")
  var pathToFluentIconSource: String

  @Option(name: .long, default: nil, help: "Path to a custom list of icons in use (for React Native, Optional).")
  var pathToListOfIconsToKeep: String?

  func run() throws {
    try removeUnusedAssets(
      pathToFluentIconSource: pathToFluentIconSource,
      pathToSourceCode: pathToSourceCode,
      libraryName: libraryName,
      assetCatalogName: assetCatalogName,
      pathToListOfIconsToKeep: pathToListOfIconsToKeep
    )
  }
}

Run.main()
