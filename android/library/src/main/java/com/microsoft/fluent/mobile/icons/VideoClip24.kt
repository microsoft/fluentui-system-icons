package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.VideoClip24: ImageVector
  get() {
    if (_videoClip24 != null) {
      return _videoClip24!!
    }
    _videoClip24 = fluentIcon(name = "Regular.VideoClip24", 24f) {
      materialPath {
          moveTo(2.0F, 6.25F)
          curveTo(2.0F, 4.455F, 3.455F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 3.0F, 22.0F, 4.455F, 22.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 21.0F, 2.0F, 19.545F, 2.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveTo(5.25F, 4.5F)
          curveTo(4.284F, 4.5F, 3.5F, 5.284F, 3.5F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(5.25F)
          close()
          moveTo(9.0F, 9.25F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.76F, 0.816F, 1.243F, 1.482F, 0.876F)
          lineToRelative(5.0F, -2.75F)
          curveToRelative(0.69F, -0.38F, 0.69F, -1.372F, 0.0F, -1.752F)
          lineToRelative(-5.0F, -2.75F)
          curveTo(9.816F, 8.008F, 9.0F, 8.49F, 9.0F, 9.252F)
          close()        
      }
    }
    return _videoClip24!!
  }

private var _videoClip24: ImageVector? = null
