package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClip28: ImageVector
  get() {
    if (_videoClip28 != null) {
      return _videoClip28!!
    }
    _videoClip28 = fluentIcon(name = "Filled.VideoClip28", 28f) {
      materialPath {
          moveTo(5.75F, 4.0F)
          curveTo(3.679F, 4.0F, 2.0F, 5.679F, 2.0F, 7.75F)
          verticalLineToRelative(12.5F)
          curveTo(2.0F, 22.321F, 3.679F, 24.0F, 5.75F, 24.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(7.75F)
          curveTo(26.0F, 5.679F, 24.321F, 4.0F, 22.25F, 4.0F)
          horizontalLineTo(5.75F)
          close()
          moveTo(10.0F, 10.251F)
          curveToRelative(0.0F, -0.755F, 0.806F, -1.238F, 1.472F, -0.881F)
          lineToRelative(7.0F, 3.75F)
          curveToRelative(0.703F, 0.377F, 0.703F, 1.386F, 0.0F, 1.763F)
          lineToRelative(-7.0F, 3.75F)
          curveTo(10.806F, 18.988F, 10.0F, 18.505F, 10.0F, 17.75F)
          verticalLineToRelative(-7.5F)
          close()        
      }
    }
    return _videoClip28!!
  }

private var _videoClip28: ImageVector? = null
