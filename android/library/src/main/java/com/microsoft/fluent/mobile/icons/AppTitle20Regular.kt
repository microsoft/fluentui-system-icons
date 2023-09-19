package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.AppTitle20: ImageVector
  get() {
    if (_appTitle20 != null) {
      return _appTitle20!!
    }
    _appTitle20 = fluentIcon(name = "Regular.AppTitle20", 20f) {
      materialPath {
          moveTo(4.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.0F, -2.0F)
          curveTo(5.895F, 4.0F, 5.0F, 4.895F, 5.0F, 6.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.0F)
          close()
          moveTo(4.0F, 17.5F)
          curveTo(4.0F, 17.224F, 4.224F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.776F, 18.0F, 15.5F, 18.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.224F, 18.0F, 4.0F, 17.776F, 4.0F, 17.5F)
          close()        
      }
    }
    return _appTitle20!!
  }

private var _appTitle20: ImageVector? = null
