package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Timer20: ImageVector
  get() {
    if (_timer20 != null) {
      return _timer20!!
    }
    _timer20 = fluentIcon(name = "Filled.Timer20", 20f) {
      materialPath {
          moveTo(7.0F, 2.5F)
          curveTo(7.0F, 2.224F, 7.224F, 2.0F, 7.5F, 2.0F)
          horizontalLineToRelative(4.0F)
          curveTo(11.776F, 2.0F, 12.0F, 2.224F, 12.0F, 2.5F)
          reflectiveCurveTo(11.776F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(7.224F, 3.0F, 7.0F, 2.776F, 7.0F, 2.5F)
          close()
          moveToRelative(7.45F, 1.429F)
          curveToRelative(0.194F, -0.195F, 0.511F, -0.195F, 0.706F, 0.0F)
          lineToRelative(1.414F, 1.414F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.195F, 0.196F, -0.511F, 0.196F, -0.707F, 0.0F)
          lineTo(14.45F, 4.636F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          close()
          moveTo(16.5F, 11.0F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          close()
          moveTo(9.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveTo(9.0F, 11.776F, 9.224F, 12.0F, 9.5F, 12.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          curveTo(10.0F, 6.224F, 9.776F, 6.0F, 9.5F, 6.0F)
          reflectiveCurveTo(9.0F, 6.224F, 9.0F, 6.5F)
          close()        
      }
    }
    return _timer20!!
  }

private var _timer20: ImageVector? = null
