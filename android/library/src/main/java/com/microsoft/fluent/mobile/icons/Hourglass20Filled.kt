package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Hourglass20: ImageVector
  get() {
    if (_hourglass20 != null) {
      return _hourglass20!!
    }
    _hourglass20 = fluentIcon(name = "Filled.Hourglass20", 20f) {
      materialPath {
          moveTo(13.69F, 5.4F)
          curveTo(13.89F, 4.96F, 13.995F, 4.483F, 14.0F, 4.0F)
          horizontalLineTo(6.0F)
          curveToRelative(0.006F, 0.484F, 0.115F, 0.961F, 0.32F, 1.4F)
          curveToRelative(0.208F, 0.45F, 0.515F, 0.847F, 0.9F, 1.16F)
          lineToRelative(1.82F, 1.52F)
          curveTo(9.32F, 8.315F, 9.546F, 8.608F, 9.7F, 8.94F)
          curveTo(9.86F, 9.27F, 9.941F, 9.633F, 9.94F, 10.0F)
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
          curveToRelative(0.014F, -0.37F, 0.113F, -0.734F, 0.29F, -1.06F)
          curveToRelative(0.151F, -0.328F, 0.373F, -0.618F, 0.65F, -0.85F)
          lineToRelative(1.78F, -1.53F)
          curveToRelative(0.385F, -0.315F, 0.696F, -0.71F, 0.91F, -1.16F)
          close()        
      }
    }
    return _hourglass20!!
  }

private var _hourglass20: ImageVector? = null
