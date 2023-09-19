package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleDownRight24: ImageVector
  get() {
    if (_arrowCircleDownRight24 != null) {
      return _arrowCircleDownRight24!!
    }
    _arrowCircleDownRight24 = fluentIcon(name = "Regular.ArrowCircleDownRight24", 24f) {
      materialPath {
          moveTo(13.49F, 14.5F)
          horizontalLineTo(8.75F)
          curveTo(8.336F, 14.5F, 8.0F, 14.836F, 8.0F, 15.25F)
          reflectiveCurveTo(8.336F, 16.0F, 8.75F, 16.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-6.5F)
          curveTo(16.0F, 8.336F, 15.664F, 8.0F, 15.25F, 8.0F)
          reflectiveCurveTo(14.5F, 8.336F, 14.5F, 8.75F)
          verticalLineToRelative(4.639F)
          lineTo(9.278F, 8.217F)
          curveToRelative(-0.295F, -0.291F, -0.77F, -0.29F, -1.06F, 0.005F)
          curveToRelative(-0.292F, 0.295F, -0.29F, 0.77F, 0.004F, 1.06F)
          lineToRelative(5.269F, 5.218F)
          close()
          moveTo(2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          close()
          moveToRelative(10.0F, -8.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          close()        
      }
    }
    return _arrowCircleDownRight24!!
  }

private var _arrowCircleDownRight24: ImageVector? = null
