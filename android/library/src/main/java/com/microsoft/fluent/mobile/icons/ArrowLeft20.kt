package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowLeft20: ImageVector
  get() {
    if (_arrowLeft20 != null) {
      return _arrowLeft20!!
    }
    _arrowLeft20 = fluentIcon(name = "Regular.ArrowLeft20", 20f) {
      materialPath {
          moveTo(9.159F, 16.867F)
          curveToRelative(0.204F, 0.186F, 0.52F, 0.171F, 0.706F, -0.033F)
          curveToRelative(0.187F, -0.203F, 0.172F, -0.52F, -0.032F, -0.706F)
          lineToRelative(-6.168F, -5.63F)
          horizontalLineToRelative(13.831F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.277F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(3.668F)
          lineToRelative(6.165F, -5.629F)
          curveToRelative(0.204F, -0.186F, 0.219F, -0.502F, 0.032F, -0.706F)
          curveTo(9.68F, 2.959F, 9.363F, 2.945F, 9.16F, 3.13F)
          lineTo(2.243F, 9.445F)
          curveToRelative(-0.14F, 0.127F, -0.22F, 0.295F, -0.24F, 0.468F)
          curveTo(1.998F, 9.941F, 1.996F, 9.97F, 1.996F, 9.997F)
          curveToRelative(0.0F, 0.027F, 0.002F, 0.054F, 0.006F, 0.08F)
          curveToRelative(0.019F, 0.175F, 0.099F, 0.346F, 0.24F, 0.476F)
          lineToRelative(6.917F, 6.314F)
          close()        
      }
    }
    return _arrowLeft20!!
  }

private var _arrowLeft20: ImageVector? = null
