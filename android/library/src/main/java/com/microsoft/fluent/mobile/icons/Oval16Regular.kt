package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Oval16: ImageVector
  get() {
    if (_oval16 != null) {
      return _oval16!!
    }
    _oval16 = fluentIcon(name = "Regular.Oval16", 16f) {
      materialPath {
          moveTo(1.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(5.0F, -4.0F)
          curveTo(3.79F, 4.0F, 2.0F, 5.79F, 2.0F, 8.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _oval16!!
  }

private var _oval16: ImageVector? = null
