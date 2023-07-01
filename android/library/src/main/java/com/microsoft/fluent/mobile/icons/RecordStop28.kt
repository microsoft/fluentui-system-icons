package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RecordStop28: ImageVector
  get() {
    if (_recordStop28 != null) {
      return _recordStop28!!
    }
    _recordStop28 = fluentIcon(name = "Filled.RecordStop28", 28f) {
      materialPath {
          moveTo(14.0F, 26.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          close()
          moveTo(10.5F, 9.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(9.672F, 19.0F, 9.0F, 18.328F, 9.0F, 17.5F)
          verticalLineToRelative(-7.0F)
          curveTo(9.0F, 9.672F, 9.672F, 9.0F, 10.5F, 9.0F)
          close()        
      }
    }
    return _recordStop28!!
  }

private var _recordStop28: ImageVector? = null
