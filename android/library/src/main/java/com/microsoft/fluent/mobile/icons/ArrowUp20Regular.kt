package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUp20: ImageVector
  get() {
    if (_arrowUp20 != null) {
      return _arrowUp20!!
    }
    _arrowUp20 = fluentIcon(name = "Regular.ArrowUp20", 20f) {
      materialPath {
          moveTo(3.133F, 9.16F)
          curveTo(2.946F, 9.366F, 2.96F, 9.682F, 3.165F, 9.868F)
          curveToRelative(0.204F, 0.186F, 0.52F, 0.172F, 0.706F, -0.032F)
          lineToRelative(5.631F, -6.168F)
          verticalLineToRelative(13.831F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(3.67F)
          lineToRelative(5.628F, 6.165F)
          curveToRelative(0.186F, 0.204F, 0.503F, 0.218F, 0.706F, 0.032F)
          curveToRelative(0.204F, -0.186F, 0.219F, -0.502F, 0.033F, -0.706F)
          lineToRelative(-6.314F, -6.916F)
          curveToRelative(-0.128F, -0.14F, -0.296F, -0.22F, -0.469F, -0.24F)
          curveToRelative(-0.027F, -0.004F, -0.055F, -0.007F, -0.084F, -0.007F)
          curveToRelative(-0.027F, 0.0F, -0.053F, 0.002F, -0.079F, 0.006F)
          curveToRelative(-0.176F, 0.018F, -0.347F, 0.099F, -0.476F, 0.24F)
          lineTo(3.133F, 9.162F)
          close()        
      }
    }
    return _arrowUp20!!
  }

private var _arrowUp20: ImageVector? = null
