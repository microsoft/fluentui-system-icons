package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRightDown48: ImageVector
  get() {
    if (_arrowTurnRightDown48 != null) {
      return _arrowTurnRightDown48!!
    }
    _arrowTurnRightDown48 = fluentIcon(name = "Regular.ArrowTurnRightDown48", 48f) {
      materialPath {
          moveTo(7.25F, 12.5F)
          curveTo(6.56F, 12.5F, 6.0F, 11.94F, 6.0F, 11.25F)
          reflectiveCurveTo(6.56F, 10.0F, 7.25F, 10.0F)
          horizontalLineToRelative(18.5F)
          curveToRelative(4.004F, 0.0F, 7.25F, 3.246F, 7.25F, 7.25F)
          verticalLineToRelative(18.168F)
          lineToRelative(6.854F, -7.04F)
          curveToRelative(0.482F, -0.495F, 1.273F, -0.505F, 1.768F, -0.024F)
          curveToRelative(0.495F, 0.482F, 0.505F, 1.273F, 0.024F, 1.768F)
          lineToRelative(-9.25F, 9.5F)
          curveTo(32.16F, 39.864F, 31.837F, 40.0F, 31.5F, 40.0F)
          curveToRelative(-0.337F, 0.0F, -0.66F, -0.136F, -0.896F, -0.378F)
          lineToRelative(-9.25F, -9.5F)
          curveToRelative(-0.481F, -0.495F, -0.47F, -1.286F, 0.024F, -1.768F)
          curveToRelative(0.495F, -0.481F, 1.286F, -0.47F, 1.768F, 0.024F)
          lineToRelative(7.354F, 7.553F)
          verticalLineTo(17.25F)
          curveToRelative(0.0F, -2.623F, -2.127F, -4.75F, -4.75F, -4.75F)
          horizontalLineTo(7.25F)
          close()        
      }
    }
    return _arrowTurnRightDown48!!
  }

private var _arrowTurnRightDown48: ImageVector? = null
