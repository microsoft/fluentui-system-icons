package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Oval48: ImageVector
  get() {
    if (_oval48 != null) {
      return _oval48!!
    }
    _oval48 = fluentIcon(name = "Filled.Oval48", 48f) {
      materialPath {
          moveTo(4.0F, 24.0F)
          curveToRelative(0.0F, -8.284F, 6.716F, -15.0F, 15.0F, -15.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(8.284F, 0.0F, 15.0F, 6.716F, 15.0F, 15.0F)
          curveToRelative(0.0F, 8.284F, -6.716F, 15.0F, -15.0F, 15.0F)
          horizontalLineTo(19.0F)
          curveToRelative(-8.284F, 0.0F, -15.0F, -6.716F, -15.0F, -15.0F)
          close()        
      }
    }
    return _oval48!!
  }

private var _oval48: ImageVector? = null
