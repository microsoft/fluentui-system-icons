package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClip16: ImageVector
  get() {
    if (_videoClip16 != null) {
      return _videoClip16!!
    }
    _videoClip16 = fluentIcon(name = "Filled.VideoClip16", 16f) {
      materialPath {
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 4.12F, 3.12F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 3.0F, 14.0F, 4.12F, 14.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 13.0F, 2.0F, 11.88F, 2.0F, 10.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(4.5F, 0.32F)
          verticalLineToRelative(4.36F)
          curveToRelative(0.0F, 0.25F, 0.274F, 0.403F, 0.487F, 0.273F)
          lineToRelative(3.259F, -1.992F)
          curveToRelative(0.345F, -0.21F, 0.345F, -0.711F, 0.0F, -0.922F)
          lineToRelative(-3.26F, -1.991F)
          curveTo(6.775F, 5.418F, 6.5F, 5.57F, 6.5F, 5.82F)
          close()        
      }
    }
    return _videoClip16!!
  }

private var _videoClip16: ImageVector? = null
