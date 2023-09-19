package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PollHorizontal16: ImageVector
  get() {
    if (_pollHorizontal16 != null) {
      return _pollHorizontal16!!
    }
    _pollHorizontal16 = fluentIcon(name = "Filled.PollHorizontal16", 16f) {
      materialPath {
          moveTo(13.0F, 6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(10.0F)
          close()
          moveTo(7.0F, 1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveTo(8.105F, 5.0F, 7.0F, 5.0F)
          horizontalLineTo(3.0F)
          curveTo(1.895F, 5.0F, 1.0F, 4.105F, 1.0F, 3.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(2.0F, 10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          close()        
      }
    }
    return _pollHorizontal16!!
  }

private var _pollHorizontal16: ImageVector? = null
