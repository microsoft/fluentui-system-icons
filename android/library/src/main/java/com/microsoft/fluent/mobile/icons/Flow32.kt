package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flow32: ImageVector
  get() {
    if (_flow32 != null) {
      return _flow32!!
    }
    _flow32 = fluentIcon(name = "Filled.Flow32", 32f) {
      materialPath {
          moveTo(19.09F, 10.5F)
          horizontalLineTo(19.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineToRelative(-0.09F)
          curveTo(12.44F, 26.06F, 10.195F, 28.0F, 7.5F, 28.0F)
          curveTo(4.462F, 28.0F, 2.0F, 25.538F, 2.0F, 22.5F)
          reflectiveCurveTo(4.462F, 17.0F, 7.5F, 17.0F)
          curveToRelative(2.696F, 0.0F, 4.94F, 1.94F, 5.41F, 4.5F)
          horizontalLineTo(13.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(0.09F)
          curveTo(19.56F, 5.94F, 21.805F, 4.0F, 24.5F, 4.0F)
          curveTo(27.538F, 4.0F, 30.0F, 6.462F, 30.0F, 9.5F)
          reflectiveCurveTo(27.538F, 15.0F, 24.5F, 15.0F)
          curveToRelative(-2.696F, 0.0F, -4.94F, -1.94F, -5.41F, -4.5F)
          close()        
      }
    }
    return _flow32!!
  }

private var _flow32: ImageVector? = null
