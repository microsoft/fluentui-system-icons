package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUp48: ImageVector
  get() {
    if (_arrowUp48 != null) {
      return _arrowUp48!!
    }
    _arrowUp48 = fluentIcon(name = "Regular.ArrowUp48", 48f) {
      materialPath {
          moveTo(24.0F, 44.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(10.304F)
          lineTo(10.14F, 23.126F)
          curveToRelative(-0.484F, 0.493F, -1.275F, 0.5F, -1.767F, 0.015F)
          curveToRelative(-0.493F, -0.484F, -0.5F, -1.275F, -0.015F, -1.767F)
          lineTo(23.097F, 6.386F)
          lineToRelative(0.026F, -0.027F)
          curveToRelative(0.216F, -0.212F, 0.488F, -0.33F, 0.768F, -0.354F)
          curveToRelative(0.08F, -0.007F, 0.16F, -0.006F, 0.241F, 0.002F)
          curveToRelative(0.271F, 0.029F, 0.535F, 0.146F, 0.744F, 0.352F)
          lineToRelative(0.041F, 0.04F)
          lineToRelative(14.724F, 14.975F)
          curveToRelative(0.484F, 0.492F, 0.478F, 1.283F, -0.015F, 1.767F)
          curveToRelative(-0.492F, 0.484F, -1.283F, 0.478F, -1.767F, -0.015F)
          lineToRelative(-12.61F, -12.822F)
          verticalLineTo(42.75F)
          curveTo(25.25F, 43.44F, 24.69F, 44.0F, 24.0F, 44.0F)
          close()        
      }
    }
    return _arrowUp48!!
  }

private var _arrowUp48: ImageVector? = null
