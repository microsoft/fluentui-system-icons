package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flag20: ImageVector
  get() {
    if (_flag20 != null) {
      return _flag20!!
    }
    _flag20 = fluentIcon(name = "Filled.Flag20", 20f) {
      materialPath {
          moveTo(4.5F, 13.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.4F, 0.0F, 0.637F, -0.445F, 0.416F, -0.777F)
          lineTo(13.101F, 8.0F)
          lineToRelative(2.815F, -4.223F)
          curveTo(16.137F, 3.445F, 15.899F, 3.0F, 15.5F, 3.0F)
          horizontalLineTo(4.0F)
          curveTo(3.724F, 3.0F, 3.5F, 3.224F, 3.5F, 3.5F)
          verticalLineToRelative(14.0F)
          curveTo(3.5F, 17.776F, 3.724F, 18.0F, 4.0F, 18.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(13.0F)
          close()        
      }
    }
    return _flag20!!
  }

private var _flag20: ImageVector? = null
