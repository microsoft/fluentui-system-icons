package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleLeft32: ImageVector
  get() {
    if (_arrowCircleLeft32 != null) {
      return _arrowCircleLeft32!!
    }
    _arrowCircleLeft32 = fluentIcon(name = "Regular.ArrowCircleLeft32", 32f) {
      materialPath {
          moveTo(16.707F, 22.707F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(12.414F, 17.0F)
          horizontalLineTo(22.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-9.586F)
          lineToRelative(4.293F, -4.293F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-6.0F, 6.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(6.0F, 6.0F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          close()
          moveTo(16.0F, 30.0F)
          curveToRelative(7.732F, 0.0F, 14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveTo(2.0F, 8.268F, 2.0F, 16.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          close()
          moveToRelative(12.0F, -14.0F)
          curveToRelative(0.0F, 6.627F, -5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(4.0F, 22.627F, 4.0F, 16.0F)
          reflectiveCurveTo(9.373F, 4.0F, 16.0F, 4.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          close()        
      }
    }
    return _arrowCircleLeft32!!
  }

private var _arrowCircleLeft32: ImageVector? = null
