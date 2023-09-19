package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFlowUpRight32: ImageVector
  get() {
    if (_arrowFlowUpRight32 != null) {
      return _arrowFlowUpRight32!!
    }
    _arrowFlowUpRight32 = fluentIcon(name = "Regular.ArrowFlowUpRight32", 32f) {
      materialPath {
          moveTo(23.207F, 2.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(26.586F, 8.5F)
          horizontalLineTo(19.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-0.09F)
          curveTo(12.44F, 18.94F, 10.195F, 17.0F, 7.5F, 17.0F)
          curveTo(4.462F, 17.0F, 2.0F, 19.462F, 2.0F, 22.5F)
          reflectiveCurveTo(4.462F, 28.0F, 7.5F, 28.0F)
          curveToRelative(2.696F, 0.0F, 4.94F, -1.94F, 5.41F, -4.5F)
          horizontalLineTo(13.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(7.586F)
          lineToRelative(-4.793F, 4.793F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(6.5F, -6.5F)
          curveTo(29.895F, 10.02F, 30.0F, 9.765F, 30.0F, 9.5F)
          curveToRelative(0.0F, -0.265F, -0.105F, -0.52F, -0.293F, -0.707F)
          lineToRelative(-6.5F, -6.5F)
          close()
          moveTo(11.0F, 22.5F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(4.0F, 24.433F, 4.0F, 22.5F)
          reflectiveCurveTo(5.567F, 19.0F, 7.5F, 19.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          close()        
      }
    }
    return _arrowFlowUpRight32!!
  }

private var _arrowFlowUpRight32: ImageVector? = null
