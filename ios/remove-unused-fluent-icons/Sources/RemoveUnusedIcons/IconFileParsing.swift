//
//  Copyright (c) Microsoft Corporation. All rights reserved.
//

import Foundation

func getAllIconNames(pathToFluentIconSource: String, libraryName: String, fileName: String) throws -> (names: Set<String>, weights: Set<String>) {
  let url = URL(fileURLWithPath: "\(pathToFluentIconSource)/ios/\(libraryName)/Classes/\(fileName).swift")

  let fileContents = try String(contentsOf: url, encoding: .utf8)

  let pattern = #"case ([a-zA-Z0-9]+)"#
  let regex = try NSRegularExpression(pattern: pattern, options: [])

  let nsrange = NSRange(fileContents.startIndex ..< fileContents.endIndex, in: fileContents)

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
  let iconWeightRegex = try NSRegularExpression(pattern: iconWeightPattern, options: [])

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
