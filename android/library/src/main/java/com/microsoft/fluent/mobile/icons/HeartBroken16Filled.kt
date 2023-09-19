package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HeartBroken16: ImageVector
  get() {
    if (_heartBroken16 != null) {
      return _heartBroken16!!
    }
    _heartBroken16 = fluentIcon(name = "Filled.HeartBroken16", 16f) {
      materialPath {
          moveTo(7.354F, 3.775F)
          curveTo(6.075F, 2.678F, 4.152F, 2.73F, 2.946F, 3.936F)
          curveTo(1.68F, 5.202F, 1.686F, 7.26F, 2.958F, 8.531F)
          lineToRelative(4.707F, 4.708F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(4.683F, -4.68F)
          curveToRelative(1.263F, -1.27F, 1.26F, -3.322F, -0.012F, -4.594F)
          curveToRelative(-1.274F, -1.274F, -3.333F, -1.28F, -4.601F, -0.012F)
          lineTo(8.414F, 3.981F)
          lineTo(7.16F, 5.903F)
          lineToRelative(2.162F, 1.825F)
          curveTo(9.43F, 7.818F, 9.495F, 7.95F, 9.5F, 8.09F)
          curveToRelative(0.005F, 0.14F, -0.047F, 0.276F, -0.146F, 0.375F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.116F, -1.115F)
          lineToRelative(-2.085F, -1.76F)
          curveTo(5.986F, 6.22F, 5.944F, 5.94F, 6.082F, 5.727F)
          lineToRelative(1.273F, -1.952F)
          close()        
      }
    }
    return _heartBroken16!!
  }

private var _heartBroken16: ImageVector? = null
