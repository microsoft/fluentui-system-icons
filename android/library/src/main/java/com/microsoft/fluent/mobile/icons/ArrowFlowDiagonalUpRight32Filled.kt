package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowFlowDiagonalUpRight32: ImageVector
  get() {
    if (_arrowFlowDiagonalUpRight32 != null) {
      return _arrowFlowDiagonalUpRight32!!
    }
    _arrowFlowDiagonalUpRight32 = fluentIcon(name = "Filled.ArrowFlowDiagonalUpRight32", 32f) {
      materialPath {
          moveTo(17.0F, 5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.586F)
          lineTo(11.618F, 18.968F)
          curveTo(10.732F, 18.358F, 9.657F, 18.0F, 8.5F, 18.0F)
          curveTo(5.462F, 18.0F, 3.0F, 20.462F, 3.0F, 23.5F)
          reflectiveCurveTo(5.462F, 29.0F, 8.5F, 29.0F)
          reflectiveCurveToRelative(5.5F, -2.462F, 5.5F, -5.5F)
          curveToRelative(0.0F, -1.157F, -0.358F, -2.232F, -0.968F, -3.117F)
          lineTo(25.0F, 8.414F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _arrowFlowDiagonalUpRight32!!
  }

private var _arrowFlowDiagonalUpRight32: ImageVector? = null
