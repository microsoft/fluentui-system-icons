package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDown20: ImageVector
  get() {
    if (_arrowDown20 != null) {
      return _arrowDown20!!
    }
    _arrowDown20 = fluentIcon(name = "Regular.ArrowDown20", 20f) {
      materialPath {
          moveTo(16.867F, 10.837F)
          curveToRelative(0.186F, -0.204F, 0.171F, -0.52F, -0.033F, -0.706F)
          curveToRelative(-0.203F, -0.186F, -0.52F, -0.172F, -0.706F, 0.032F)
          lineToRelative(-5.63F, 6.168F)
          verticalLineTo(2.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          curveToRelative(-0.277F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(13.828F)
          lineToRelative(-5.629F, -6.165F)
          curveTo(3.683F, 9.959F, 3.367F, 9.945F, 3.163F, 10.13F)
          curveToRelative(-0.204F, 0.186F, -0.218F, 0.502F, -0.032F, 0.706F)
          lineToRelative(6.314F, 6.916F)
          curveToRelative(0.127F, 0.14F, 0.295F, 0.22F, 0.468F, 0.24F)
          curveTo(9.941F, 17.998F, 9.97F, 18.0F, 9.997F, 18.0F)
          curveToRelative(0.027F, 0.0F, 0.054F, -0.002F, 0.08F, -0.006F)
          curveToRelative(0.175F, -0.018F, 0.346F, -0.099F, 0.476F, -0.24F)
          lineToRelative(6.314F, -6.917F)
          close()        
      }
    }
    return _arrowDown20!!
  }

private var _arrowDown20: ImageVector? = null
