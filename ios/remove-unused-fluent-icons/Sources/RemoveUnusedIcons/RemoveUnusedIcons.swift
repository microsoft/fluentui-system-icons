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

public func removeUnusedAssets(pathToFluentIconSource: String, pathToSourceCode: String, libraryName: String, assetCatalogName: String, pathToListOfIconsToKeep: String?) throws {
  var fileName = libraryName
  _ = fileName.removeLast() // Remove trailing "s"

  let result = try getAllIconNames(pathToFluentIconSource: pathToFluentIconSource, libraryName: libraryName, fileName: fileName)

  let allPossibleSwiftIconReferences = searchForCodeReferences(
    in: pathToSourceCode,
    language: .swift,
    weights: result.weights,
    excludingFileName: fileName
  )

  let allPossibleObjcIconReferences = searchForCodeReferences(
    in: pathToSourceCode,
    language: .objc,
    weights: result.weights,
    excludingFileName: fileName
  )

  var listOfIconsToKeep: [String] = []
  if let pathToListOfIconsToKeep = pathToListOfIconsToKeep {
    let fileContents = try String(contentsOfFile: pathToListOfIconsToKeep, encoding: .utf8)
    listOfIconsToKeep.append(contentsOf: fileContents.mapToLines())
  }

  let allPossibleIconReferences = allPossibleSwiftIconReferences + allPossibleObjcIconReferences + listOfIconsToKeep

  let allIconNames = result.names

  var iconsUsed = Set<String>()
  for line in allPossibleIconReferences {
    for iconName in allIconNames {
      if line.lowercased().contains(iconName.lowercased()) {
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

  for directory in directories {
    let iconName = getIconName(from: directory)
    if !iconsUsed.contains(iconName) {
      print("Remove \(directory)")
      try FileManager.default.removeItem(at: directory)
    }
  }
}
