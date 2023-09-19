package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ThumbDislike16: ImageVector
  get() {
    if (_thumbDislike16 != null) {
      return _thumbDislike16!!
    }
    _thumbDislike16 = fluentIcon(name = "Filled.ThumbDislike16", 16f) {
      materialPath {
          moveTo(13.094F, 4.62F)
          curveToRelative(-0.378F, -2.016F, -2.4F, -3.276F, -4.377F, -2.728F)
          lineToRelative(-4.95F, 1.376F)
          curveToRelative(-0.735F, 0.204F, -1.29F, 0.808F, -1.43F, 1.558F)
          lineTo(2.113F, 6.022F)
          curveToRelative(-0.165F, 0.88F, 0.46F, 1.647F, 1.157F, 1.936F)
          curveToRelative(0.255F, 0.106F, 0.546F, 0.253F, 0.853F, 0.458F)
          curveToRelative(1.68F, 1.119F, 2.48F, 2.636F, 3.015F, 3.925F)
          curveToRelative(0.097F, 0.232F, 0.19F, 0.47F, 0.278F, 0.699F)
          curveToRelative(0.146F, 0.376F, 0.284F, 0.73F, 0.416F, 1.001F)
          curveToRelative(0.111F, 0.227F, 0.245F, 0.455F, 0.42F, 0.63F)
          curveTo(8.438F, 14.86F, 8.687F, 15.0F, 9.0F, 15.0F)
          curveToRelative(0.357F, 0.0F, 0.666F, -0.124F, 0.912F, -0.34F)
          curveToRelative(0.235F, -0.207F, 0.393F, -0.481F, 0.502F, -0.761F)
          curveToRelative(0.214F, -0.554F, 0.281F, -1.251F, 0.29F, -1.893F)
          curveToRelative(0.007F, -0.654F, -0.046F, -1.301F, -0.1F, -1.781F)
          curveToRelative(-0.008F, -0.08F, -0.018F, -0.155F, -0.026F, -0.226F)
          horizontalLineToRelative(0.512F)
          curveToRelative(1.566F, 0.0F, 2.746F, -1.422F, 2.457F, -2.96F)
          lineToRelative(-0.453F, -2.42F)
          close()        
      }
    }
    return _thumbDislike16!!
  }

private var _thumbDislike16: ImageVector? = null
