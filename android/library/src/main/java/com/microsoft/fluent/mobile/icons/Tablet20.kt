package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tablet20: ImageVector
  get() {
    if (_tablet20 != null) {
      return _tablet20!!
    }
    _tablet20 = fluentIcon(name = "Filled.Tablet20", 20f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(6.5F, 6.0F)
          curveTo(8.224F, 12.0F, 8.0F, 12.224F, 8.0F, 12.5F)
          reflectiveCurveTo(8.224F, 13.0F, 8.5F, 13.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 12.0F, 11.5F, 12.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _tablet20!!
  }

private var _tablet20: ImageVector? = null
