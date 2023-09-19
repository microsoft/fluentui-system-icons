package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Lightbulb32: ImageVector
  get() {
    if (_lightbulb32 != null) {
      return _lightbulb32!!
    }
    _lightbulb32 = fluentIcon(name = "Filled.Lightbulb32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveTo(10.477F, 2.0F, 6.0F, 6.477F, 6.0F, 12.0F)
          curveToRelative(0.0F, 2.977F, 1.302F, 5.651F, 3.365F, 7.482F)
          curveToRelative(0.343F, 0.304F, 0.561F, 0.645F, 0.64F, 0.986F)
          lineTo(10.82F, 24.0F)
          horizontalLineToRelative(10.36F)
          lineToRelative(0.815F, -3.532F)
          curveToRelative(0.079F, -0.34F, 0.297F, -0.682F, 0.64F, -0.986F)
          curveTo(24.698F, 17.652F, 26.0F, 14.977F, 26.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          close()
          moveToRelative(4.719F, 24.0F)
          horizontalLineTo(11.28F)
          lineToRelative(0.297F, 1.287F)
          curveTo(11.945F, 28.875F, 13.36F, 30.0F, 14.988F, 30.0F)
          horizontalLineToRelative(2.023F)
          curveToRelative(1.63F, 0.0F, 3.044F, -1.125F, 3.41F, -2.713F)
          lineTo(20.72F, 26.0F)
          close()        
      }
    }
    return _lightbulb32!!
  }

private var _lightbulb32: ImageVector? = null
