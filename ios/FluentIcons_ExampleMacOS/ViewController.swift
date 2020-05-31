//
//  ViewController.swift
//  FluentIcons_ExampleMacOS
//
//  Created by Nicholas Romano on 5/26/20.
//  Copyright © 2020 CocoaPods. All rights reserved.
//

import Cocoa
import FluentIcons

class ViewController: NSViewController {

  @IBOutlet weak var iconImageView: NSImageView!

  override func viewDidLoad() {
    super.viewDidLoad()

    iconImageView.image = NSImage.fluentIcon(.accessibility24Filled)
  }

  override var representedObject: Any? {
    didSet {
    // Update the view, if already loaded.
    }
  }


}

