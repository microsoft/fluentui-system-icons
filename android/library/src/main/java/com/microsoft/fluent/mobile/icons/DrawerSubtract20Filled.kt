package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DrawerSubtract20: ImageVector
  get() {
    if (_drawerSubtract20 != null) {
      return _drawerSubtract20!!
    }
    _drawerSubtract20 = fluentIcon(name = "Filled.DrawerSubtract20", 20f) {
      materialPath {
          moveTo(18.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(9.0F, 7.985F, 9.0F, 5.5F)
          reflectiveCurveTo(11.015F, 1.0F, 13.5F, 1.0F)
          reflectiveCurveTo(18.0F, 3.015F, 18.0F, 5.5F)
          close()
          moveToRelative(-2.0F, 0.0F)
          curveTo(16.0F, 5.224F, 15.776F, 5.0F, 15.5F, 5.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(11.224F, 5.0F, 11.0F, 5.224F, 11.0F, 5.5F)
          reflectiveCurveTo(11.224F, 6.0F, 11.5F, 6.0F)
          horizontalLineToRelative(4.0F)
          curveTo(15.776F, 6.0F, 16.0F, 5.776F, 16.0F, 5.5F)
          close()
          moveTo(6.0F, 4.0F)
          horizontalLineToRelative(2.207F)
          curveTo(8.116F, 4.322F, 8.053F, 4.657F, 8.022F, 5.0F)
          horizontalLineTo(6.0F)
          curveTo(4.895F, 5.0F, 4.0F, 5.895F, 4.0F, 7.0F)
          horizontalLineToRelative(4.207F)
          curveTo(8.306F, 7.349F, 8.437F, 7.683F, 8.6F, 8.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.5F)
          curveTo(7.776F, 11.0F, 8.0F, 11.224F, 8.0F, 11.5F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(-0.6F)
          curveToRelative(0.358F, -0.183F, 0.693F, -0.404F, 1.0F, -0.657F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          close()        
      }
    }
    return _drawerSubtract20!!
  }

private var _drawerSubtract20: ImageVector? = null
