package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleDownRight24: ImageVector
  get() {
    if (_arrowCircleDownRight24 != null) {
      return _arrowCircleDownRight24!!
    }
    _arrowCircleDownRight24 = fluentIcon(name = "Filled.ArrowCircleDownRight24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(2.5F, -13.25F)
          curveTo(14.5F, 8.336F, 14.836F, 8.0F, 15.25F, 8.0F)
          reflectiveCurveTo(16.0F, 8.336F, 16.0F, 8.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(8.336F, 16.0F, 8.0F, 15.664F, 8.0F, 15.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(4.74F)
          lineTo(8.222F, 9.283F)
          curveTo(7.928F, 8.99F, 7.926F, 8.517F, 8.217F, 8.223F)
          curveToRelative(0.292F, -0.295F, 0.766F, -0.297F, 1.06F, -0.006F)
          lineTo(14.5F, 13.39F)
          verticalLineTo(8.75F)
          close()        
      }
    }
    return _arrowCircleDownRight24!!
  }

private var _arrowCircleDownRight24: ImageVector? = null
