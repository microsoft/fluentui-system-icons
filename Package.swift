// swift-tools-version: 5.7
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "FluentIcons",
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "FluentIcons",
            targets: ["FluentIcons"]),
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .target(
            name: "FluentIcons",
            dependencies: [],
            path: "ios/FluentIcons",
            exclude: [
                "android", "art", "assets", "flutter", "fonts", "importer", "packages", "generate_icons_md.py", "icon_filled.md", "icon_regular.md", "LICENSE", "NOTICE", "package-lock.json", "package.json", "SECURITY.md", "yarn.lock"
            ]
        )
    ]
)
