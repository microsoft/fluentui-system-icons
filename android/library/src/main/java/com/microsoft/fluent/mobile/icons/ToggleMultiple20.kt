package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ToggleMultiple20: ImageVector
  get() {
    if (_toggleMultiple20 != null) {
      return _toggleMultiple20!!
    }
    _toggleMultiple20 = fluentIcon(name = "Filled.ToggleMultiple20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 3.567F, 4.567F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(15.433F, 2.0F, 17.0F, 3.567F, 17.0F, 5.5F)
          reflectiveCurveTo(15.433F, 9.0F, 13.5F, 9.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.567F, 9.0F, 3.0F, 7.433F, 3.0F, 5.5F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveTo(8.0F, 4.672F, 7.328F, 4.0F, 6.5F, 4.0F)
          reflectiveCurveTo(5.0F, 4.672F, 5.0F, 5.5F)
          reflectiveCurveTo(5.672F, 7.0F, 6.5F, 7.0F)
          reflectiveCurveTo(8.0F, 6.328F, 8.0F, 5.5F)
          close()
          moveTo(6.5F, 11.0F)
          curveTo(4.567F, 11.0F, 3.0F, 12.567F, 3.0F, 14.5F)
          reflectiveCurveTo(4.567F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveTo(15.433F, 11.0F, 13.5F, 11.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(7.0F, 5.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          close()        
      }
    }
    return _toggleMultiple20!!
  }

private var _toggleMultiple20: ImageVector? = null
