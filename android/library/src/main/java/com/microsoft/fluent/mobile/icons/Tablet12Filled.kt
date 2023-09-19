package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tablet12: ImageVector
  get() {
    if (_tablet12 != null) {
      return _tablet12!!
    }
    _tablet12 = fluentIcon(name = "Filled.Tablet12", 12f) {
      materialPath {
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 2.672F, 1.672F, 2.0F, 2.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(10.328F, 2.0F, 11.0F, 2.672F, 11.0F, 3.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(1.672F, 10.0F, 1.0F, 9.328F, 1.0F, 8.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(5.0F, 7.0F)
          curveTo(4.724F, 7.0F, 4.5F, 7.224F, 4.5F, 7.5F)
          reflectiveCurveTo(4.724F, 8.0F, 5.0F, 8.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(7.276F, 7.0F, 7.0F, 7.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _tablet12!!
  }

private var _tablet12: ImageVector? = null
