package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRotateCounterclockwise20: ImageVector
  get() {
    if (_arrowRotateCounterclockwise20 != null) {
      return _arrowRotateCounterclockwise20!!
    }
    _arrowRotateCounterclockwise20 = fluentIcon(name = "Regular.ArrowRotateCounterclockwise20", 20f) {
      materialPath {
          moveTo(17.0F, 10.0F)
          curveToRelative(0.0F, -3.866F, -3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 2.792F, 1.634F, 5.203F, 4.0F, 6.326F)
          verticalLineTo(14.5F)
          curveTo(7.0F, 14.224F, 7.224F, 14.0F, 7.5F, 14.0F)
          reflectiveCurveTo(8.0F, 14.224F, 8.0F, 14.5F)
          verticalLineToRelative(3.0F)
          curveTo(8.0F, 17.776F, 7.776F, 18.0F, 7.5F, 18.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(4.224F, 18.0F, 4.0F, 17.776F, 4.0F, 17.5F)
          reflectiveCurveTo(4.224F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(1.624F)
          curveTo(3.665F, 15.636F, 2.0F, 13.013F, 2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(17.0F, 10.276F, 17.0F, 10.0F)
          close()
          moveToRelative(-7.0F, 2.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _arrowRotateCounterclockwise20!!
  }

private var _arrowRotateCounterclockwise20: ImageVector? = null
