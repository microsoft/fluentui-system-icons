package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.KeyboardTab20: ImageVector
  get() {
    if (_keyboardTab20 != null) {
      return _keyboardTab20!!
    }
    _keyboardTab20 = fluentIcon(name = "Regular.KeyboardTab20", 20f) {
      materialPath {
          moveTo(9.354F, 4.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineTo(13.293F, 9.5F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 9.5F, 3.0F, 9.724F, 3.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(9.793F)
          lineToRelative(-4.646F, 4.646F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(5.5F, -5.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-5.5F, -5.5F)
          close()
          moveTo(17.0F, 4.5F)
          curveTo(17.0F, 4.224F, 16.776F, 4.0F, 16.5F, 4.0F)
          reflectiveCurveTo(16.0F, 4.224F, 16.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          close()        
      }
    }
    return _keyboardTab20!!
  }

private var _keyboardTab20: ImageVector? = null
