package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Heart48: ImageVector
  get() {
    if (_heart48 != null) {
      return _heart48!!
    }
    _heart48 = fluentIcon(name = "Filled.Heart48", 48f) {
      materialPath {
          moveTo(21.262F, 10.179F)
          curveTo(17.57F, 7.389F, 12.508F, 7.27F, 8.688F, 9.883F)
          curveToRelative(-5.65F, 3.865F, -6.308F, 11.953F, -1.357F, 16.68F)
          lineToRelative(15.806F, 15.092F)
          curveToRelative(0.483F, 0.462F, 1.243F, 0.462F, 1.726F, 0.0F)
          lineToRelative(15.803F, -15.09F)
          curveToRelative(4.952F, -4.729F, 4.293F, -12.817F, -1.358F, -16.682F)
          curveToRelative(-3.82F, -2.613F, -8.884F, -2.493F, -12.577F, 0.299F)
          lineTo(24.0F, 12.246F)
          lineToRelative(-2.738F, -2.068F)
          close()        
      }
    }
    return _heart48!!
  }

private var _heart48: ImageVector? = null
