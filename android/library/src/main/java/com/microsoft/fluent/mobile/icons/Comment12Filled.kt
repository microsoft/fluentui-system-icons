package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comment12: ImageVector
  get() {
    if (_comment12 != null) {
      return _comment12!!
    }
    _comment12 = fluentIcon(name = "Filled.Comment12", 12f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(4.0F)
          curveTo(2.0F, 8.328F, 2.672F, 9.0F, 3.5F, 9.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.18F, 0.097F, 0.346F, 0.254F, 0.435F)
          curveToRelative(0.156F, 0.089F, 0.349F, 0.086F, 0.503F, -0.006F)
          lineTo(7.138F, 9.0F)
          horizontalLineTo(8.5F)
          curveTo(9.328F, 9.0F, 10.0F, 8.328F, 10.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          curveTo(10.0F, 2.672F, 9.328F, 2.0F, 8.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _comment12!!
  }

private var _comment12: ImageVector? = null
