//
//  Copyright (c) Microsoft Corporation.
//  Licensed under the MIT license.
//

import UIKit
import FluentIcons

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

  var window: UIWindow?

  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    if let windowScene = scene as? UIWindowScene {
      window = UIWindow(windowScene: windowScene)

      _ = UIImage(fluent: .accessTime24Filled)
      _ = UIImageView(fluent: .accessTime24Regular, tintColor: .black)

      window?.rootViewController = UIViewController()
      window?.makeKeyAndVisible()
    }
  }
}
