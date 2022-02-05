//
//  Copyright (c) Microsoft Corporation. All rights reserved.
//

import Foundation

func getIconName(from url: URL) -> String {
  var iconName: [String] = url
    .deletingPathExtension()
    .lastPathComponent
    .split(separator: "_")
    .map { String($0) }
  iconName = Array(iconName.dropFirst(2))
  return iconName.enumerated().map { offset, word in
    if offset == 0 {
      return String(word)
    } else {
      return word.capitalized
    }
  }.joined()
}

/// Remove unused icons from a project
///
/// - Parameters:
///   - libraryName: Name of the icon library (e.g. FluentIcons)
///   - assetCatalogName: Name of the asset catalog that stores all the assets (e.g. IconAssets)
///   - pathToSourceCode: Path to your app's source code.
///   - pathToFluentIconSource: Path to the fluent icon library's source code
///   - pathToListOfIconsToKeep: Path to a custom list of icons in use (for React Native, Optional).
///   - exitOnIncorrectlyUsedIconName: If an icon passed to pathToListOfIconsToKeep doesn't exist, exit the script.
public func removeUnusedAssets(libraryName: String, assetCatalogName: String, pathToSourceCode: String, pathToFluentIconSource: String, pathToListOfIconsToKeep: String?, exitOnIncorrectlyUsedIconName: Bool) throws {
  var fileName = libraryName
  _ = fileName.removeLast() // Remove trailing "s"

  let result = try getAllIconNames(pathToFluentIconSource: pathToFluentIconSource, libraryName: libraryName, fileName: fileName)

  print("Searching for possible swift icon references")
  let allPossibleSwiftIconReferences = searchForCodeReferences(
    in: pathToSourceCode,
    language: .swift,
    weights: result.weights,
    excludingFileName: fileName
  )

  print("Searching for possible objc icon references")
  let allPossibleObjcIconReferences = searchForCodeReferences(
    in: pathToSourceCode,
    language: .objc,
    weights: result.weights,
    excludingFileName: fileName
  )

  var listOfIconsToKeep: [String] = []
  if let pathToListOfIconsToKeep = pathToListOfIconsToKeep {
    for path in pathToListOfIconsToKeep.split(separator: ",") {
      let fileContents = try String(contentsOfFile: String(path), encoding: .utf8)
      listOfIconsToKeep.append(contentsOf: fileContents.mapToLines())
    }
  }

  let allPossibleIconReferences = allPossibleSwiftIconReferences + allPossibleObjcIconReferences + listOfIconsToKeep

  let allIconNames = result.names

  // Validate custom list provided to script has all valid icons
  var invalidIcons: [String] = []
  for icon in listOfIconsToKeep {
    if !allIconNames.contains(icon) {
      invalidIcons.append(icon)
    }
  }
  if !invalidIcons.isEmpty {
    print("List of icons provided contains invalid icons \(invalidIcons)")
    if exitOnIncorrectlyUsedIconName {
      exit(1)
    }
  }

  let allPossibleIconReferencesLower = allPossibleIconReferences.map { $0.lowercased() }
  let allIconNamesLower = Set(allIconNames.map { $0.lowercased() })

  var iconsUsed = Set<String>()
  for line in allPossibleIconReferencesLower {
    for iconName in allIconNamesLower {
      if line.contains(iconName) {
        iconsUsed.insert(iconName)
      }
    }
  }

  let pathToFluentIconAssets = "\(pathToFluentIconSource)/ios/\(libraryName)/Assets/\(assetCatalogName).xcassets"

  let directories = try FileManager.default.contentsOfDirectory(
    at: URL(fileURLWithPath: pathToFluentIconAssets, isDirectory: true),
    includingPropertiesForKeys: [.isDirectoryKey, .pathKey],
    options: [.skipsHiddenFiles]
  ).filter {
    $0.hasDirectoryPath
  }

  print("Removing unused assets")
  var count = 0
  for directory in directories {
    let iconName = getIconName(from: directory).lowercased()
    if !iconsUsed.contains(iconName) {
      try FileManager.default.removeItem(at: directory)
      count += 1
    }
  }
  print("Removed \(count) unused assets.")
}
