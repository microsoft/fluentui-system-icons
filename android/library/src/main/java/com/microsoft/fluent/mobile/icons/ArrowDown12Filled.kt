package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDown12: ImageVector
  get() {
    if (_arrowDown12 != null) {
      return _arrowDown12!!
    }
    _arrowDown12 = fluentIcon(name = "Filled.ArrowDown12", 12f) {
      materialPath {
          moveTo(6.0F, 1.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(5.94F)
          lineToRelative(1.97F, -1.97F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-3.25F, 3.25F)
          curveToRelative(-0.292F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(2.22F, 7.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.97F, 1.97F)
          verticalLineTo(2.25F)
          curveTo(5.25F, 1.836F, 5.586F, 1.5F, 6.0F, 1.5F)
          close()        
      }
    }
    return _arrowDown12!!
  }

private var _arrowDown12: ImageVector? = null
