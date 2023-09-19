package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pen48: ImageVector
  get() {
    if (_pen48 != null) {
      return _pen48!!
    }
    _pen48 = fluentIcon(name = "Filled.Pen48", 48f) {
      materialPath {
          moveTo(32.206F, 6.025F)
          curveToRelative(2.697F, -2.697F, 7.07F, -2.698F, 9.768F, 0.0F)
          curveToRelative(2.697F, 2.697F, 2.698F, 7.07F, 0.0F, 9.767F)
          lineToRelative(-2.234F, 2.236F)
          lineToRelative(0.935F, 0.998F)
          curveToRelative(1.57F, 1.673F, 1.527F, 4.29F, -0.095F, 5.912F)
          lineToRelative(-3.446F, 3.446F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          curveToRelative(-0.488F, -0.489F, -0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(3.446F, -3.446F)
          curveToRelative(0.668F, -0.668F, 0.685F, -1.746F, 0.04F, -2.435F)
          lineToRelative(-0.881F, -0.939F)
          lineToRelative(-20.165F, 20.168F)
          curveToRelative(-0.762F, 0.762F, -1.716F, 1.305F, -2.76F, 1.572F)
          lineTo(5.56F, 43.961F)
          curveToRelative(-0.428F, 0.109F, -0.882F, -0.015F, -1.194F, -0.328F)
          curveToRelative(-0.312F, -0.312F, -0.436F, -0.766F, -0.327F, -1.193F)
          lineToRelative(2.427F, -9.485F)
          curveToRelative(0.267F, -1.044F, 0.81F, -1.996F, 1.571F, -2.758F)
          lineToRelative(24.17F, -24.172F)
          close()        
      }
    }
    return _pen48!!
  }

private var _pen48: ImageVector? = null
