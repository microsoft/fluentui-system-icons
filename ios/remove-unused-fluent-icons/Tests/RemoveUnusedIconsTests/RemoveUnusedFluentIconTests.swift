//
//  Copyright (c) Microsoft Corporation. All rights reserved.
//

import class Foundation.Bundle
import XCTest

@testable import RemoveUnusedIcons

final class RemoveUnusedFluentIconTests: XCTestCase {
  let fluentIconSource = URL(fileURLWithPath: #file)
    .deletingLastPathComponent()
    .deletingLastPathComponent()
    .deletingLastPathComponent()
    .deletingLastPathComponent()
    .deletingLastPathComponent()

  let libraryName = "FluentIcons"

  func testIconFileParsing() throws {
    let result = try getAllIconNames(pathToFluentIconSource: fluentIconSource.path, libraryName: libraryName, fileName: "FluentIcon")

    XCTAssertFalse(result.names.isEmpty)
    XCTAssertFalse(result.weights.isEmpty)
  }

  func testSearchForSwift() throws {
    let testProject = fluentIconSource
      .appendingPathComponent("ios")
      .appendingPathComponent("remove-unused-fluent-icons")
      .appendingPathComponent("TestProject")
    let result = searchForCodeReferences(in: testProject.path, language: .swift, weights: ["regular", "filled"], excludingFileName: "FluentIcon")

    XCTAssertEqual(result, [".add12Filled"])
  }

  func testSearchForObjc() throws {
    let testProject = fluentIconSource
      .appendingPathComponent("ios")
      .appendingPathComponent("remove-unused-fluent-icons")
      .appendingPathComponent("TestProject")
    let result = searchForCodeReferences(in: testProject.path, language: .objc, weights: ["regular", "filled"], excludingFileName: "FluentIcon")

    XCTAssertEqual(result, ["FluentIconArchive28Filled", "FluentIconAddCircle20Filled"])
  }

  func testGetIconNameFromAssetCatalog() throws {
    let imageset = fluentIconSource
      .appendingPathComponent("ios")
      .appendingPathComponent("FluentIcons")
      .appendingPathComponent("Assets")
      .appendingPathComponent("IconAssets.xcassets")
      .appendingPathComponent("ic_fluent_access_time_24_filled.imageset")
    let result = getIconName(from: imageset)

    XCTAssertEqual(result, "accessTime24Filled")
  }
}
