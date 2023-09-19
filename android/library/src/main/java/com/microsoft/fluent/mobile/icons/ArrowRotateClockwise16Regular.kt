package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRotateClockwise16: ImageVector
  get() {
    if (_arrowRotateClockwise16 != null) {
      return _arrowRotateClockwise16!!
    }
    _arrowRotateClockwise16 = fluentIcon(name = "Regular.ArrowRotateClockwise16", 16f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(2.0F, 8.276F, 2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          curveToRelative(0.0F, 1.793F, -0.786F, 3.4F, -2.031F, 4.5F)
          horizontalLineTo(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-2.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(12.0F)
          curveToRelative(1.215F, -0.912F, 2.0F, -2.365F, 2.0F, -4.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(6.0F, 8.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(7.448F, 7.0F, 7.0F, 7.448F, 7.0F, 8.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _arrowRotateClockwise16!!
  }

private var _arrowRotateClockwise16: ImageVector? = null
