package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFlowUpRight24: ImageVector
  get() {
    if (_arrowFlowUpRight24 != null) {
      return _arrowFlowUpRight24!!
    }
    _arrowFlowUpRight24 = fluentIcon(name = "Regular.ArrowFlowUpRight24", 24f) {
      materialPath {
          moveTo(17.53F, 3.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.97F, 2.97F)
          horizontalLineTo(14.5F)
          curveToRelative(-1.795F, 0.0F, -3.25F, 1.455F, -3.25F, 3.25F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.822F, -0.566F, 1.511F, -1.33F, 1.7F)
          curveTo(9.549F, 13.373F, 7.935F, 12.0F, 6.0F, 12.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          curveToRelative(1.963F, 0.0F, 3.596F, -1.414F, 3.935F, -3.279F)
          curveToRelative(1.59F, -0.212F, 2.815F, -1.574F, 2.815F, -3.221F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(4.94F)
          lineToRelative(-2.97F, 2.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(4.25F, -4.25F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.25F, -4.25F)
          close()
          moveTo(3.5F, 16.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveToRelative(-1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveToRelative(-2.5F, -1.12F, -2.5F, -2.5F)
          close()        
      }
    }
    return _arrowFlowUpRight24!!
  }

private var _arrowFlowUpRight24: ImageVector? = null
