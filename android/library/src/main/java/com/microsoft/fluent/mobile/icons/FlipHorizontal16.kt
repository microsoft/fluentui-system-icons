package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipHorizontal16: ImageVector
  get() {
    if (_flipHorizontal16 != null) {
      return _flipHorizontal16!!
    }
    _flipHorizontal16 = fluentIcon(name = "Filled.FlipHorizontal16", 16f) {
      materialPath {
          moveTo(14.884F, 12.651F)
          curveToRelative(-0.138F, 0.217F, -0.377F, 0.35F, -0.634F, 0.35F)
          horizontalLineToRelative(-4.5F)
          curveTo(9.336F, 13.0F, 9.0F, 12.663F, 9.0F, 12.25F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.352F, 0.243F, -0.656F, 0.585F, -0.733F)
          curveToRelative(0.343F, -0.077F, 0.693F, 0.094F, 0.843F, 0.411F)
          lineToRelative(4.5F, 9.5F)
          curveToRelative(0.11F, 0.232F, 0.093F, 0.505F, -0.044F, 0.722F)
          close()
          moveTo(10.5F, 6.085F)
          verticalLineTo(11.5F)
          horizontalLineToRelative(2.565F)
          lineTo(10.5F, 6.085F)
          close()
          moveTo(1.5F, 13.0F)
          curveToRelative(-0.173F, 0.0F, -0.334F, -0.09F, -0.425F, -0.237F)
          curveToRelative(-0.091F, -0.147F, -0.1F, -0.332F, -0.022F, -0.487F)
          lineToRelative(5.0F, -10.0F)
          curveTo(6.157F, 2.07F, 6.389F, 1.96F, 6.615F, 2.013F)
          curveTo(6.84F, 2.067F, 7.0F, 2.268F, 7.0F, 2.5F)
          verticalLineToRelative(10.0F)
          curveTo(7.0F, 12.776F, 6.776F, 13.0F, 6.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _flipHorizontal16!!
  }

private var _flipHorizontal16: ImageVector? = null
