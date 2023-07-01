package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CheckmarkCircle32: ImageVector
  get() {
    if (_checkmarkCircle32 != null) {
      return _checkmarkCircle32!!
    }
    _checkmarkCircle32 = fluentIcon(name = "Regular.CheckmarkCircle32", 32f) {
      materialPath {
          moveTo(22.707F, 12.707F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(14.5F, 18.086F)
          lineToRelative(-3.293F, -3.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(7.5F, -7.5F)
          close()
          moveTo(16.0F, 2.0F)
          curveTo(8.268F, 2.0F, 2.0F, 8.268F, 2.0F, 16.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          close()
          moveTo(4.0F, 16.0F)
          curveTo(4.0F, 9.373F, 9.373F, 4.0F, 16.0F, 4.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(4.0F, 22.627F, 4.0F, 16.0F)
          close()        
      }
    }
    return _checkmarkCircle32!!
  }

private var _checkmarkCircle32: ImageVector? = null
