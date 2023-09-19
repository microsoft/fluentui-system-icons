package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Desk20: ImageVector
  get() {
    if (_desk20 != null) {
      return _desk20!!
    }
    _desk20 = fluentIcon(name = "Filled.Desk20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(15.0F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(6.0F, 4.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(-5.5F, 2.5F)
          curveTo(4.5F, 10.224F, 4.724F, 10.0F, 5.0F, 10.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(7.276F, 11.0F, 7.0F, 11.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()        
      }
    }
    return _desk20!!
  }

private var _desk20: ImageVector? = null
