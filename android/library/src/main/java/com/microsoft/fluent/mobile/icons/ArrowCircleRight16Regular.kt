package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleRight16: ImageVector
  get() {
    if (_arrowCircleRight16 != null) {
      return _arrowCircleRight16!!
    }
    _arrowCircleRight16 = fluentIcon(name = "Regular.ArrowCircleRight16", 16f) {
      materialPath {
          moveTo(8.854F, 10.854F)
          lineToRelative(2.5F, -2.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          lineTo(9.793F, 7.5F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 7.5F, 4.5F, 7.724F, 4.5F, 8.0F)
          reflectiveCurveTo(4.724F, 8.5F, 5.0F, 8.5F)
          horizontalLineToRelative(4.793F)
          lineToRelative(-1.646F, 1.646F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          close()
          moveTo(15.0F, 8.0F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          close()
          moveToRelative(-7.0F, 6.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveToRelative(-6.0F, 2.686F, -6.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          close()        
      }
    }
    return _arrowCircleRight16!!
  }

private var _arrowCircleRight16: ImageVector? = null
