package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Oval20: ImageVector
  get() {
    if (_oval20 != null) {
      return _oval20!!
    }
    _oval20 = fluentIcon(name = "Regular.Oval20", 20f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(6.0F, -5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _oval20!!
  }

private var _oval20: ImageVector? = null
