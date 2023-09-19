package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Bookmark20: ImageVector
  get() {
    if (_bookmark20 != null) {
      return _bookmark20!!
    }
    _bookmark20 = fluentIcon(name = "Regular.Bookmark20", 20f) {
      materialPath {
          moveTo(4.0F, 4.5F)
          curveTo(4.0F, 3.12F, 5.12F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.88F, 2.0F, 16.0F, 3.12F, 16.0F, 4.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.188F, -0.105F, 0.36F, -0.273F, 0.446F)
          curveToRelative(-0.168F, 0.085F, -0.369F, 0.069F, -0.521F, -0.042F)
          lineTo(10.0F, 14.118F)
          lineToRelative(-5.206F, 3.786F)
          curveToRelative(-0.152F, 0.111F, -0.353F, 0.127F, -0.52F, 0.042F)
          curveTo(4.105F, 17.86F, 4.0F, 17.688F, 4.0F, 17.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(6.5F, 3.0F)
          curveTo(5.672F, 3.0F, 5.0F, 3.672F, 5.0F, 4.5F)
          verticalLineToRelative(12.018F)
          lineToRelative(4.706F, -3.422F)
          curveToRelative(0.175F, -0.128F, 0.413F, -0.128F, 0.588F, 0.0F)
          lineTo(15.0F, 16.518F)
          verticalLineTo(4.5F)
          curveTo(15.0F, 3.672F, 14.328F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _bookmark20!!
  }

private var _bookmark20: ImageVector? = null
