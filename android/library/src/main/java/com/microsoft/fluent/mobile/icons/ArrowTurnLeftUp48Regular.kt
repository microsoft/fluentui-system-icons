package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnLeftUp48: ImageVector
  get() {
    if (_arrowTurnLeftUp48 != null) {
      return _arrowTurnLeftUp48!!
    }
    _arrowTurnLeftUp48 = fluentIcon(name = "Regular.ArrowTurnLeftUp48", 48f) {
      materialPath {
          moveTo(40.75F, 35.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(41.44F, 38.0F, 40.75F, 38.0F)
          horizontalLineToRelative(-18.5F)
          curveTo(18.246F, 38.0F, 15.0F, 34.754F, 15.0F, 30.75F)
          verticalLineTo(12.582F)
          lineToRelative(-6.854F, 7.04F)
          curveToRelative(-0.482F, 0.495F, -1.273F, 0.505F, -1.768F, 0.024F)
          curveToRelative(-0.495F, -0.482F, -0.505F, -1.273F, -0.024F, -1.768F)
          lineToRelative(9.25F, -9.5F)
          curveTo(15.84F, 8.136F, 16.163F, 8.0F, 16.5F, 8.0F)
          curveToRelative(0.337F, 0.0F, 0.66F, 0.136F, 0.896F, 0.378F)
          lineToRelative(9.25F, 9.5F)
          curveToRelative(0.481F, 0.495F, 0.47F, 1.286F, -0.024F, 1.768F)
          curveToRelative(-0.495F, 0.481F, -1.286F, 0.47F, -1.768F, -0.024F)
          lineTo(17.5F, 12.069F)
          verticalLineTo(30.75F)
          curveToRelative(0.0F, 2.623F, 2.127F, 4.75F, 4.75F, 4.75F)
          horizontalLineToRelative(18.5F)
          close()        
      }
    }
    return _arrowTurnLeftUp48!!
  }

private var _arrowTurnLeftUp48: ImageVector? = null
