package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Video16: ImageVector
  get() {
    if (_video16 != null) {
      return _video16!!
    }
    _video16 = fluentIcon(name = "Regular.Video16", 16f) {
      materialPath {
          moveTo(2.0F, 5.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(6.0F)
          curveTo(10.328F, 3.5F, 11.0F, 4.172F, 11.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(2.672F, 12.5F, 2.0F, 11.828F, 2.0F, 11.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(1.5F, -2.5F)
          curveTo(2.12F, 2.5F, 1.0F, 3.62F, 1.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-0.5F)
          lineToRelative(1.8F, 1.35F)
          curveToRelative(0.494F, 0.371F, 1.2F, 0.018F, 1.2F, -0.6F)
          verticalLineTo(4.755F)
          curveToRelative(0.0F, -0.618F, -0.705F, -0.97F, -1.2F, -0.6F)
          lineTo(12.0F, 5.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          horizontalLineToRelative(-6.0F)
          close()
          moveTo(12.0F, 6.75F)
          lineToRelative(2.0F, -1.496F)
          verticalLineToRelative(5.496F)
          lineToRelative(-2.0F, -1.5F)
          verticalLineToRelative(-2.5F)
          close()        
      }
    }
    return _video16!!
  }

private var _video16: ImageVector? = null
