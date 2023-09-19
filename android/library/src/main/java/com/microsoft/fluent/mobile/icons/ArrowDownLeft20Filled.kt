package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDownLeft20: ImageVector
  get() {
    if (_arrowDownLeft20 != null) {
      return _arrowDownLeft20!!
    }
    _arrowDownLeft20 = fluentIcon(name = "Filled.ArrowDownLeft20", 20f) {
      materialPath {
          moveTo(12.0F, 16.25F)
          curveToRelative(0.0F, 0.414F, -0.335F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-7.5F)
          curveTo(3.336F, 17.0F, 3.0F, 16.664F, 3.0F, 16.25F)
          verticalLineToRelative(-7.5F)
          curveTo(3.0F, 8.334F, 3.336F, 8.0F, 3.75F, 8.0F)
          reflectiveCurveTo(4.5F, 8.334F, 4.5F, 8.75F)
          verticalLineToRelative(5.69F)
          lineTo(15.72F, 3.22F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(5.56F, 15.5F)
          horizontalLineToRelative(5.69F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          close()        
      }
    }
    return _arrowDownLeft20!!
  }

private var _arrowDownLeft20: ImageVector? = null
