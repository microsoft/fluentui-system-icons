package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipHorizontal16: ImageVector
  get() {
    if (_flipHorizontal16 != null) {
      return _flipHorizontal16!!
    }
    _flipHorizontal16 = fluentIcon(name = "Regular.FlipHorizontal16", 16f) {
      materialPath {
          moveTo(14.925F, 12.763F)
          curveTo(14.835F, 12.91F, 14.673F, 13.0F, 14.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(9.224F, 13.0F, 9.0F, 12.776F, 9.0F, 12.5F)
          verticalLineToRelative(-10.0F)
          curveToRelative(0.0F, -0.232F, 0.16F, -0.433F, 0.385F, -0.487F)
          curveTo(9.611F, 1.96F, 9.844F, 2.07F, 9.947F, 2.276F)
          lineToRelative(5.0F, 10.0F)
          curveToRelative(0.078F, 0.155F, 0.07F, 0.34F, -0.022F, 0.487F)
          close()
          moveTo(10.0F, 4.618F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(3.691F)
          lineTo(10.0F, 4.618F)
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
