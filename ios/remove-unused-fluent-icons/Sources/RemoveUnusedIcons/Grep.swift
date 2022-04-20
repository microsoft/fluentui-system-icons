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

func searchForCodeReferences(in path: String, language: Language, weights: Set<String>, excludingFileName: String) -> [String] {
  let include: String
  let regex: String
  switch language {
  case .swift:
    include = "--include=\"*.swift\""
    regex = "\\.[a-zA-Z0-9]+[0-9]{2}(\(weights.map { $0.capitalized }.joined(separator: "|")))"
  case .objc:
    include = "--include=\"*.m\" --include=\"*.h\""
    regex = "\(excludingFileName)[a-zA-Z0-9]+[0-9]{2}(\(weights.map { $0.uppercased() }.joined(separator: "|")))"
  }

  // Newer versions of grep (on macOS 12+) appear to apply the include/exclude arguments in order, so exclude must come last
  let command = """
  grep --recursive \
    --ignore-case \
    --no-filename \
    --extended-regexp \
    \(include) \
    --exclude=\"\(excludingFileName).swift\" \
    \"\(regex)\" \(path)
  """
  print(command)

  return shell(command).mapToLines()
}
