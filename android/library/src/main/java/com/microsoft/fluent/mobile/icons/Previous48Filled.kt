package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Previous48: ImageVector
  get() {
    if (_previous48 != null) {
      return _previous48!!
    }
    _previous48 = fluentIcon(name = "Filled.Previous48", 48f) {
      materialPath {
          moveTo(7.25F, 6.0F)
          curveTo(7.94F, 6.0F, 8.5F, 6.56F, 8.5F, 7.25F)
          verticalLineToRelative(33.5F)
          curveTo(8.5F, 41.44F, 7.94F, 42.0F, 7.25F, 42.0F)
          reflectiveCurveTo(6.0F, 41.44F, 6.0F, 40.75F)
          verticalLineTo(7.25F)
          curveTo(6.0F, 6.56F, 6.56F, 6.0F, 7.25F, 6.0F)
          close()
          moveTo(42.0F, 9.256F)
          curveToRelative(0.0F, -2.615F, -2.93F, -4.16F, -5.088F, -2.68F)
          lineTo(15.408F, 21.318F)
          curveToRelative(-1.883F, 1.29F, -1.883F, 4.07F, 0.0F, 5.36F)
          lineToRelative(21.504F, 14.744F)
          curveTo(39.07F, 42.9F, 42.0F, 41.357F, 42.0F, 38.743F)
          verticalLineTo(9.255F)
          close()        
      }
    }
    return _previous48!!
  }

private var _previous48: ImageVector? = null
