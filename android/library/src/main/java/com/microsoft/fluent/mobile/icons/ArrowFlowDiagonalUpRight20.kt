package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFlowDiagonalUpRight20: ImageVector
  get() {
    if (_arrowFlowDiagonalUpRight20 != null) {
      return _arrowFlowDiagonalUpRight20!!
    }
    _arrowFlowDiagonalUpRight20 = fluentIcon(name = "Regular.ArrowFlowDiagonalUpRight20", 20f) {
      materialPath {
          moveTo(10.5F, 4.0F)
          curveTo(10.224F, 4.0F, 10.0F, 4.224F, 10.0F, 4.5F)
          reflectiveCurveTo(10.224F, 5.0F, 10.5F, 5.0F)
          horizontalLineToRelative(3.793F)
          lineToRelative(-6.555F, 6.555F)
          curveTo(7.248F, 11.205F, 6.648F, 11.0F, 6.0F, 11.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          curveToRelative(0.0F, -0.648F, -0.205F, -1.248F, -0.555F, -1.738F)
          lineTo(15.0F, 5.707F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(16.0F, 9.776F, 16.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          curveTo(16.0F, 4.224F, 15.776F, 4.0F, 15.5F, 4.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(4.0F, 14.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()        
      }
    }
    return _arrowFlowDiagonalUpRight20!!
  }

private var _arrowFlowDiagonalUpRight20: ImageVector? = null
