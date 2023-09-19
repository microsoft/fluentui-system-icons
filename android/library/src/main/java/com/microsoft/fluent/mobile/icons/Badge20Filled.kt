package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Badge20: ImageVector
  get() {
    if (_badge20 != null) {
      return _badge20!!
    }
    _badge20 = fluentIcon(name = "Filled.Badge20", 20f) {
      materialPath {
          moveTo(16.0F, 6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(0.35F, 0.0F, 0.687F, -0.06F, 1.0F, -0.17F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.17F)
          curveTo(13.06F, 3.313F, 13.0F, 3.65F, 13.0F, 4.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          close()        
      }
    }
    return _badge20!!
  }

private var _badge20: ImageVector? = null
