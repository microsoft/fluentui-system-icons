/// Remove unused FluentIcons
///
/// Call this with two arguments:
/// ```
/// swift remove_unused_fluent_icons.swift \
///   path-to-app-source \
///   path-to-fluent-icon-source
/// ```
///
/// Optionally pass an additional parameter for a list of icons to keep
/// ```
/// swift remove_unused_fluent_icons.swift \
///   path-to-app-source \
///   path-to-fluent-icon-source \
///   path-to-list-of-icons-to-keep.txt
/// ```
///

import Foundation

let libraryName = "FluentIcon"
let assetCatalogName = "IconAssets"

let pathToSourceCode = CommandLine.arguments[1]
let pathToFluentIconSource = CommandLine.arguments[2]
let pathToListOfIconsToKeep: String? = CommandLine.arguments.count > 3 ? CommandLine.arguments[3] : nil

func shell(_ command: String) -> String {
  let task = Process()
  task.launchPath = "/bin/bash"
  task.arguments = ["-c", command]

  let pipe = Pipe()
  task.standardOutput = pipe
  task.launch()

  let data = pipe.fileHandleForReading.readDataToEndOfFile()
  let output: String = NSString(data: data, encoding: String.Encoding.utf8.rawValue)! as String

  return output
}

func getAllIconNames(at url: URL) -> (names: Set<String>, weights: Set<String>) {
  let fileData = FileManager.default.contents(atPath: url.path)!
  let fileContents = String(data: fileData, encoding: .utf8)!

  let pattern = #"case ([a-zA-Z0-9]+)"#
  guard let regex = try? NSRegularExpression(pattern: pattern, options: []) else {
    fatalError("Can't create a regex")
  }

  let nsrange = NSRange(fileContents.startIndex..<fileContents.endIndex, in: fileContents)

  var iconNames = Set<String>()
  regex.enumerateMatches(in: fileContents, options: [], range: nsrange) { match, _, _ in
    guard let match = match else { return }

    let iconNameRange = Range(match.range(at: 1), in: fileContents)!
    let iconName = String(fileContents[iconNameRange])
    iconNames.insert(iconName)
  }

  // Use the icons weights as well to improve the grep command speed
  var iconWeights = Set<String>()
  let iconWeightPattern = #"allIconWeights = \[(.*)\]"#
  guard let iconWeightRegex = try? NSRegularExpression(pattern: iconWeightPattern, options: []) else {
    fatalError("Can't create a regex")
  }
  iconWeightRegex.enumerateMatches(in: fileContents, options: [], range: nsrange) { match, _, _ in
    guard let match = match else { return }

    let iconWeightsRange = Range(match.range(at: 1), in: fileContents)!
    let iconWeightResults = String(fileContents[iconWeightsRange]).split(separator: ",")
    for iconWeight in iconWeightResults {
      iconWeights.insert(iconWeight.trimmingCharacters(in: .whitespaces).trimmingCharacters(in: ["\""]))
    }
  }

  return (names: iconNames, weights: iconWeights)
}

func stringToLines(_ string: String) -> [String] {
  return string.trimmingCharacters(in: .whitespacesAndNewlines)
    .split(separator: "\n")
    .map { String($0) }
}

let fluentIconSwiftURL = URL(fileURLWithPath: "\(pathToFluentIconSource)/ios/\(libraryName)s/Classes/\(libraryName).swift")
let result = getAllIconNames(at: fluentIconSwiftURL)

let grepCommandForAllPossibleSwiftIconReferences = """
grep --recursive \
  --ignore-case \
  --no-filename \
  --exclude=\"\(libraryName).swift\" \
  --extended-regexp \
  --include=\"*.swift\" \
  \"\\.[a-zA-Z0-9]+[0-9]{2}(\(result.weights.map { $0.capitalized }.joined(separator: "|")))\" \(pathToSourceCode)
"""

print(grepCommandForAllPossibleSwiftIconReferences)

let allPossibleSwiftIconReferences = stringToLines(shell(grepCommandForAllPossibleSwiftIconReferences))

let grepCommandForAllPossibleObjcIconReferences = """
grep --recursive \
  --ignore-case \
  --no-filename \
  --extended-regexp \
  --include=\"*.m\" \
  --include=\"*.h\" \
  \"\(libraryName)[a-zA-Z0-9]+[0-9]{2}\" \(pathToSourceCode)
"""

print(grepCommandForAllPossibleObjcIconReferences)

let allPossibleObjcIconReferences = stringToLines(shell(grepCommandForAllPossibleObjcIconReferences))

var listOfIconsToKeep: [String] = []
if let pathToListOfIconsToKeep = pathToListOfIconsToKeep {
  let fileData = FileManager.default.contents(atPath: pathToListOfIconsToKeep)!
  let fileContents = String(data: fileData, encoding: .utf8)!
  listOfIconsToKeep.append(contentsOf: stringToLines(fileContents))
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

let pathToFluentIconAssets = "\(pathToFluentIconSource)/ios/\(libraryName)s/Assets/\(assetCatalogName).xcassets"

let directories = try FileManager.default.contentsOfDirectory(
  at: URL(fileURLWithPath: pathToFluentIconAssets, isDirectory: true),
  includingPropertiesForKeys: [.isDirectoryKey, .pathKey],
  options: [.skipsHiddenFiles]
).filter {
  $0.hasDirectoryPath
}

func getIconName(from url: URL) -> String {
  var iconName: [String] = url.deletingPathExtension().lastPathComponent.split(separator: "_").map { String($0) }
  iconName = Array(iconName.dropFirst(2))
  return iconName.enumerated().map { offset, word in
    if offset == 0 {
      return String(word)
    } else {
      return word.capitalized
    }
  }.joined()
}

for directory in directories {
  let iconName = getIconName(from: directory)
  if !iconsUsed.contains(iconName) {
    print("Remove \(directory)")
    try FileManager.default.removeItem(at: directory)
  }
}
