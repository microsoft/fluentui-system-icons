// swift-tools-version:5.2
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "remove-unused-fluent-icons",
  platforms: [
    .macOS(.v10_13),
  ],
  products: [
    .executable(name: "remove-unused-fluent-icons", targets: ["remove-unused-fluent-icons"]),
  ],
  dependencies: [
    .package(url: "https://github.com/apple/swift-argument-parser", from: "0.0.5"),
  ],
  targets: [
    .target(
      name: "RemoveUnusedIcons",
      dependencies: []
    ),
    .testTarget(
      name: "RemoveUnusedIconsTests",
      dependencies: ["RemoveUnusedIcons"]
    ),
    .target(
      name: "remove-unused-fluent-icons",
      dependencies: [
        .product(name: "ArgumentParser", package: "swift-argument-parser"),
        "RemoveUnusedIcons",
      ]
    ),
  ]
)
