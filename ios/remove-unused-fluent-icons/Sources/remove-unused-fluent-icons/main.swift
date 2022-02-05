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

  @Option(name: .long, help: "If an icon passed to path-to-list-of-icons-to-keep doesn't exist, exit the script.") var exitOnIncorrectlyUsedIconName: Bool = true

  func run() throws {
    try removeUnusedAssets(
      libraryName: libraryName,
      assetCatalogName: assetCatalogName,
      pathToSourceCode: pathToSourceCode,
      pathToFluentIconSource: pathToFluentIconSource,
      pathToListOfIconsToKeep: pathToListOfIconsToKeep,
      exitOnIncorrectlyUsedIconName: exitOnIncorrectlyUsedIconName
    )
  }
}

Run.main()
