package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Video20: ImageVector
  get() {
    if (_video20 != null) {
      return _video20!!
    }
    _video20 = fluentIcon(name = "Regular.Video20", 20f) {
      materialPath {
          moveTo(4.5F, 4.0F)
          curveTo(3.12F, 4.0F, 2.0F, 5.12F, 2.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-1.0F)
          lineToRelative(2.4F, 1.8F)
          curveToRelative(0.66F, 0.494F, 1.6F, 0.024F, 1.6F, -0.8F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -0.824F, -0.94F, -1.294F, -1.6F, -0.8F)
          lineTo(14.0F, 7.5F)
          verticalLineToRelative(-1.0F)
          curveTo(14.0F, 5.12F, 12.88F, 4.0F, 11.5F, 4.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(14.0F, 8.75F)
          lineToRelative(3.0F, -2.25F)
          verticalLineToRelative(7.0F)
          lineToRelative(-3.0F, -2.25F)
          verticalLineToRelative(-2.5F)
          close()
          moveTo(13.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 15.0F, 3.0F, 14.328F, 3.0F, 13.5F)
          verticalLineToRelative(-7.0F)
          curveTo(3.0F, 5.672F, 3.672F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 5.0F, 13.0F, 5.672F, 13.0F, 6.5F)
          close()        
      }
    }
    return _video20!!
  }

private var _video20: ImageVector? = null
