package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Button16: ImageVector
  get() {
    if (_button16 != null) {
      return _button16!!
    }
    _button16 = fluentIcon(name = "Filled.Button16", 16f) {
      materialPath {
          moveTo(1.0F, 5.5F)
          curveTo(1.0F, 4.12F, 2.12F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(13.88F, 3.0F, 15.0F, 4.12F, 15.0F, 5.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.12F, 12.0F, 1.0F, 10.88F, 1.0F, 9.5F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(6.0F, 2.0F)
          curveTo(7.0F, 7.776F, 7.224F, 8.0F, 7.5F, 8.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.276F, 7.0F, 12.0F, 7.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 7.0F, 7.0F, 7.224F, 7.0F, 7.5F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveTo(6.0F, 6.672F, 5.328F, 6.0F, 4.5F, 6.0F)
          reflectiveCurveTo(3.0F, 6.672F, 3.0F, 7.5F)
          reflectiveCurveTo(3.672F, 9.0F, 4.5F, 9.0F)
          reflectiveCurveTo(6.0F, 8.328F, 6.0F, 7.5F)
          close()        
      }
    }
    return _button16!!
  }

private var _button16: ImageVector? = null
