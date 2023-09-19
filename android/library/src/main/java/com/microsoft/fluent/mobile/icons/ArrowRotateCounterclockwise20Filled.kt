package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRotateCounterclockwise20: ImageVector
  get() {
    if (_arrowRotateCounterclockwise20 != null) {
      return _arrowRotateCounterclockwise20!!
    }
    _arrowRotateCounterclockwise20 = fluentIcon(name = "Filled.ArrowRotateCounterclockwise20", 20f) {
      materialPath {
          moveTo(10.0F, 3.5F)
          curveToRelative(3.59F, 0.0F, 6.5F, 2.91F, 6.5F, 6.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(18.0F, 10.414F, 18.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          curveToRelative(0.0F, 2.678F, 1.316F, 5.049F, 3.335F, 6.5F)
          horizontalLineTo(4.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(3.836F, 18.0F, 4.25F, 18.0F)
          horizontalLineToRelative(3.0F)
          curveTo(7.664F, 18.0F, 8.0F, 17.664F, 8.0F, 17.25F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(6.5F, 13.836F, 6.5F, 14.25F)
          verticalLineToRelative(1.228F)
          curveToRelative(-1.805F, -1.155F, -3.0F, -3.178F, -3.0F, -5.478F)
          curveToRelative(0.0F, -3.59F, 2.91F, -6.5F, 6.5F, -6.5F)
          close()
          moveTo(7.5F, 10.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveToRelative(-1.12F, -2.5F, -2.5F, -2.5F)
          reflectiveCurveTo(7.5F, 8.62F, 7.5F, 10.0F)
          close()
          moveTo(9.0F, 10.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          close()        
      }
    }
    return _arrowRotateCounterclockwise20!!
  }

private var _arrowRotateCounterclockwise20: ImageVector? = null
