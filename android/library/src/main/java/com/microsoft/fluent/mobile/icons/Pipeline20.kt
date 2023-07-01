package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pipeline20: ImageVector
  get() {
    if (_pipeline20 != null) {
      return _pipeline20!!
    }
    _pipeline20 = fluentIcon(name = "Filled.Pipeline20", 20f) {
      materialPath {
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 4.672F, 2.672F, 4.0F, 3.5F, 4.0F)
          reflectiveCurveTo(5.0F, 4.671F, 5.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(5.0F, 15.33F, 4.328F, 16.0F, 3.5F, 16.0F)
          reflectiveCurveTo(2.0F, 15.328F, 2.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(13.0F, 0.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(18.0F, 4.672F, 17.328F, 4.0F, 16.5F, 4.0F)
          reflectiveCurveTo(15.0F, 4.672F, 15.0F, 5.5F)
          close()
          moveTo(14.0F, 14.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(8.0F)
          close()        
      }
    }
    return _pipeline20!!
  }

private var _pipeline20: ImageVector? = null
