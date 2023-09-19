package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Archive32: ImageVector
  get() {
    if (_archive32 != null) {
      return _archive32!!
    }
    _archive32 = fluentIcon(name = "Filled.Archive32", 32f) {
      materialPath {
          moveTo(3.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(22.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.0F)
          curveTo(3.895F, 9.0F, 3.0F, 8.105F, 3.0F, 7.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(1.0F, 6.0F)
          horizontalLineToRelative(24.0F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 3.038F, -2.462F, 5.5F, -5.5F, 5.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(6.462F, 29.0F, 4.0F, 26.538F, 4.0F, 23.5F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(9.0F, 3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-6.0F)
          close()        
      }
    }
    return _archive32!!
  }

private var _archive32: ImageVector? = null
