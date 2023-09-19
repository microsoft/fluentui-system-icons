package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MyLocation20: ImageVector
  get() {
    if (_myLocation20 != null) {
      return _myLocation20!!
    }
    _myLocation20 = fluentIcon(name = "Regular.MyLocation20", 20f) {
      materialPath {
          moveTo(10.0F, 13.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          close()
          moveToRelative(0.5F, -10.5F)
          curveTo(10.5F, 2.224F, 10.276F, 2.0F, 10.0F, 2.0F)
          reflectiveCurveTo(9.5F, 2.224F, 9.5F, 2.5F)
          verticalLineToRelative(1.52F)
          curveTo(6.585F, 4.261F, 4.261F, 6.585F, 4.02F, 9.5F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 9.5F, 2.0F, 9.724F, 2.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(1.52F)
          curveToRelative(0.241F, 2.915F, 2.565F, 5.239F, 5.48F, 5.48F)
          verticalLineToRelative(1.52F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-1.52F)
          curveToRelative(2.915F, -0.241F, 5.239F, -2.565F, 5.48F, -5.48F)
          horizontalLineToRelative(1.52F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-1.52F)
          curveToRelative(-0.241F, -2.915F, -2.565F, -5.239F, -5.48F, -5.48F)
          verticalLineTo(2.5F)
          close()
          moveTo(10.0F, 15.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          close()        
      }
    }
    return _myLocation20!!
  }

private var _myLocation20: ImageVector? = null
