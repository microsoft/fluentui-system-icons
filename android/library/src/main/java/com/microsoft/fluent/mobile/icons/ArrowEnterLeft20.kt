package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowEnterLeft20: ImageVector
  get() {
    if (_arrowEnterLeft20 != null) {
      return _arrowEnterLeft20!!
    }
    _arrowEnterLeft20 = fluentIcon(name = "Filled.ArrowEnterLeft20", 20f) {
      materialPath {
          moveTo(4.641F, 12.5F)
          lineToRelative(2.873F, 2.704F)
          curveToRelative(0.302F, 0.284F, 0.316F, 0.758F, 0.032F, 1.06F)
          curveToRelative(-0.284F, 0.302F, -0.758F, 0.316F, -1.06F, 0.032F)
          lineToRelative(-4.25F, -4.0F)
          curveTo(2.086F, 12.154F, 2.0F, 11.956F, 2.0F, 11.75F)
          curveToRelative(0.0F, -0.207F, 0.085F, -0.404F, 0.236F, -0.546F)
          lineToRelative(4.25F, -4.0F)
          curveToRelative(0.302F, -0.284F, 0.776F, -0.27F, 1.06F, 0.032F)
          curveToRelative(0.284F, 0.302F, 0.27F, 0.776F, -0.032F, 1.06F)
          lineTo(4.641F, 11.0F)
          horizontalLineTo(14.75F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-4.5F)
          curveTo(16.5F, 4.336F, 16.836F, 4.0F, 17.25F, 4.0F)
          reflectiveCurveTo(18.0F, 4.336F, 18.0F, 4.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(4.641F)
          close()        
      }
    }
    return _arrowEnterLeft20!!
  }

private var _arrowEnterLeft20: ImageVector? = null
