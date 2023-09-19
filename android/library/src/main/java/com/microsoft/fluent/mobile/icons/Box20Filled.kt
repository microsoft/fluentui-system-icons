package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Box20: ImageVector
  get() {
    if (_box20 != null) {
      return _box20!!
    }
    _box20 = fluentIcon(name = "Filled.Box20", 20f) {
      materialPath {
          moveTo(10.0F, 7.96F)
          lineToRelative(3.029F, -1.21F)
          lineToRelative(-7.5F, -3.0F)
          lineToRelative(-2.586F, 1.034F)
          curveTo(2.81F, 4.837F, 2.688F, 4.907F, 2.579F, 4.992F)
          lineTo(10.0F, 7.961F)
          close()
          moveTo(2.035F, 5.853F)
          curveTo(2.012F, 5.957F, 2.0F, 6.066F, 2.0F, 6.176F)
          verticalLineToRelative(7.646F)
          curveToRelative(0.0F, 0.614F, 0.373F, 1.165F, 0.943F, 1.393F)
          lineTo(8.7F, 17.518F)
          curveToRelative(0.26F, 0.104F, 0.528F, 0.175F, 0.8F, 0.214F)
          verticalLineTo(8.838F)
          lineTo(2.035F, 5.852F)
          close()
          moveToRelative(8.465F, 11.88F)
          curveToRelative(0.272F, -0.039F, 0.54F, -0.11F, 0.8F, -0.214F)
          lineToRelative(5.757F, -2.303F)
          curveToRelative(0.57F, -0.228F, 0.943F, -0.78F, 0.943F, -1.393F)
          verticalLineTo(6.176F)
          curveToRelative(0.0F, -0.11F, -0.012F, -0.219F, -0.035F, -0.324F)
          lineTo(10.5F, 8.838F)
          verticalLineToRelative(8.894F)
          close()
          moveToRelative(6.921F, -12.74F)
          lineToRelative(-3.046F, 1.219F)
          lineToRelative(-7.5F, -3.0F)
          lineTo(8.7F, 2.48F)
          curveToRelative(0.835F, -0.334F, 1.765F, -0.334F, 2.6F, 0.0F)
          lineToRelative(5.757F, 2.303F)
          curveToRelative(0.133F, 0.053F, 0.255F, 0.123F, 0.364F, 0.208F)
          close()        
      }
    }
    return _box20!!
  }

private var _box20: ImageVector? = null
