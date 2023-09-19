package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tv20: ImageVector
  get() {
    if (_tv20 != null) {
      return _tv20!!
    }
    _tv20 = fluentIcon(name = "Filled.Tv20", 20f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.5F, 10.0F)
          curveTo(5.224F, 16.0F, 5.0F, 16.224F, 5.0F, 16.5F)
          reflectiveCurveTo(5.224F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 16.0F, 14.5F, 16.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _tv20!!
  }

private var _tv20: ImageVector? = null
