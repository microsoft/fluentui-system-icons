package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowLeft12: ImageVector
  get() {
    if (_arrowLeft12 != null) {
      return _arrowLeft12!!
    }
    _arrowLeft12 = fluentIcon(name = "Filled.ArrowLeft12", 12f) {
      materialPath {
          moveTo(10.5F, 6.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(3.81F)
          lineToRelative(1.97F, -1.97F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(1.47F, 5.47F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.25F, 3.25F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.81F, 6.75F)
          horizontalLineToRelative(5.94F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          close()        
      }
    }
    return _arrowLeft12!!
  }

private var _arrowLeft12: ImageVector? = null
