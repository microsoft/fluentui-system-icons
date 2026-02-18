//
//  Copyright (c) Microsoft Corporation. All rights reserved.
//

import Foundation

private func shell(_ command: String) -> String {
  let task = Process()
  task.launchPath = "/bin/bash"
  task.arguments = ["-c", command]

  let pipe = Pipe()
  task.standardOutput = pipe
  task.launch()

  let data = pipe.fileHandleForReading.readDataToEndOfFile()
  return String(data: data, encoding: .utf8)!
}

extension String {
  func mapToLines() -> [String] {
    trimmingCharacters(in: .whitespacesAndNewlines)
      .split(separator: "\n")
      .map { String($0) }
  }
}

enum Language {
  case swift
  case objc
}

func searchForCodeReferences(in path: String, language: Language, weights: Set<String>, excludingFileName: String) -> Set<String> {
  let include: String
  let regexPattern: String
  switch language {
  case .swift:
    include = "--include=\"*.swift\""
    regexPattern = "\\.([a-zA-Z0-9]+[0-9]{2}(\(weights.map { $0.capitalized }.joined(separator: "|"))))"
  case .objc:
    include = "--include=\"*.m\" --include=\"*.h\""
    regexPattern = "(\(excludingFileName)[a-zA-Z0-9]+[0-9]{2}(\(weights.map { $0.uppercased() }.joined(separator: "|"))))"
  }

  // Newer versions of grep (on macOS 12+) appear to apply the include/exclude arguments in order, so exclude must come last
  let command = """
  grep --recursive \
    --ignore-case \
    --no-filename \
    --extended-regexp \
    \(include) \
    --exclude=\"\(excludingFileName).swift\" \
    \"\(regexPattern)\" \(path)
  """

  print(command)

  let regex: NSRegularExpression
  do {
    regex = try NSRegularExpression(pattern: regexPattern, options: [])
  } catch {
    fatalError("Invalid regex pattern: \(error) \(regexPattern)")
  }

  let text = shell(command)

  // The grep command returns the full line of code so we need to extract the icon names from each line
  var output = Set<String>()
  let matches = regex.matches(in: text, options: [], range: NSRange(location: 0, length: text.utf16.count))
  for match in matches {
    let groupRange = match.range(at: 1)
    if groupRange.location != NSNotFound,
        let range = Range(groupRange, in: text) {
      output.insert(String(text[range]))
    }
  }
  return output
}
