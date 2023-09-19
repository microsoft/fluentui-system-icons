package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Laptop16: ImageVector
  get() {
    if (_laptop16 != null) {
      return _laptop16!!
    }
    _laptop16 = fluentIcon(name = "Filled.Laptop16", 16f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.672F, 3.672F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 4.0F, 13.0F, 4.672F, 13.0F, 5.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 11.0F, 3.0F, 10.328F, 3.0F, 9.5F)
          verticalLineToRelative(-4.0F)
          close()
          moveTo(2.5F, 12.0F)
          curveTo(2.224F, 12.0F, 2.0F, 12.224F, 2.0F, 12.5F)
          reflectiveCurveTo(2.224F, 13.0F, 2.5F, 13.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 12.0F, 13.5F, 12.0F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _laptop16!!
  }

private var _laptop16: ImageVector? = null
