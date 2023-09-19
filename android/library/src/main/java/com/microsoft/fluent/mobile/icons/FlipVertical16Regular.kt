package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipVertical16: ImageVector
  get() {
    if (_flipVertical16 != null) {
      return _flipVertical16!!
    }
    _flipVertical16 = fluentIcon(name = "Regular.FlipVertical16", 16f) {
      materialPath {
          moveTo(12.763F, 1.075F)
          curveTo(12.91F, 1.165F, 13.0F, 1.327F, 13.0F, 1.5F)
          verticalLineToRelative(5.0F)
          curveTo(13.0F, 6.776F, 12.776F, 7.0F, 12.5F, 7.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(2.268F, 7.0F, 2.067F, 6.84F, 2.013F, 6.615F)
          curveTo(1.96F, 6.389F, 2.07F, 6.157F, 2.276F, 6.053F)
          lineToRelative(10.0F, -5.0F)
          curveToRelative(0.155F, -0.078F, 0.34F, -0.07F, 0.487F, 0.022F)
          close()
          moveTo(4.618F, 6.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(2.309F)
          lineTo(4.618F, 6.0F)
          close()
          moveTo(13.0F, 14.5F)
          curveToRelative(0.0F, 0.173F, -0.09F, 0.334F, -0.237F, 0.425F)
          curveToRelative(-0.147F, 0.091F, -0.332F, 0.1F, -0.487F, 0.022F)
          lineToRelative(-10.0F, -5.0F)
          curveTo(2.07F, 9.844F, 1.96F, 9.611F, 2.013F, 9.385F)
          curveTo(2.067F, 9.16F, 2.268F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(10.0F)
          curveTo(12.776F, 9.0F, 13.0F, 9.224F, 13.0F, 9.5F)
          verticalLineToRelative(5.0F)
          close()        
      }
    }
    return _flipVertical16!!
  }

private var _flipVertical16: ImageVector? = null
