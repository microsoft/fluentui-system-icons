package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowEnterUp20: ImageVector
  get() {
    if (_arrowEnterUp20 != null) {
      return _arrowEnterUp20!!
    }
    _arrowEnterUp20 = fluentIcon(name = "Filled.ArrowEnterUp20", 20f) {
      materialPath {
          moveTo(8.796F, 2.236F)
          curveTo(8.654F, 2.086F, 8.456F, 2.0F, 8.25F, 2.0F)
          curveTo(8.043F, 2.0F, 7.846F, 2.085F, 7.704F, 2.236F)
          lineToRelative(-4.0F, 4.25F)
          curveToRelative(-0.284F, 0.302F, -0.27F, 0.776F, 0.032F, 1.06F)
          curveToRelative(0.302F, 0.284F, 0.776F, 0.27F, 1.06F, -0.032F)
          lineTo(7.5F, 4.641F)
          verticalLineTo(14.75F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-4.5F)
          curveTo(9.784F, 16.5F, 9.0F, 15.716F, 9.0F, 14.75F)
          verticalLineTo(4.641F)
          lineToRelative(2.704F, 2.873F)
          curveToRelative(0.284F, 0.302F, 0.758F, 0.316F, 1.06F, 0.032F)
          curveToRelative(0.302F, -0.284F, 0.316F, -0.758F, 0.032F, -1.06F)
          lineToRelative(-4.0F, -4.25F)
          close()        
      }
    }
    return _arrowEnterUp20!!
  }

private var _arrowEnterUp20: ImageVector? = null
