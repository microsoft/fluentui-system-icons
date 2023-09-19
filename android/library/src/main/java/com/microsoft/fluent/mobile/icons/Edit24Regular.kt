package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Edit24: ImageVector
  get() {
    if (_edit24 != null) {
      return _edit24!!
    }
    _edit24 = fluentIcon(name = "Regular.Edit24", 24f) {
      materialPath {
          moveTo(20.952F, 3.048F)
          curveToRelative(-1.398F, -1.397F, -3.664F, -1.397F, -5.06F, 0.0F)
          lineTo(3.94F, 15.0F)
          curveToRelative(-0.406F, 0.406F, -0.692F, 0.917F, -0.825F, 1.476F)
          lineTo(2.02F, 21.078F)
          curveToRelative(-0.06F, 0.253F, 0.015F, 0.52F, 0.2F, 0.704F)
          curveToRelative(0.184F, 0.184F, 0.45F, 0.26F, 0.704F, 0.199F)
          lineToRelative(4.601F, -1.096F)
          curveToRelative(0.56F, -0.133F, 1.07F, -0.418F, 1.477F, -0.825F)
          lineToRelative(11.95F, -11.95F)
          curveToRelative(1.397F, -1.398F, 1.397F, -3.663F, 0.0F, -5.06F)
          close()
          moveToRelative(-4.0F, 1.06F)
          curveToRelative(0.811F, -0.81F, 2.127F, -0.811F, 2.94F, 0.0F)
          curveToRelative(0.81F, 0.812F, 0.81F, 2.128F, 0.0F, 2.94F)
          lineTo(19.0F, 7.939F)
          lineTo(16.06F, 5.0F)
          lineToRelative(0.892F, -0.891F)
          close()
          moveTo(15.0F, 6.062F)
          lineTo(17.94F, 9.0F)
          lineToRelative(-10.0F, 10.0F)
          curveToRelative(-0.21F, 0.21F, -0.474F, 0.357F, -0.763F, 0.426F)
          lineTo(3.762F, 20.24F)
          lineToRelative(0.813F, -3.416F)
          curveToRelative(0.069F, -0.29F, 0.217F, -0.554F, 0.427F, -0.764F)
          lineTo(15.0F, 6.06F)
          close()        
      }
    }
    return _edit24!!
  }

private var _edit24: ImageVector? = null
