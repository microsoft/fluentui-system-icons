package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleUpLeft24: ImageVector
  get() {
    if (_arrowCircleUpLeft24 != null) {
      return _arrowCircleUpLeft24!!
    }
    _arrowCircleUpLeft24 = fluentIcon(name = "Regular.ArrowCircleUpLeft24", 24f) {
      materialPath {
          moveTo(10.51F, 9.5F)
          horizontalLineToRelative(4.74F)
          curveTo(15.664F, 9.5F, 16.0F, 9.164F, 16.0F, 8.75F)
          reflectiveCurveTo(15.664F, 8.0F, 15.25F, 8.0F)
          horizontalLineToRelative(-6.5F)
          curveTo(8.336F, 8.0F, 8.0F, 8.336F, 8.0F, 8.75F)
          verticalLineToRelative(6.5F)
          curveTo(8.0F, 15.664F, 8.336F, 16.0F, 8.75F, 16.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-4.639F)
          lineToRelative(5.222F, 5.172F)
          curveToRelative(0.295F, 0.291F, 0.77F, 0.29F, 1.06F, -0.005F)
          curveToRelative(0.292F, -0.295F, 0.29F, -0.77F, -0.004F, -1.06F)
          lineTo(10.509F, 9.5F)
          close()
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, 5.523F, -4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          close()
          moveToRelative(-10.0F, 8.5F)
          curveToRelative(4.694F, 0.0F, 8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveTo(16.694F, 3.5F, 12.0F, 3.5F)
          reflectiveCurveTo(3.5F, 7.306F, 3.5F, 12.0F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          close()        
      }
    }
    return _arrowCircleUpLeft24!!
  }

private var _arrowCircleUpLeft24: ImageVector? = null
