package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Search32: ImageVector
  get() {
    if (_search32 != null) {
      return _search32!!
    }
    _search32 = fluentIcon(name = "Regular.Search32", 32f) {
      materialPath {
          moveTo(13.5F, 3.0F)
          curveTo(7.701F, 3.0F, 3.0F, 7.701F, 3.0F, 13.5F)
          reflectiveCurveTo(7.701F, 24.0F, 13.5F, 24.0F)
          curveToRelative(2.54F, 0.0F, 4.868F, -0.901F, 6.684F, -2.402F)
          lineToRelative(7.109F, 7.11F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.391F, 0.39F, -1.025F, 0.0F, -1.415F)
          lineToRelative(-7.109F, -7.11F)
          curveTo(23.098F, 18.369F, 24.0F, 16.04F, 24.0F, 13.5F)
          curveTo(24.0F, 7.701F, 19.299F, 3.0F, 13.5F, 3.0F)
          close()
          moveTo(5.0F, 13.5F)
          curveTo(5.0F, 8.806F, 8.806F, 5.0F, 13.5F, 5.0F)
          reflectiveCurveTo(22.0F, 8.806F, 22.0F, 13.5F)
          reflectiveCurveTo(18.194F, 22.0F, 13.5F, 22.0F)
          reflectiveCurveTo(5.0F, 18.194F, 5.0F, 13.5F)
          close()        
      }
    }
    return _search32!!
  }

private var _search32: ImageVector? = null
