package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Person32: ImageVector
  get() {
    if (_person32 != null) {
      return _person32!!
    }
    _person32 = fluentIcon(name = "Regular.Person32", 32f) {
      materialPath {
          moveTo(23.0F, 9.0F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          close()
          moveToRelative(-2.0F, 0.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveToRelative(-5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          close()
          moveTo(7.5F, 18.0F)
          curveTo(5.567F, 18.0F, 4.0F, 19.567F, 4.0F, 21.5F)
          verticalLineTo(22.0F)
          curveToRelative(0.0F, 2.393F, 1.523F, 4.417F, 3.685F, 5.793F)
          curveTo(9.859F, 29.177F, 12.802F, 30.0F, 16.0F, 30.0F)
          curveToRelative(3.198F, 0.0F, 6.14F, -0.823F, 8.315F, -2.207F)
          curveTo(26.477F, 26.417F, 28.0F, 24.393F, 28.0F, 22.0F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(6.0F, 21.5F)
          curveTo(6.0F, 20.672F, 6.672F, 20.0F, 7.5F, 20.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineTo(22.0F)
          curveToRelative(0.0F, 1.473F, -0.94F, 2.949F, -2.759F, 4.106F)
          curveTo(21.434F, 27.256F, 18.877F, 28.0F, 16.0F, 28.0F)
          reflectiveCurveToRelative(-5.434F, -0.744F, -7.241F, -1.894F)
          curveTo(6.939F, 24.95F, 6.0F, 23.472F, 6.0F, 22.0F)
          verticalLineToRelative(-0.5F)
          close()        
      }
    }
    return _person32!!
  }

private var _person32: ImageVector? = null
