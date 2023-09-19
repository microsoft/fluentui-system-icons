package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFlowDiagonalUpRight24: ImageVector
  get() {
    if (_arrowFlowDiagonalUpRight24 != null) {
      return _arrowFlowDiagonalUpRight24!!
    }
    _arrowFlowDiagonalUpRight24 = fluentIcon(name = "Regular.ArrowFlowDiagonalUpRight24", 24f) {
      materialPath {
          moveTo(12.75F, 4.0F)
          curveTo(12.336F, 4.0F, 12.0F, 4.336F, 12.0F, 4.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(4.69F)
          lineToRelative(-8.192F, 8.191F)
          curveTo(8.608F, 13.255F, 7.834F, 13.0F, 7.0F, 13.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          curveToRelative(0.0F, -0.834F, -0.255F, -1.607F, -0.691F, -2.248F)
          lineTo(18.5F, 6.56F)
          verticalLineToRelative(4.689F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(20.0F, 11.664F, 20.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          curveTo(20.0F, 4.336F, 19.664F, 4.0F, 19.25F, 4.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(4.5F, 17.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveToRelative(-1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveToRelative(-2.5F, -1.12F, -2.5F, -2.5F)
          close()        
      }
    }
    return _arrowFlowDiagonalUpRight24!!
  }

private var _arrowFlowDiagonalUpRight24: ImageVector? = null
