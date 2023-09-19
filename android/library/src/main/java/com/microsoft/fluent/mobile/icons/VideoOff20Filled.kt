package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoOff20: ImageVector
  get() {
    if (_videoOff20 != null) {
      return _videoOff20!!
    }
    _videoOff20 = fluentIcon(name = "Filled.VideoOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(1.355F, 1.354F)
          curveTo(2.617F, 4.593F, 2.0F, 5.474F, 2.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.314F, 0.0F, 2.39F, -1.013F, 2.492F, -2.3F)
          lineToRelative(4.154F, 4.154F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(13.911F, 12.285F)
          lineToRelative(-1.41F, -1.199F)
          lineTo(14.0F, 11.88F)
          verticalLineTo(7.93F)
          lineToRelative(2.77F, -2.314F)
          curveTo(17.257F, 5.21F, 18.0F, 5.557F, 18.0F, 6.193F)
          verticalLineToRelative(7.667F)
          curveToRelative(0.0F, 0.64F, -0.749F, 0.986F, -1.236F, 0.572F)
          close()
          moveTo(13.0F, 10.879F)
          lineToRelative(-6.879F, -6.88F)
          horizontalLineTo(10.5F)
          curveTo(11.88F, 4.0F, 13.0F, 5.12F, 13.0F, 6.5F)
          verticalLineToRelative(4.38F)
          close()        
      }
    }
    return _videoOff20!!
  }

private var _videoOff20: ImageVector? = null
