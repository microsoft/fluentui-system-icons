package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.GlanceDefault12: ImageVector
  get() {
    if (_glanceDefault12 != null) {
      return _glanceDefault12!!
    }
    _glanceDefault12 = fluentIcon(name = "Filled.GlanceDefault12", 12f) {
      materialPath {
          moveTo(6.0F, 9.5F)
          curveTo(6.0F, 10.328F, 6.672F, 11.0F, 7.5F, 11.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveTo(11.0F, 5.672F, 10.328F, 5.0F, 9.5F, 5.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(6.672F, 5.0F, 6.0F, 5.672F, 6.0F, 6.5F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(-5.0F, -4.0F)
          curveTo(1.0F, 6.328F, 1.672F, 7.0F, 2.5F, 7.0F)
          horizontalLineToRelative(1.0F)
          curveTo(4.328F, 7.0F, 5.0F, 6.328F, 5.0F, 5.5F)
          verticalLineToRelative(-3.0F)
          curveTo(5.0F, 1.672F, 4.328F, 1.0F, 3.5F, 1.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(1.672F, 1.0F, 1.0F, 1.672F, 1.0F, 2.5F)
          verticalLineToRelative(3.0F)
          close()
          moveTo(7.5F, 4.0F)
          curveTo(6.672F, 4.0F, 6.0F, 3.328F, 6.0F, 2.5F)
          reflectiveCurveTo(6.672F, 1.0F, 7.5F, 1.0F)
          horizontalLineToRelative(2.0F)
          curveTo(10.328F, 1.0F, 11.0F, 1.672F, 11.0F, 2.5F)
          reflectiveCurveTo(10.328F, 4.0F, 9.5F, 4.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveTo(1.0F, 9.5F)
          curveTo(1.0F, 10.328F, 1.672F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(1.0F)
          curveTo(4.328F, 11.0F, 5.0F, 10.328F, 5.0F, 9.5F)
          reflectiveCurveTo(4.328F, 8.0F, 3.5F, 8.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(1.672F, 8.0F, 1.0F, 8.672F, 1.0F, 9.5F)
          close()        
      }
    }
    return _glanceDefault12!!
  }

private var _glanceDefault12: ImageVector? = null
