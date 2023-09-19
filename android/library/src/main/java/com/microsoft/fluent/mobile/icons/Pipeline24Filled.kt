package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pipeline24: ImageVector
  get() {
    if (_pipeline24 != null) {
      return _pipeline24!!
    }
    _pipeline24 = fluentIcon(name = "Filled.Pipeline24", 24f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(16.0F, 0.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(-1.5F, 0.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(9.0F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _pipeline24!!
  }

private var _pipeline24: ImageVector? = null
