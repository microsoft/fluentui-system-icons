package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUp12: ImageVector
  get() {
    if (_arrowUp12 != null) {
      return _arrowUp12!!
    }
    _arrowUp12 = fluentIcon(name = "Filled.ArrowUp12", 12f) {
      materialPath {
          moveTo(6.0F, 10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(3.81F)
          lineToRelative(1.97F, 1.97F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(6.53F, 1.47F)
          curveToRelative(-0.292F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(2.22F, 4.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(1.97F, -1.97F)
          verticalLineToRelative(5.94F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          close()        
      }
    }
    return _arrowUp12!!
  }

private var _arrowUp12: ImageVector? = null
