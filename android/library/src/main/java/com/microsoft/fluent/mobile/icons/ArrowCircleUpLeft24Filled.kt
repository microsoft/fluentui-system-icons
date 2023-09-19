package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleUpLeft24: ImageVector
  get() {
    if (_arrowCircleUpLeft24 != null) {
      return _arrowCircleUpLeft24!!
    }
    _arrowCircleUpLeft24 = fluentIcon(name = "Filled.ArrowCircleUpLeft24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(3.25F, -12.5F)
          horizontalLineToRelative(-4.74F)
          lineToRelative(5.268F, 5.217F)
          curveToRelative(0.294F, 0.292F, 0.296F, 0.766F, 0.005F, 1.06F)
          curveToRelative(-0.292F, 0.295F, -0.766F, 0.297F, -1.06F, 0.006F)
          lineTo(9.5F, 10.61F)
          verticalLineToRelative(4.639F)
          curveTo(9.5F, 15.664F, 9.164F, 16.0F, 8.75F, 16.0F)
          reflectiveCurveTo(8.0F, 15.664F, 8.0F, 15.25F)
          verticalLineToRelative(-6.5F)
          curveTo(8.0F, 8.336F, 8.336F, 8.0F, 8.75F, 8.0F)
          horizontalLineToRelative(6.5F)
          curveTo(15.664F, 8.0F, 16.0F, 8.336F, 16.0F, 8.75F)
          reflectiveCurveTo(15.664F, 9.5F, 15.25F, 9.5F)
          close()        
      }
    }
    return _arrowCircleUpLeft24!!
  }

private var _arrowCircleUpLeft24: ImageVector? = null
