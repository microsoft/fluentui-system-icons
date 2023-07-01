package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudOff16: ImageVector
  get() {
    if (_cloudOff16 != null) {
      return _cloudOff16!!
    }
    _cloudOff16 = fluentIcon(name = "Filled.CloudOff16", 16f) {
      materialPath {
          moveTo(12.254F, 12.961F)
          lineToRelative(1.892F, 1.893F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(4.45F, 5.155F)
          curveTo(4.234F, 5.57F, 4.09F, 6.026F, 4.03F, 6.507F)
          curveTo(2.338F, 6.62F, 1.0F, 8.03F, 1.0F, 9.75F)
          curveTo(1.0F, 11.545F, 2.455F, 13.0F, 4.25F, 13.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.171F, 0.0F, 0.34F, -0.013F, 0.504F, -0.039F)
          close()
          moveTo(15.0F, 9.75F)
          curveToRelative(0.0F, 0.867F, -0.34F, 1.654F, -0.892F, 2.237F)
          lineToRelative(-8.32F, -8.32F)
          curveTo(6.42F, 3.246F, 7.182F, 3.0F, 8.0F, 3.0F)
          curveToRelative(2.042F, 0.0F, 3.727F, 1.53F, 3.97F, 3.507F)
          curveTo(13.662F, 6.62F, 15.0F, 8.03F, 15.0F, 9.75F)
          close()        
      }
    }
    return _cloudOff16!!
  }

private var _cloudOff16: ImageVector? = null
