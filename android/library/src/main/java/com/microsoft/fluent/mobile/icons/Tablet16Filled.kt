package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tablet16: ImageVector
  get() {
    if (_tablet16 != null) {
      return _tablet16!!
    }
    _tablet16 = fluentIcon(name = "Filled.Tablet16", 16f) {
      materialPath {
          moveTo(1.0F, 4.75F)
          curveTo(1.0F, 3.784F, 1.784F, 3.0F, 2.75F, 3.0F)
          horizontalLineToRelative(10.5F)
          curveTo(14.216F, 3.0F, 15.0F, 3.784F, 15.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(2.75F)
          curveTo(1.784F, 13.0F, 1.0F, 12.216F, 1.0F, 11.25F)
          verticalLineToRelative(-6.5F)
          close()
          moveTo(6.5F, 10.0F)
          curveTo(6.224F, 10.0F, 6.0F, 10.224F, 6.0F, 10.5F)
          reflectiveCurveTo(6.224F, 11.0F, 6.5F, 11.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(9.776F, 10.0F, 9.5F, 10.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _tablet16!!
  }

private var _tablet16: ImageVector? = null
