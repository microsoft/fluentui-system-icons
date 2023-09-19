package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRight48: ImageVector
  get() {
    if (_arrowTurnRight48 != null) {
      return _arrowTurnRight48!!
    }
    _arrowTurnRight48 = fluentIcon(name = "Regular.ArrowTurnRight48", 48f) {
      materialPath {
          moveTo(12.5F, 40.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(10.0F, 41.44F, 10.0F, 40.75F)
          verticalLineToRelative(-18.5F)
          curveToRelative(0.0F, -4.004F, 3.246F, -7.25F, 7.25F, -7.25F)
          horizontalLineToRelative(18.168F)
          lineToRelative(-7.04F, -6.854F)
          curveToRelative(-0.495F, -0.482F, -0.505F, -1.273F, -0.024F, -1.768F)
          curveToRelative(0.482F, -0.495F, 1.273F, -0.505F, 1.768F, -0.024F)
          lineToRelative(9.5F, 9.25F)
          curveTo(39.864F, 15.84F, 40.0F, 16.163F, 40.0F, 16.5F)
          curveToRelative(0.0F, 0.337F, -0.136F, 0.66F, -0.378F, 0.896F)
          lineToRelative(-9.5F, 9.25F)
          curveToRelative(-0.495F, 0.481F, -1.286F, 0.47F, -1.768F, -0.024F)
          curveToRelative(-0.481F, -0.495F, -0.47F, -1.286F, 0.024F, -1.768F)
          lineToRelative(7.553F, -7.354F)
          horizontalLineTo(17.25F)
          curveToRelative(-2.623F, 0.0F, -4.75F, 2.127F, -4.75F, 4.75F)
          verticalLineToRelative(18.5F)
          close()        
      }
    }
    return _arrowTurnRight48!!
  }

private var _arrowTurnRight48: ImageVector? = null
