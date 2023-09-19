package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRight20: ImageVector
  get() {
    if (_arrowRight20 != null) {
      return _arrowRight20!!
    }
    _arrowRight20 = fluentIcon(name = "Regular.ArrowRight20", 20f) {
      materialPath {
          moveTo(10.837F, 3.13F)
          curveToRelative(-0.204F, -0.185F, -0.52F, -0.171F, -0.706F, 0.033F)
          curveToRelative(-0.186F, 0.204F, -0.172F, 0.52F, 0.032F, 0.706F)
          lineTo(16.33F, 9.5F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 9.5F, 2.0F, 9.724F, 2.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(13.828F)
          lineToRelative(-6.165F, 5.628F)
          curveToRelative(-0.204F, 0.186F, -0.218F, 0.503F, -0.032F, 0.706F)
          curveToRelative(0.186F, 0.204F, 0.502F, 0.219F, 0.706F, 0.033F)
          lineToRelative(6.916F, -6.314F)
          curveToRelative(0.14F, -0.128F, 0.22F, -0.296F, 0.24F, -0.469F)
          curveTo(17.998F, 10.057F, 18.0F, 10.03F, 18.0F, 10.0F)
          curveToRelative(0.0F, -0.027F, -0.002F, -0.053F, -0.006F, -0.079F)
          curveToRelative(-0.018F, -0.176F, -0.099F, -0.346F, -0.24F, -0.476F)
          lineTo(10.836F, 3.13F)
          close()        
      }
    }
    return _arrowRight20!!
  }

private var _arrowRight20: ImageVector? = null
