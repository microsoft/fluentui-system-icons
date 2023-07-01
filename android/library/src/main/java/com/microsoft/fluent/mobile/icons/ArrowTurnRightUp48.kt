package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRightUp48: ImageVector
  get() {
    if (_arrowTurnRightUp48 != null) {
      return _arrowTurnRightUp48!!
    }
    _arrowTurnRightUp48 = fluentIcon(name = "Regular.ArrowTurnRightUp48", 48f) {
      materialPath {
          moveTo(7.25F, 35.5F)
          curveTo(6.56F, 35.5F, 6.0F, 36.06F, 6.0F, 36.75F)
          reflectiveCurveTo(6.56F, 38.0F, 7.25F, 38.0F)
          horizontalLineToRelative(18.5F)
          curveToRelative(4.004F, 0.0F, 7.25F, -3.246F, 7.25F, -7.25F)
          verticalLineTo(12.582F)
          lineToRelative(6.854F, 7.04F)
          curveToRelative(0.482F, 0.495F, 1.273F, 0.505F, 1.768F, 0.024F)
          curveToRelative(0.495F, -0.482F, 0.505F, -1.273F, 0.024F, -1.768F)
          lineToRelative(-9.25F, -9.5F)
          curveTo(32.16F, 8.136F, 31.837F, 8.0F, 31.5F, 8.0F)
          curveToRelative(-0.337F, 0.0F, -0.66F, 0.136F, -0.896F, 0.378F)
          lineToRelative(-9.25F, 9.5F)
          curveToRelative(-0.481F, 0.495F, -0.47F, 1.286F, 0.024F, 1.768F)
          curveToRelative(0.495F, 0.481F, 1.286F, 0.47F, 1.768F, -0.024F)
          lineToRelative(7.354F, -7.553F)
          verticalLineTo(30.75F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineTo(7.25F)
          close()        
      }
    }
    return _arrowTurnRightUp48!!
  }

private var _arrowTurnRightUp48: ImageVector? = null
