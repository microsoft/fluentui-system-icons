package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnDownLeft48: ImageVector
  get() {
    if (_arrowTurnDownLeft48 != null) {
      return _arrowTurnDownLeft48!!
    }
    _arrowTurnDownLeft48 = fluentIcon(name = "Regular.ArrowTurnDownLeft48", 48f) {
      materialPath {
          moveTo(35.5F, 7.25F)
          curveTo(35.5F, 6.56F, 36.06F, 6.0F, 36.75F, 6.0F)
          reflectiveCurveTo(38.0F, 6.56F, 38.0F, 7.25F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 4.004F, -3.246F, 7.25F, -7.25F, 7.25F)
          horizontalLineTo(12.582F)
          lineToRelative(7.04F, 6.854F)
          curveToRelative(0.495F, 0.482F, 0.505F, 1.273F, 0.024F, 1.768F)
          curveToRelative(-0.482F, 0.495F, -1.273F, 0.505F, -1.768F, 0.024F)
          lineToRelative(-9.5F, -9.25F)
          curveTo(8.136F, 32.16F, 8.0F, 31.837F, 8.0F, 31.5F)
          curveToRelative(0.0F, -0.337F, 0.136F, -0.66F, 0.378F, -0.896F)
          lineToRelative(9.5F, -9.25F)
          curveToRelative(0.495F, -0.481F, 1.286F, -0.47F, 1.768F, 0.024F)
          curveToRelative(0.481F, 0.495F, 0.47F, 1.286F, -0.024F, 1.768F)
          lineTo(12.069F, 30.5F)
          horizontalLineTo(30.75F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          verticalLineTo(7.25F)
          close()        
      }
    }
    return _arrowTurnDownLeft48!!
  }

private var _arrowTurnDownLeft48: ImageVector? = null
