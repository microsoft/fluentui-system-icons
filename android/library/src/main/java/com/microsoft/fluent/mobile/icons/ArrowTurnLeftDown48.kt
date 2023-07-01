package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnLeftDown48: ImageVector
  get() {
    if (_arrowTurnLeftDown48 != null) {
      return _arrowTurnLeftDown48!!
    }
    _arrowTurnLeftDown48 = fluentIcon(name = "Regular.ArrowTurnLeftDown48", 48f) {
      materialPath {
          moveTo(40.75F, 12.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(41.44F, 10.0F, 40.75F, 10.0F)
          horizontalLineToRelative(-18.5F)
          curveTo(18.246F, 10.0F, 15.0F, 13.246F, 15.0F, 17.25F)
          verticalLineToRelative(18.168F)
          lineToRelative(-6.854F, -7.04F)
          curveToRelative(-0.482F, -0.495F, -1.273F, -0.505F, -1.768F, -0.024F)
          curveToRelative(-0.495F, 0.482F, -0.505F, 1.273F, -0.024F, 1.768F)
          lineToRelative(9.25F, 9.5F)
          curveTo(15.84F, 39.864F, 16.163F, 40.0F, 16.5F, 40.0F)
          curveToRelative(0.337F, 0.0F, 0.66F, -0.136F, 0.896F, -0.378F)
          lineToRelative(9.25F, -9.5F)
          curveToRelative(0.481F, -0.495F, 0.47F, -1.286F, -0.024F, -1.768F)
          curveToRelative(-0.495F, -0.481F, -1.286F, -0.47F, -1.768F, 0.024F)
          lineTo(17.5F, 35.931F)
          verticalLineTo(17.25F)
          curveToRelative(0.0F, -2.623F, 2.127F, -4.75F, 4.75F, -4.75F)
          horizontalLineToRelative(18.5F)
          close()        
      }
    }
    return _arrowTurnLeftDown48!!
  }

private var _arrowTurnLeftDown48: ImageVector? = null
