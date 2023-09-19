package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRotateCounterclockwise24: ImageVector
  get() {
    if (_arrowRotateCounterclockwise24 != null) {
      return _arrowRotateCounterclockwise24!!
    }
    _arrowRotateCounterclockwise24 = fluentIcon(name = "Regular.ArrowRotateCounterclockwise24", 24f) {
      materialPath {
          moveTo(12.0F, 3.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          curveToRelative(0.0F, 3.078F, 1.56F, 5.865F, 4.023F, 7.5F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(5.25F, 21.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.648F)
          lineTo(10.0F, 20.25F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, 0.282F, -0.743F, 0.648F)
          lineTo(8.5F, 16.25F)
          lineToRelative(-0.001F, 2.385F)
          curveTo(6.076F, 17.355F, 4.5F, 14.825F, 4.5F, 12.0F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(21.0F, 12.414F, 21.0F, 12.0F)
          curveToRelative(0.0F, -4.97F, -4.03F, -9.0F, -9.0F, -9.0F)
          close()
          moveToRelative(0.0F, 6.25F)
          curveToRelative(-1.519F, 0.0F, -2.75F, 1.231F, -2.75F, 2.75F)
          reflectiveCurveToRelative(1.231F, 2.75F, 2.75F, 2.75F)
          reflectiveCurveToRelative(2.75F, -1.231F, 2.75F, -2.75F)
          reflectiveCurveTo(13.519F, 9.25F, 12.0F, 9.25F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          close()        
      }
    }
    return _arrowRotateCounterclockwise24!!
  }

private var _arrowRotateCounterclockwise24: ImageVector? = null
