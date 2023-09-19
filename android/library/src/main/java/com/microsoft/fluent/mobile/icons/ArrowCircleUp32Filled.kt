package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleUp32: ImageVector
  get() {
    if (_arrowCircleUp32 != null) {
      return _arrowCircleUp32!!
    }
    _arrowCircleUp32 = fluentIcon(name = "Filled.ArrowCircleUp32", 32f) {
      materialPath {
          moveTo(16.0F, 30.0F)
          curveTo(8.268F, 30.0F, 2.0F, 23.732F, 2.0F, 16.0F)
          reflectiveCurveTo(8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          close()
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
      }
    }
    return _arrowCircleUp32!!
  }

private var _arrowCircleUp32: ImageVector? = null
