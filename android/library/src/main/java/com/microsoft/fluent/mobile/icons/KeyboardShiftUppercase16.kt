package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardShiftUppercase16: ImageVector
  get() {
    if (_keyboardShiftUppercase16 != null) {
      return _keyboardShiftUppercase16!!
    }
    _keyboardShiftUppercase16 = fluentIcon(name = "Filled.KeyboardShiftUppercase16", 16f) {
      materialPath {
          moveTo(6.817F, 1.571F)
          curveToRelative(0.604F, -0.761F, 1.763F, -0.761F, 2.367F, 0.0F)
          lineToRelative(4.598F, 5.802F)
          curveToRelative(0.52F, 0.657F, 0.05F, 1.621F, -0.789F, 1.621F)
          horizontalLineToRelative(-1.978F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.553F, -0.45F, 1.001F, -1.005F, 1.001F)
          horizontalLineTo(5.99F)
          curveToRelative(-0.555F, 0.0F, -1.005F, -0.448F, -1.005F, -1.001F)
          verticalLineTo(8.994F)
          horizontalLineTo(3.007F)
          curveToRelative(-0.84F, 0.0F, -1.31F, -0.964F, -0.789F, -1.62F)
          lineToRelative(4.6F, -5.803F)
          close()
          moveTo(5.5F, 13.0F)
          curveTo(5.224F, 13.0F, 5.0F, 13.224F, 5.0F, 13.5F)
          reflectiveCurveTo(5.224F, 14.0F, 5.5F, 14.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.776F, 13.0F, 10.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _keyboardShiftUppercase16!!
  }

private var _keyboardShiftUppercase16: ImageVector? = null
