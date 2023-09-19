package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnDownRight48: ImageVector
  get() {
    if (_arrowTurnDownRight48 != null) {
      return _arrowTurnDownRight48!!
    }
    _arrowTurnDownRight48 = fluentIcon(name = "Regular.ArrowTurnDownRight48", 48f) {
      materialPath {
          moveTo(12.5F, 7.25F)
          curveTo(12.5F, 6.56F, 11.94F, 6.0F, 11.25F, 6.0F)
          reflectiveCurveTo(10.0F, 6.56F, 10.0F, 7.25F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 4.004F, 3.246F, 7.25F, 7.25F, 7.25F)
          horizontalLineToRelative(18.168F)
          lineToRelative(-7.04F, 6.854F)
          curveToRelative(-0.495F, 0.482F, -0.505F, 1.273F, -0.024F, 1.768F)
          curveToRelative(0.482F, 0.495F, 1.273F, 0.505F, 1.768F, 0.024F)
          lineToRelative(9.5F, -9.25F)
          curveTo(39.864F, 32.16F, 40.0F, 31.837F, 40.0F, 31.5F)
          curveToRelative(0.0F, -0.337F, -0.136F, -0.66F, -0.378F, -0.896F)
          lineToRelative(-9.5F, -9.25F)
          curveToRelative(-0.495F, -0.481F, -1.286F, -0.47F, -1.768F, 0.024F)
          curveToRelative(-0.481F, 0.495F, -0.47F, 1.286F, 0.024F, 1.768F)
          lineToRelative(7.553F, 7.354F)
          horizontalLineTo(17.25F)
          curveToRelative(-2.623F, 0.0F, -4.75F, -2.127F, -4.75F, -4.75F)
          verticalLineTo(7.25F)
          close()        
      }
    }
    return _arrowTurnDownRight48!!
  }

private var _arrowTurnDownRight48: ImageVector? = null
