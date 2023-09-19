package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRotateClockwise20: ImageVector
  get() {
    if (_arrowRotateClockwise20 != null) {
      return _arrowRotateClockwise20!!
    }
    _arrowRotateClockwise20 = fluentIcon(name = "Filled.ArrowRotateClockwise20", 20f) {
      materialPath {
          moveTo(10.0F, 3.5F)
          curveToRelative(-3.59F, 0.0F, -6.5F, 2.91F, -6.5F, 6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(2.0F, 10.414F, 2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          curveToRelative(0.0F, 2.678F, -1.316F, 5.049F, -3.335F, 6.5F)
          horizontalLineToRelative(1.085F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(16.164F, 18.0F, 15.75F, 18.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(12.336F, 18.0F, 12.0F, 17.664F, 12.0F, 17.25F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(1.228F)
          curveToRelative(1.805F, -1.155F, 3.0F, -3.178F, 3.0F, -5.478F)
          curveToRelative(0.0F, -3.59F, -2.91F, -6.5F, -6.5F, -6.5F)
          close()
          moveToRelative(2.5F, 6.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(7.5F, 11.38F, 7.5F, 10.0F)
          reflectiveCurveTo(8.62F, 7.5F, 10.0F, 7.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveTo(11.0F, 10.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _arrowRotateClockwise20!!
  }

private var _arrowRotateClockwise20: ImageVector? = null
