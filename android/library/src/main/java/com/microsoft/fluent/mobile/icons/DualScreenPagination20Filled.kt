package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DualScreenPagination20: ImageVector
  get() {
    if (_dualScreenPagination20 != null) {
      return _dualScreenPagination20!!
    }
    _dualScreenPagination20 = fluentIcon(name = "Filled.DualScreenPagination20", 20f) {
      materialPath {
          moveTo(16.0F, 16.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveTo(4.0F, 4.0F)
          horizontalLineToRelative(5.5F)
          verticalLineToRelative(12.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(8.5F, 10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 13.0F, 12.5F, 13.0F)
          reflectiveCurveTo(12.0F, 13.224F, 12.0F, 13.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          close()
          moveToRelative(2.5F, -0.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(14.0F, 13.224F, 14.0F, 13.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          close()
          moveToRelative(1.5F, 0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 13.0F, 16.5F, 13.0F)
          reflectiveCurveTo(16.0F, 13.224F, 16.0F, 13.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          close()        
      }
    }
    return _dualScreenPagination20!!
  }

private var _dualScreenPagination20: ImageVector? = null
