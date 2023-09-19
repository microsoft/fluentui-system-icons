package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Timer20: ImageVector
  get() {
    if (_timer20 != null) {
      return _timer20!!
    }
    _timer20 = fluentIcon(name = "Regular.Timer20", 20f) {
      materialPath {
          moveTo(7.5F, 2.0F)
          curveTo(7.224F, 2.0F, 7.0F, 2.224F, 7.0F, 2.5F)
          reflectiveCurveTo(7.224F, 3.0F, 7.5F, 3.0F)
          horizontalLineToRelative(4.0F)
          curveTo(11.776F, 3.0F, 12.0F, 2.776F, 12.0F, 2.5F)
          reflectiveCurveTo(11.776F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(7.656F, 1.929F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(1.414F, 1.414F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.195F, 0.196F, -0.511F, 0.0F, -0.707F)
          lineTo(15.156F, 3.93F)
          close()
          moveTo(9.5F, 6.0F)
          curveTo(9.224F, 6.0F, 9.0F, 6.224F, 9.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveTo(9.0F, 11.776F, 9.224F, 12.0F, 9.5F, 12.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          curveTo(10.0F, 6.224F, 9.776F, 6.0F, 9.5F, 6.0F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          close()        
      }
    }
    return _timer20!!
  }

private var _timer20: ImageVector? = null
