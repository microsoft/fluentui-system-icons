package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pause16: ImageVector
  get() {
    if (_pause16 != null) {
      return _pause16!!
    }
    _pause16 = fluentIcon(name = "Filled.Pause16", 16f) {
      materialPath {
          moveTo(3.75F, 2.0F)
          curveTo(2.784F, 2.0F, 2.0F, 2.784F, 2.0F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(2.0F, 13.216F, 2.784F, 14.0F, 3.75F, 14.0F)
          horizontalLineToRelative(1.5F)
          curveTo(6.216F, 14.0F, 7.0F, 13.216F, 7.0F, 12.25F)
          verticalLineToRelative(-8.5F)
          curveTo(7.0F, 2.784F, 6.216F, 2.0F, 5.25F, 2.0F)
          horizontalLineToRelative(-1.5F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveTo(9.784F, 2.0F, 9.0F, 2.784F, 9.0F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(9.0F, 13.216F, 9.784F, 14.0F, 10.75F, 14.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.5F)
          curveTo(14.0F, 2.784F, 13.216F, 2.0F, 12.25F, 2.0F)
          horizontalLineToRelative(-1.5F)
          close()        
      }
    }
    return _pause16!!
  }

private var _pause16: ImageVector? = null
