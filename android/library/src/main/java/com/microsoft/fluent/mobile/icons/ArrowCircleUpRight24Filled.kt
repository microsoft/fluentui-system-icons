package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleUpRight24: ImageVector
  get() {
    if (_arrowCircleUpRight24 != null) {
      return _arrowCircleUpRight24!!
    }
    _arrowCircleUpRight24 = fluentIcon(name = "Filled.ArrowCircleUpRight24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveTo(6.477F, 22.0F, 2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          close()
          moveTo(8.75F, 9.5F)
          horizontalLineToRelative(4.74F)
          lineToRelative(-5.268F, 5.217F)
          curveToRelative(-0.294F, 0.292F, -0.296F, 0.766F, -0.005F, 1.06F)
          curveToRelative(0.292F, 0.295F, 0.766F, 0.297F, 1.06F, 0.006F)
          lineTo(14.5F, 10.61F)
          verticalLineToRelative(4.639F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(16.0F, 15.664F, 16.0F, 15.25F)
          verticalLineToRelative(-6.5F)
          curveTo(16.0F, 8.336F, 15.664F, 8.0F, 15.25F, 8.0F)
          horizontalLineToRelative(-6.5F)
          curveTo(8.336F, 8.0F, 8.0F, 8.336F, 8.0F, 8.75F)
          reflectiveCurveTo(8.336F, 9.5F, 8.75F, 9.5F)
          close()        
      }
    }
    return _arrowCircleUpRight24!!
  }

private var _arrowCircleUpRight24: ImageVector? = null
