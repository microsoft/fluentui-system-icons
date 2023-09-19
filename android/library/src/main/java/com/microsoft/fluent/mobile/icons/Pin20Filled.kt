package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pin20: ImageVector
  get() {
    if (_pin20 != null) {
      return _pin20!!
    }
    _pin20 = fluentIcon(name = "Filled.Pin20", 20f) {
      materialPath {
          moveTo(13.325F, 2.617F)
          curveToRelative(-0.965F, -0.965F, -2.592F, -0.7F, -3.203F, 0.52F)
          lineToRelative(-1.73F, 3.459F)
          curveTo(8.23F, 6.924F, 7.95F, 7.18F, 7.609F, 7.317F)
          lineToRelative(-3.59F, 1.437F)
          curveTo(3.352F, 9.02F, 3.175F, 9.88F, 3.683F, 10.389F)
          lineTo(6.293F, 13.0F)
          lineTo(3.0F, 16.292F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(0.707F)
          lineTo(7.0F, 13.706F)
          lineToRelative(2.61F, 2.61F)
          curveToRelative(0.508F, 0.508F, 1.37F, 0.332F, 1.636F, -0.335F)
          lineToRelative(1.436F, -3.59F)
          curveToRelative(0.136F, -0.341F, 0.393F, -0.62F, 0.722F, -0.784F)
          lineToRelative(3.458F, -1.73F)
          curveToRelative(1.221F, -0.61F, 1.485F, -2.238F, 0.52F, -3.203F)
          lineToRelative(-4.057F, -4.057F)
          close()        
      }
    }
    return _pin20!!
  }

private var _pin20: ImageVector? = null
