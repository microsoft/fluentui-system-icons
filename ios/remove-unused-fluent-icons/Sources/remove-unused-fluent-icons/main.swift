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
  @Option(name: .long, help: "Name of the icon library.")
  var libraryName: String = "FluentIcons"

  @Option(name: .long, help: "Name of the asset catalog.")
  var assetCatalogName: String = "IconAssets"

  @Option(name: .long, help: "Path to your app's source code.")
  var pathToSourceCode: String

  @Option(name: .long, help: "Path to the fluent icon library's source code")
  var pathToFluentIconSource: String

  @Option(name: .long, help: "Paths to lists of icons in use that aren't in the Swift/Objc codebase (for React Native, Optional). Multiple files can be separated with a comma.")
  var pathToListOfIconsToKeep: String = ""

  func run() throws {
    try removeUnusedAssets(
      libraryName: libraryName,
      assetCatalogName: assetCatalogName,
      pathToSourceCode: pathToSourceCode,
      pathToFluentIconSource: pathToFluentIconSource,
      pathToListOfIconsToKeep: pathToListOfIconsToKeep
    )
  }
}

Run.main()
