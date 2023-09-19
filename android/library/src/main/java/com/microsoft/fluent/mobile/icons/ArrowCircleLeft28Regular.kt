package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleLeft28: ImageVector
  get() {
    if (_arrowCircleLeft28 != null) {
      return _arrowCircleLeft28!!
    }
    _arrowCircleLeft28 = fluentIcon(name = "Regular.ArrowCircleLeft28", 28f) {
      materialPath {
          moveTo(13.78F, 19.03F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-3.22F, -3.22F)
          horizontalLineToRelative(8.69F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-8.69F)
          lineToRelative(3.22F, -3.22F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          close()
          moveTo(14.0F, 26.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          close()
          moveToRelative(10.5F, -12.0F)
          curveToRelative(0.0F, 5.799F, -4.701F, 10.5F, -10.5F, 10.5F)
          reflectiveCurveTo(3.5F, 19.799F, 3.5F, 14.0F)
          reflectiveCurveTo(8.201F, 3.5F, 14.0F, 3.5F)
          reflectiveCurveTo(24.5F, 8.201F, 24.5F, 14.0F)
          close()        
      }
    }
    return _arrowCircleLeft28!!
  }

private var _arrowCircleLeft28: ImageVector? = null
