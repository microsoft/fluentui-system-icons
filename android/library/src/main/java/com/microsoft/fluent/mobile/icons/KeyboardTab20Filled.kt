package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardTab20: ImageVector
  get() {
    if (_keyboardTab20 != null) {
      return _keyboardTab20!!
    }
    _keyboardTab20 = fluentIcon(name = "Filled.KeyboardTab20", 20f) {
      materialPath {
          moveTo(17.0F, 4.75F)
          curveTo(17.0F, 4.336F, 16.664F, 4.0F, 16.25F, 4.0F)
          reflectiveCurveTo(15.5F, 4.336F, 15.5F, 4.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(17.0F, 15.664F, 17.0F, 15.25F)
          verticalLineTo(4.75F)
          close()
          moveTo(8.53F, 4.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.97F, 3.97F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 9.25F, 2.0F, 9.586F, 2.0F, 10.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(8.69F)
          lineToRelative(-3.97F, 3.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(5.25F, -5.25F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(8.53F, 4.22F)
          close()        
      }
    }
    return _keyboardTab20!!
  }

private var _keyboardTab20: ImageVector? = null
