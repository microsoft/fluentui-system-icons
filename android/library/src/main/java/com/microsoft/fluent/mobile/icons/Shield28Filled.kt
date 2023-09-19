package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shield28: ImageVector
  get() {
    if (_shield28 != null) {
      return _shield28!!
    }
    _shield28 = fluentIcon(name = "Filled.Shield28", 28f) {
      materialPath {
          moveTo(13.56F, 2.142F)
          curveToRelative(0.262F, -0.19F, 0.616F, -0.19F, 0.878F, 0.0F)
          curveToRelative(0.643F, 0.464F, 2.088F, 1.312F, 3.897F, 2.041F)
          curveToRelative(1.81F, 0.73F, 3.922F, 1.317F, 5.913F, 1.317F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(7.752F)
          curveToRelative(0.0F, 3.027F, -1.703F, 5.841F, -3.838F, 7.95F)
          curveToRelative(-2.133F, 2.107F, -4.827F, 3.64F, -7.033F, 4.024F)
          lineTo(14.0F, 25.998F)
          lineToRelative(-0.129F, -0.022F)
          curveToRelative(-2.205F, -0.385F, -4.9F, -1.917F, -7.033F, -4.024F)
          curveTo(4.703F, 19.843F, 3.0F, 17.029F, 3.0F, 14.002F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 5.836F, 3.336F, 5.5F, 3.75F, 5.5F)
          curveToRelative(1.991F, 0.0F, 4.103F, -0.587F, 5.914F, -1.317F)
          curveToRelative(1.808F, -0.73F, 3.253F, -1.576F, 3.896F, -2.04F)
          close()        
      }
    }
    return _shield28!!
  }

private var _shield28: ImageVector? = null
