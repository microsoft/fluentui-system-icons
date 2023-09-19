package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Important16: ImageVector
  get() {
    if (_important16 != null) {
      return _important16!!
    }
    _important16 = fluentIcon(name = "Filled.Important16", 16f) {
      materialPath {
          moveTo(5.96F, 4.457F)
          curveTo(5.722F, 3.18F, 6.7F, 2.0F, 8.0F, 2.0F)
          reflectiveCurveToRelative(2.279F, 1.18F, 2.04F, 2.457F)
          lineToRelative(-0.856F, 4.56F)
          curveTo(9.077F, 9.587F, 8.58F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveTo(6.923F, 9.587F, 6.816F, 9.017F)
          lineTo(5.96F, 4.457F)
          close()
          moveTo(9.5F, 12.5F)
          curveTo(9.5F, 13.328F, 8.828F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(-1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveTo(7.172F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _important16!!
  }

private var _important16: ImageVector? = null
