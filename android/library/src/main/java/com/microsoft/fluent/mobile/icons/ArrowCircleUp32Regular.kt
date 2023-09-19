package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleUp32: ImageVector
  get() {
    if (_arrowCircleUp32 != null) {
      return _arrowCircleUp32!!
    }
    _arrowCircleUp32 = fluentIcon(name = "Regular.ArrowCircleUp32", 32f) {
      materialPath {
          moveTo(9.293F, 16.707F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineTo(15.0F, 12.414F)
          verticalLineTo(22.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-9.586F)
          lineToRelative(4.293F, 4.293F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-6.0F, -6.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-6.0F, 6.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          close()
          moveTo(2.0F, 16.0F)
          curveToRelative(0.0F, 7.732F, 6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveTo(2.0F, 8.268F, 2.0F, 16.0F)
          close()
          moveToRelative(14.0F, 12.0F)
          curveTo(9.373F, 28.0F, 4.0F, 22.627F, 4.0F, 16.0F)
          reflectiveCurveTo(9.373F, 4.0F, 16.0F, 4.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          close()        
      }
    }
    return _arrowCircleUp32!!
  }

private var _arrowCircleUp32: ImageVector? = null
