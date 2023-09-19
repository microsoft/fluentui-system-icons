package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flow32: ImageVector
  get() {
    if (_flow32 != null) {
      return _flow32!!
    }
    _flow32 = fluentIcon(name = "Regular.Flow32", 32f) {
      materialPath {
          moveTo(24.5F, 6.0F)
          curveTo(26.433F, 6.0F, 28.0F, 7.567F, 28.0F, 9.5F)
          reflectiveCurveTo(26.433F, 13.0F, 24.5F, 13.0F)
          reflectiveCurveTo(21.0F, 11.433F, 21.0F, 9.5F)
          reflectiveCurveTo(22.567F, 6.0F, 24.5F, 6.0F)
          close()
          moveToRelative(-5.41F, 4.5F)
          curveToRelative(0.47F, 2.56F, 2.714F, 4.5F, 5.41F, 4.5F)
          curveToRelative(3.038F, 0.0F, 5.5F, -2.462F, 5.5F, -5.5F)
          reflectiveCurveTo(27.538F, 4.0F, 24.5F, 4.0F)
          curveToRelative(-2.696F, 0.0F, -4.94F, 1.94F, -5.41F, 4.5F)
          horizontalLineTo(19.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-0.09F)
          curveTo(12.44F, 18.94F, 10.195F, 17.0F, 7.5F, 17.0F)
          curveTo(4.462F, 17.0F, 2.0F, 19.462F, 2.0F, 22.5F)
          reflectiveCurveTo(4.462F, 28.0F, 7.5F, 28.0F)
          curveToRelative(2.696F, 0.0F, 4.94F, -1.94F, 5.41F, -4.5F)
          horizontalLineTo(13.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(0.09F)
          close()
          moveTo(11.0F, 22.5F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(4.0F, 24.433F, 4.0F, 22.5F)
          reflectiveCurveTo(5.567F, 19.0F, 7.5F, 19.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          close()        
      }
    }
    return _flow32!!
  }

private var _flow32: ImageVector? = null
