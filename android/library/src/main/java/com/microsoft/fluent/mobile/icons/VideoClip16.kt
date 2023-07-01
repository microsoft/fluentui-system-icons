package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.VideoClip16: ImageVector
  get() {
    if (_videoClip16 != null) {
      return _videoClip16!!
    }
    _videoClip16 = fluentIcon(name = "Regular.VideoClip16", 16f) {
      materialPath {
          moveTo(6.5F, 5.82F)
          verticalLineToRelative(4.36F)
          curveToRelative(0.0F, 0.25F, 0.274F, 0.403F, 0.487F, 0.273F)
          lineToRelative(3.259F, -1.992F)
          curveToRelative(0.345F, -0.21F, 0.345F, -0.711F, 0.0F, -0.922F)
          lineToRelative(-3.26F, -1.991F)
          curveTo(6.775F, 5.418F, 6.5F, 5.57F, 6.5F, 5.82F)
          close()
          moveTo(4.5F, 3.0F)
          curveTo(3.12F, 3.0F, 2.0F, 4.12F, 2.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 11.88F, 3.12F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(14.0F, 4.12F, 12.88F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.672F, 3.672F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 4.0F, 13.0F, 4.672F, 13.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 12.0F, 3.0F, 11.328F, 3.0F, 10.5F)
          verticalLineToRelative(-5.0F)
          close()        
      }
    }
    return _videoClip16!!
  }

private var _videoClip16: ImageVector? = null
