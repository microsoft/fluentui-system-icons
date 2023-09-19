package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClip24: ImageVector
  get() {
    if (_videoClip24 != null) {
      return _videoClip24!!
    }
    _videoClip24 = fluentIcon(name = "Filled.VideoClip24", 24f) {
      materialPath {
          moveTo(5.25F, 3.0F)
          curveTo(3.455F, 3.0F, 2.0F, 4.455F, 2.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(2.0F, 19.545F, 3.455F, 21.0F, 5.25F, 21.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(22.0F, 4.455F, 20.545F, 3.0F, 18.75F, 3.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(9.0F, 9.25F)
          curveToRelative(0.0F, -0.76F, 0.816F, -1.242F, 1.482F, -0.876F)
          lineToRelative(5.0F, 2.75F)
          curveToRelative(0.69F, 0.38F, 0.69F, 1.373F, 0.0F, 1.753F)
          lineToRelative(-5.0F, 2.75F)
          curveTo(9.816F, 15.992F, 9.0F, 15.51F, 9.0F, 14.75F)
          verticalLineToRelative(-5.5F)
          close()        
      }
    }
    return _videoClip24!!
  }

private var _videoClip24: ImageVector? = null
