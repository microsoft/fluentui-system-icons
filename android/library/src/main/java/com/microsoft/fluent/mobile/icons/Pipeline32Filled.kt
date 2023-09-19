package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pipeline32: ImageVector
  get() {
    if (_pipeline32 != null) {
      return _pipeline32!!
    }
    _pipeline32 = fluentIcon(name = "Filled.Pipeline32", 32f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(16.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(24.0F, 0.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(16.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(-2.0F, 1.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(14.0F)
          horizontalLineToRelative(16.0F)
          verticalLineTo(9.0F)
          close()        
      }
    }
    return _pipeline32!!
  }

private var _pipeline32: ImageVector? = null
