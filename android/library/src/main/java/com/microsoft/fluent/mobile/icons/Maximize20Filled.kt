package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Maximize20: ImageVector
  get() {
    if (_maximize20 != null) {
      return _maximize20!!
    }
    _maximize20 = fluentIcon(name = "Filled.Maximize20", 20f) {
      materialPath {
          moveTo(3.0F, 5.25F)
          curveTo(3.0F, 4.007F, 4.007F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(9.5F)
          curveTo(15.993F, 3.0F, 17.0F, 4.007F, 17.0F, 5.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-9.5F)
          curveTo(4.007F, 17.0F, 3.0F, 15.993F, 3.0F, 14.75F)
          verticalLineToRelative(-9.5F)
          close()
          moveTo(5.25F, 4.5F)
          curveTo(4.836F, 4.5F, 4.5F, 4.836F, 4.5F, 5.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _maximize20!!
  }

private var _maximize20: ImageVector? = null
