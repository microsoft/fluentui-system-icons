package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Spacebar20: ImageVector
  get() {
    if (_spacebar20 != null) {
      return _spacebar20!!
    }
    _spacebar20 = fluentIcon(name = "Regular.Spacebar20", 20f) {
      materialPath {
          moveTo(2.5F, 8.0F)
          curveTo(2.776F, 8.0F, 3.0F, 8.224F, 3.0F, 8.5F)
          verticalLineToRelative(2.0F)
          curveTo(3.0F, 10.776F, 3.224F, 11.0F, 3.5F, 11.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          curveTo(17.0F, 8.224F, 17.224F, 8.0F, 17.5F, 8.0F)
          reflectiveCurveTo(18.0F, 8.224F, 18.0F, 8.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.672F, 12.0F, 2.0F, 11.328F, 2.0F, 10.5F)
          verticalLineToRelative(-2.0F)
          curveTo(2.0F, 8.224F, 2.224F, 8.0F, 2.5F, 8.0F)
          close()        
      }
    }
    return _spacebar20!!
  }

private var _spacebar20: ImageVector? = null
