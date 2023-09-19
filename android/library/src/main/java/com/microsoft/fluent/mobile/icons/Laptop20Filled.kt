package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Laptop20: ImageVector
  get() {
    if (_laptop20 != null) {
      return _laptop20!!
    }
    _laptop20 = fluentIcon(name = "Filled.Laptop20", 20f) {
      materialPath {
          moveTo(4.5F, 5.0F)
          curveTo(3.672F, 5.0F, 3.0F, 5.672F, 3.0F, 6.5F)
          verticalLineToRelative(6.0F)
          curveTo(3.0F, 13.328F, 3.672F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(17.0F, 5.672F, 16.328F, 5.0F, 15.5F, 5.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(-2.0F, 10.0F)
          curveTo(2.224F, 15.0F, 2.0F, 15.224F, 2.0F, 15.5F)
          reflectiveCurveTo(2.224F, 16.0F, 2.5F, 16.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 15.0F, 17.5F, 15.0F)
          horizontalLineToRelative(-15.0F)
          close()        
      }
    }
    return _laptop20!!
  }

private var _laptop20: ImageVector? = null
