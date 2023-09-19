package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleUpRight24: ImageVector
  get() {
    if (_arrowCircleUpRight24 != null) {
      return _arrowCircleUpRight24!!
    }
    _arrowCircleUpRight24 = fluentIcon(name = "Regular.ArrowCircleUpRight24", 24f) {
      materialPath {
          moveTo(13.49F, 9.5F)
          horizontalLineTo(8.75F)
          curveTo(8.336F, 9.5F, 8.0F, 9.164F, 8.0F, 8.75F)
          reflectiveCurveTo(8.336F, 8.0F, 8.75F, 8.0F)
          horizontalLineToRelative(6.5F)
          curveTo(15.664F, 8.0F, 16.0F, 8.336F, 16.0F, 8.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-4.639F)
          lineToRelative(-5.222F, 5.172F)
          curveToRelative(-0.295F, 0.291F, -0.77F, 0.29F, -1.06F, -0.005F)
          curveToRelative(-0.292F, -0.295F, -0.29F, -0.77F, 0.004F, -1.06F)
          lineTo(13.491F, 9.5F)
          close()
          moveTo(2.0F, 12.0F)
          curveToRelative(0.0F, 5.523F, 4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          close()
          moveToRelative(10.0F, 8.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, -3.806F, -8.5F, -8.5F)
          reflectiveCurveTo(7.306F, 3.5F, 12.0F, 3.5F)
          reflectiveCurveToRelative(8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          close()        
      }
    }
    return _arrowCircleUpRight24!!
  }

private var _arrowCircleUpRight24: ImageVector? = null
