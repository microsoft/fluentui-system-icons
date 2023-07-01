package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardShift16: ImageVector
  get() {
    if (_keyboardShift16 != null) {
      return _keyboardShift16!!
    }
    _keyboardShift16 = fluentIcon(name = "Filled.KeyboardShift16", 16f) {
      materialPath {
          moveTo(9.184F, 1.571F)
          curveTo(8.58F, 0.81F, 7.42F, 0.81F, 6.817F, 1.571F)
          lineTo(2.218F, 7.373F)
          curveToRelative(-0.52F, 0.657F, -0.05F, 1.621F, 0.789F, 1.621F)
          horizontalLineToRelative(1.978F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.552F, 0.45F, 1.0F, 1.005F, 1.0F)
          horizontalLineToRelative(4.02F)
          curveToRelative(0.556F, 0.0F, 1.005F, -0.448F, 1.005F, -1.001F)
          verticalLineTo(8.994F)
          horizontalLineToRelative(1.978F)
          curveToRelative(0.84F, 0.0F, 1.31F, -0.964F, 0.789F, -1.62F)
          lineTo(9.184F, 1.57F)
          close()        
      }
    }
    return _keyboardShift16!!
  }

private var _keyboardShift16: ImageVector? = null
