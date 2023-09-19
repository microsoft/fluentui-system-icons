package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RecordStop24: ImageVector
  get() {
    if (_recordStop24 != null) {
      return _recordStop24!!
    }
    _recordStop24 = fluentIcon(name = "Filled.RecordStop24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveTo(9.5F, 8.0F)
          horizontalLineToRelative(5.0F)
          curveTo(15.328F, 8.0F, 16.0F, 8.672F, 16.0F, 9.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(8.672F, 16.0F, 8.0F, 15.328F, 8.0F, 14.5F)
          verticalLineToRelative(-5.0F)
          curveTo(8.0F, 8.672F, 8.672F, 8.0F, 9.5F, 8.0F)
          close()        
      }
    }
    return _recordStop24!!
  }

private var _recordStop24: ImageVector? = null
