package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Oval48: ImageVector
  get() {
    if (_oval48 != null) {
      return _oval48!!
    }
    _oval48 = fluentIcon(name = "Regular.Oval48", 48f) {
      materialPath {
          moveTo(4.0F, 24.0F)
          curveToRelative(0.0F, -8.284F, 6.716F, -15.0F, 15.0F, -15.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(8.284F, 0.0F, 15.0F, 6.716F, 15.0F, 15.0F)
          curveToRelative(0.0F, 8.284F, -6.716F, 15.0F, -15.0F, 15.0F)
          horizontalLineTo(19.0F)
          curveToRelative(-8.284F, 0.0F, -15.0F, -6.716F, -15.0F, -15.0F)
          close()
          moveToRelative(15.0F, -12.5F)
          curveToRelative(-6.904F, 0.0F, -12.5F, 5.596F, -12.5F, 12.5F)
          reflectiveCurveTo(12.096F, 36.5F, 19.0F, 36.5F)
          horizontalLineToRelative(10.0F)
          curveToRelative(6.904F, 0.0F, 12.5F, -5.596F, 12.5F, -12.5F)
          reflectiveCurveTo(35.904F, 11.5F, 29.0F, 11.5F)
          horizontalLineTo(19.0F)
          close()        
      }
    }
    return _oval48!!
  }

private var _oval48: ImageVector? = null
