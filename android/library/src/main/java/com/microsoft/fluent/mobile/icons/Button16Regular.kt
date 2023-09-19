package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Button16: ImageVector
  get() {
    if (_button16 != null) {
      return _button16!!
    }
    _button16 = fluentIcon(name = "Regular.Button16", 16f) {
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
          moveTo(3.5F, 4.0F)
          curveTo(2.672F, 4.0F, 2.0F, 4.672F, 2.0F, 5.5F)
          verticalLineToRelative(4.0F)
          curveTo(2.0F, 10.328F, 2.672F, 11.0F, 3.5F, 11.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-4.0F)
          curveTo(14.0F, 4.672F, 13.328F, 4.0F, 12.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(7.0F, 7.5F)
          curveTo(7.0F, 7.224F, 7.224F, 7.0F, 7.5F, 7.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.276F, 8.0F, 12.0F, 8.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 8.0F, 7.0F, 7.776F, 7.0F, 7.5F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveTo(6.0F, 8.328F, 5.328F, 9.0F, 4.5F, 9.0F)
          reflectiveCurveTo(3.0F, 8.328F, 3.0F, 7.5F)
          reflectiveCurveTo(3.672F, 6.0F, 4.5F, 6.0F)
          reflectiveCurveTo(6.0F, 6.672F, 6.0F, 7.5F)
          close()        
      }
    }
    return _button16!!
  }

private var _button16: ImageVector? = null
