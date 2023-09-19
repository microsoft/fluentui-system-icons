package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRotateClockwise24: ImageVector
  get() {
    if (_arrowRotateClockwise24 != null) {
      return _arrowRotateClockwise24!!
    }
    _arrowRotateClockwise24 = fluentIcon(name = "Regular.ArrowRotateClockwise24", 24f) {
      materialPath {
          moveTo(12.0F, 3.0F)
          curveToRelative(4.97F, 0.0F, 9.0F, 4.03F, 9.0F, 9.0F)
          curveToRelative(0.0F, 3.078F, -1.56F, 5.865F, -4.023F, 7.5F)
          horizontalLineToRelative(1.773F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(18.75F, 21.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(14.0F, 20.25F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(15.5F, 16.25F)
          lineToRelative(0.001F, 2.385F)
          curveToRelative(2.423F, -1.28F, 3.999F, -3.81F, 3.999F, -6.635F)
          curveToRelative(0.0F, -4.142F, -3.358F, -7.5F, -7.5F, -7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(3.0F, 12.414F, 3.0F, 12.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          close()
          moveToRelative(0.0F, 6.25F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveToRelative(-1.231F, 2.75F, -2.75F, 2.75F)
          reflectiveCurveTo(9.25F, 13.519F, 9.25F, 12.0F)
          reflectiveCurveTo(10.481F, 9.25F, 12.0F, 9.25F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          close()        
      }
    }
    return _arrowRotateClockwise24!!
  }

private var _arrowRotateClockwise24: ImageVector? = null
