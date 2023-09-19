package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Oval32: ImageVector
  get() {
    if (_oval32 != null) {
      return _oval32!!
    }
    _oval32 = fluentIcon(name = "Filled.Oval32", 32f) {
      materialPath {
          moveTo(12.0F, 6.0F)
          curveTo(6.477F, 6.0F, 2.0F, 10.477F, 2.0F, 16.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(25.523F, 6.0F, 20.0F, 6.0F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _oval32!!
  }

private var _oval32: ImageVector? = null
