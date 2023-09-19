package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoPlayPause20: ImageVector
  get() {
    if (_videoPlayPause20 != null) {
      return _videoPlayPause20!!
    }
    _videoPlayPause20 = fluentIcon(name = "Filled.VideoPlayPause20", 20f) {
      materialPath {
          moveTo(11.5F, 5.0F)
          curveTo(10.672F, 5.0F, 10.0F, 5.672F, 10.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 5.672F, 13.328F, 5.0F, 12.5F, 5.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveTo(15.672F, 5.0F, 15.0F, 5.672F, 15.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-7.0F)
          curveTo(19.0F, 5.672F, 18.328F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveTo(3.926F, 5.45F)
          curveTo(3.094F, 4.917F, 2.0F, 5.514F, 2.0F, 6.503F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 0.984F, 1.084F, 1.582F, 1.916F, 1.058F)
          lineToRelative(5.496F, -3.461F)
          curveToRelative(0.774F, -0.488F, 0.78F, -1.614F, 0.01F, -2.11F)
          lineTo(3.926F, 5.452F)
          close()        
      }
    }
    return _videoPlayPause20!!
  }

private var _videoPlayPause20: ImageVector? = null
