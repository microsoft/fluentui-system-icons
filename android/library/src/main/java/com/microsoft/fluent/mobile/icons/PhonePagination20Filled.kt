package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhonePagination20: ImageVector
  get() {
    if (_phonePagination20 != null) {
      return _phonePagination20!!
    }
    _phonePagination20 = fluentIcon(name = "Filled.PhonePagination20", 20f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(3.0F, 11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(8.276F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(7.724F, 15.0F, 8.0F, 15.0F)
          close()
          moveToRelative(2.0F, 0.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.276F, 14.0F, 10.0F, 14.0F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(9.724F, 15.0F, 10.0F, 15.0F)
          close()
          moveToRelative(2.5F, -0.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(11.724F, 15.0F, 12.0F, 15.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          close()        
      }
    }
    return _phonePagination20!!
  }

private var _phonePagination20: ImageVector? = null
