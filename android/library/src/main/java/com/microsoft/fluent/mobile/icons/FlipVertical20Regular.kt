package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipVertical20: ImageVector
  get() {
    if (_flipVertical20 != null) {
      return _flipVertical20!!
    }
    _flipVertical20 = fluentIcon(name = "Regular.FlipVertical20", 20f) {
      materialPath {
          moveTo(15.77F, 2.079F)
          curveTo(15.913F, 2.17F, 16.0F, 2.329F, 16.0F, 2.5F)
          verticalLineToRelative(6.0F)
          curveTo(16.0F, 8.776F, 15.776F, 9.0F, 15.5F, 9.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.265F, 9.0F, 2.062F, 8.837F, 2.012F, 8.607F)
          curveToRelative(-0.05F, -0.23F, 0.065F, -0.463F, 0.279F, -0.561F)
          lineToRelative(13.0F, -6.0F)
          curveToRelative(0.154F, -0.071F, 0.335F, -0.06F, 0.479F, 0.033F)
          close()
          moveTo(4.777F, 8.0F)
          horizontalLineTo(15.0F)
          verticalLineTo(3.281F)
          lineTo(4.777F, 8.0F)
          close()
          moveTo(16.0F, 17.5F)
          curveToRelative(0.0F, 0.17F, -0.087F, 0.33F, -0.23F, 0.421F)
          curveToRelative(-0.144F, 0.092F, -0.325F, 0.104F, -0.48F, 0.033F)
          lineToRelative(-13.0F, -6.0F)
          curveToRelative(-0.213F, -0.098F, -0.329F, -0.332F, -0.278F, -0.561F)
          curveTo(2.062F, 11.163F, 2.265F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(6.0F)
          close()        
      }
    }
    return _flipVertical20!!
  }

private var _flipVertical20: ImageVector? = null
