package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRight48: ImageVector
  get() {
    if (_arrowRight48 != null) {
      return _arrowRight48!!
    }
    _arrowRight48 = fluentIcon(name = "Regular.ArrowRight48", 48f) {
      materialPath {
          moveTo(4.0F, 24.0F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(32.446F)
          lineTo(24.874F, 10.14F)
          curveToRelative(-0.493F, -0.484F, -0.5F, -1.275F, -0.015F, -1.767F)
          curveToRelative(0.484F, -0.493F, 1.275F, -0.5F, 1.767F, -0.015F)
          lineToRelative(14.988F, 14.738F)
          lineToRelative(0.027F, 0.026F)
          curveToRelative(0.212F, 0.216F, 0.33F, 0.488F, 0.354F, 0.768F)
          curveToRelative(0.007F, 0.08F, 0.007F, 0.16F, -0.002F, 0.241F)
          curveToRelative(-0.029F, 0.271F, -0.146F, 0.535F, -0.352F, 0.744F)
          lineToRelative(-0.04F, 0.041F)
          lineTo(26.626F, 39.64F)
          curveToRelative(-0.492F, 0.484F, -1.283F, 0.478F, -1.767F, -0.015F)
          curveToRelative(-0.484F, -0.492F, -0.478F, -1.283F, 0.015F, -1.767F)
          lineToRelative(12.822F, -12.61F)
          horizontalLineTo(5.25F)
          curveTo(4.56F, 25.25F, 4.0F, 24.69F, 4.0F, 24.0F)
          close()        
      }
    }
    return _arrowRight48!!
  }

private var _arrowRight48: ImageVector? = null
