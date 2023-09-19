package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleUp28: ImageVector
  get() {
    if (_arrowCircleUp28 != null) {
      return _arrowCircleUp28!!
    }
    _arrowCircleUp28 = fluentIcon(name = "Regular.ArrowCircleUp28", 28f) {
      materialPath {
          moveTo(8.97F, 13.78F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(3.22F, -3.22F)
          verticalLineToRelative(8.69F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-8.69F)
          lineToRelative(3.22F, 3.22F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          close()
          moveTo(2.0F, 14.0F)
          curveToRelative(0.0F, 6.627F, 5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          close()
          moveToRelative(12.0F, 10.5F)
          curveTo(8.201F, 24.5F, 3.5F, 19.799F, 3.5F, 14.0F)
          reflectiveCurveTo(8.201F, 3.5F, 14.0F, 3.5F)
          reflectiveCurveTo(24.5F, 8.201F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 24.5F, 14.0F, 24.5F)
          close()        
      }
    }
    return _arrowCircleUp28!!
  }

private var _arrowCircleUp28: ImageVector? = null
