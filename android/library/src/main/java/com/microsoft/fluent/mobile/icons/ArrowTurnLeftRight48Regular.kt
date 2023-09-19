package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnLeftRight48: ImageVector
  get() {
    if (_arrowTurnLeftRight48 != null) {
      return _arrowTurnLeftRight48!!
    }
    _arrowTurnLeftRight48 = fluentIcon(name = "Regular.ArrowTurnLeftRight48", 48f) {
      materialPath {
          moveTo(39.474F, 9.407F)
          curveToRelative(0.639F, -0.262F, 0.944F, -0.992F, 0.683F, -1.63F)
          curveToRelative(-0.262F, -0.64F, -0.992F, -0.945F, -1.63F, -0.683F)
          lineTo(7.214F, 19.918F)
          curveToRelative(-1.862F, 0.763F, -1.862F, 3.401F, 0.0F, 4.164F)
          lineToRelative(30.209F, 12.373F)
          lineToRelative(-8.713F, 4.168F)
          curveToRelative(-0.623F, 0.297F, -0.886F, 1.044F, -0.589F, 1.667F)
          curveToRelative(0.298F, 0.622F, 1.045F, 0.886F, 1.667F, 0.588F)
          lineToRelative(11.5F, -5.5F)
          curveToRelative(0.6F, -0.287F, 0.87F, -0.994F, 0.615F, -1.608F)
          lineToRelative(-5.0F, -12.0F)
          curveToRelative(-0.266F, -0.638F, -0.998F, -0.939F, -1.635F, -0.674F)
          curveToRelative(-0.637F, 0.266F, -0.938F, 0.998F, -0.673F, 1.635F)
          lineToRelative(3.952F, 9.483F)
          lineTo(8.727F, 22.0F)
          lineTo(39.474F, 9.407F)
          close()        
      }
    }
    return _arrowTurnLeftRight48!!
  }

private var _arrowTurnLeftRight48: ImageVector? = null
