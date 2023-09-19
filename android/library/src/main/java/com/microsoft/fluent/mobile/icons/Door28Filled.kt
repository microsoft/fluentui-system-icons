package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Door28: ImageVector
  get() {
    if (_door28 != null) {
      return _door28!!
    }
    _door28 = fluentIcon(name = "Filled.Door28", 28f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(6.343F, 2.0F, 5.0F, 3.343F, 5.0F, 5.0F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(1.5F, 13.0F)
          curveTo(8.672F, 15.0F, 8.0F, 14.328F, 8.0F, 13.5F)
          reflectiveCurveTo(8.672F, 12.0F, 9.5F, 12.0F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(10.328F, 15.0F, 9.5F, 15.0F)
          close()        
      }
    }
    return _door28!!
  }

private var _door28: ImageVector? = null
