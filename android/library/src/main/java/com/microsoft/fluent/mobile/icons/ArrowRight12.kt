package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRight12: ImageVector
  get() {
    if (_arrowRight12 != null) {
      return _arrowRight12!!
    }
    _arrowRight12 = fluentIcon(name = "Filled.ArrowRight12", 12f) {
      materialPath {
          moveTo(1.5F, 6.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(5.94F)
          lineTo(6.22F, 3.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.25F, 3.25F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(7.28F, 9.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.292F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.97F, -1.97F)
          horizontalLineTo(2.25F)
          curveTo(1.836F, 6.75F, 1.5F, 6.414F, 1.5F, 6.0F)
          close()        
      }
    }
    return _arrowRight12!!
  }

private var _arrowRight12: ImageVector? = null
