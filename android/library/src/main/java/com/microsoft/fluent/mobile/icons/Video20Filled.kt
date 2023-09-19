package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Video20: ImageVector
  get() {
    if (_video20 != null) {
      return _video20!!
    }
    _video20 = fluentIcon(name = "Filled.Video20", 20f) {
      materialPath {
          moveTo(13.0F, 6.5F)
          curveTo(13.0F, 5.12F, 11.88F, 4.0F, 10.5F, 4.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(3.12F, 4.0F, 2.0F, 5.12F, 2.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(1.0F, 1.43F)
          verticalLineToRelative(4.152F)
          lineToRelative(2.764F, 2.35F)
          curveTo(17.251F, 14.846F, 18.0F, 14.5F, 18.0F, 13.86F)
          verticalLineTo(6.193F)
          curveToRelative(0.0F, -0.636F, -0.742F, -0.983F, -1.23F, -0.575F)
          lineTo(14.0F, 7.93F)
          close()        
      }
    }
    return _video20!!
  }

private var _video20: ImageVector? = null
