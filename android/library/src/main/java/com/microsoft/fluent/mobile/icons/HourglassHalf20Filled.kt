package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HourglassHalf20: ImageVector
  get() {
    if (_hourglassHalf20 != null) {
      return _hourglassHalf20!!
    }
    _hourglassHalf20 = fluentIcon(name = "Filled.HourglassHalf20", 20f) {
      materialPath {
          moveTo(9.94F, 10.0F)
          curveToRelative(0.001F, 0.367F, -0.08F, 0.73F, -0.24F, 1.06F)
          curveToRelative(-0.154F, 0.332F, -0.38F, 0.625F, -0.66F, 0.86F)
          lineToRelative(-1.82F, 1.52F)
          curveToRelative(-0.385F, 0.313F, -0.692F, 0.71F, -0.9F, 1.16F)
          curveTo(6.115F, 15.039F, 6.006F, 15.516F, 6.0F, 16.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(-0.005F, -0.483F, -0.11F, -0.96F, -0.31F, -1.4F)
          curveToRelative(-0.214F, -0.45F, -0.525F, -0.845F, -0.91F, -1.16F)
          lineTo(11.0F, 11.91F)
          curveToRelative(-0.277F, -0.232F, -0.499F, -0.522F, -0.65F, -0.85F)
          curveToRelative(-0.177F, -0.326F, -0.276F, -0.69F, -0.29F, -1.06F)
          horizontalLineTo(9.94F)
          close()        
      }
    }
    return _hourglassHalf20!!
  }

private var _hourglassHalf20: ImageVector? = null
