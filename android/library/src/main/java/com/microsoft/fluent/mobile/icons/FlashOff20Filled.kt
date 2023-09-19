package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlashOff20: ImageVector
  get() {
    if (_flashOff20 != null) {
      return _flashOff20!!
    }
    _flashOff20 = fluentIcon(name = "Filled.FlashOff20", 20f) {
      materialPath {
          moveTo(11.858F, 12.565F)
          lineToRelative(5.288F, 5.289F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(5.274F, 5.98F)
          lineTo(3.94F, 10.644F)
          curveToRelative(-0.194F, 0.679F, 0.316F, 1.354F, 1.022F, 1.354F)
          horizontalLineToRelative(1.267F)
          lineToRelative(-1.17F, 4.68F)
          curveToRelative(-0.264F, 1.055F, 1.04F, 1.777F, 1.795F, 0.995F)
          lineToRelative(5.004F, -5.108F)
          close()
          moveToRelative(3.673F, -3.75F)
          lineToRelative(-2.274F, 2.321F)
          lineTo(5.901F, 3.78F)
          lineTo(6.19F, 2.77F)
          curveTo(6.32F, 2.315F, 6.737F, 2.0F, 7.21F, 2.0F)
          horizontalLineToRelative(5.25F)
          curveToRelative(0.724F, 0.0F, 1.236F, 0.71F, 1.007F, 1.398F)
          lineToRelative(-0.002F, 0.008F)
          lineTo(12.204F, 7.0F)
          horizontalLineToRelative(2.564F)
          curveToRelative(0.946F, 0.0F, 1.407F, 1.144F, 0.766F, 1.811F)
          lineToRelative(-0.003F, 0.004F)
          close()        
      }
    }
    return _flashOff20!!
  }

private var _flashOff20: ImageVector? = null
