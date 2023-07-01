package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Lightbulb28: ImageVector
  get() {
    if (_lightbulb28 != null) {
      return _lightbulb28!!
    }
    _lightbulb28 = fluentIcon(name = "Filled.Lightbulb28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          curveToRelative(0.0F, 2.765F, 1.248F, 5.24F, 3.21F, 6.89F)
          curveToRelative(0.402F, 0.339F, 0.679F, 0.736F, 0.78F, 1.158F)
          lineTo(9.34F, 20.5F)
          horizontalLineToRelative(9.322F)
          lineToRelative(0.349F, -1.452F)
          curveToRelative(0.101F, -0.422F, 0.378F, -0.819F, 0.78F, -1.158F)
          curveTo(21.753F, 16.24F, 23.0F, 13.765F, 23.0F, 11.0F)
          curveToRelative(0.0F, -4.97F, -4.03F, -9.0F, -9.0F, -9.0F)
          close()
          moveToRelative(4.301F, 20.0F)
          horizontalLineTo(9.7F)
          lineToRelative(0.362F, 1.508F)
          curveTo(10.41F, 24.97F, 11.718F, 26.0F, 13.22F, 26.0F)
          horizontalLineToRelative(1.558F)
          curveToRelative(1.503F, 0.0F, 2.81F, -1.03F, 3.16F, -2.492F)
          lineTo(18.301F, 22.0F)
          close()        
      }
    }
    return _lightbulb28!!
  }

private var _lightbulb28: ImageVector? = null
