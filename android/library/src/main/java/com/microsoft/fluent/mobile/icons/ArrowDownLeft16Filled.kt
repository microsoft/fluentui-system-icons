package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDownLeft16: ImageVector
  get() {
    if (_arrowDownLeft16 != null) {
      return _arrowDownLeft16!!
    }
    _arrowDownLeft16 = fluentIcon(name = "Filled.ArrowDownLeft16", 16f) {
      materialPath {
          moveTo(9.0F, 13.25F)
          curveTo(9.0F, 13.664F, 8.664F, 14.0F, 8.25F, 14.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(2.336F, 14.0F, 2.0F, 13.664F, 2.0F, 13.25F)
          verticalLineToRelative(-5.5F)
          curveTo(2.0F, 7.336F, 2.336F, 7.0F, 2.75F, 7.0F)
          reflectiveCurveTo(3.5F, 7.336F, 3.5F, 7.75F)
          verticalLineToRelative(3.69F)
          lineToRelative(9.22F, -9.22F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(4.56F, 12.5F)
          horizontalLineToRelative(3.69F)
          curveTo(8.664F, 12.5F, 9.0F, 12.836F, 9.0F, 13.25F)
          close()        
      }
    }
    return _arrowDownLeft16!!
  }

private var _arrowDownLeft16: ImageVector? = null
