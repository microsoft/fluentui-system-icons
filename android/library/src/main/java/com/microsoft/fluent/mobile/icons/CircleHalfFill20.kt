package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleHalfFill20: ImageVector
  get() {
    if (_circleHalfFill20 != null) {
      return _circleHalfFill20!!
    }
    _circleHalfFill20 = fluentIcon(name = "Regular.CircleHalfFill20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(3.698F, 0.0F, 6.726F, 2.867F, 6.982F, 6.5F)
          horizontalLineTo(3.018F)
          curveTo(3.274F, 5.867F, 6.302F, 3.0F, 10.0F, 3.0F)
          close()        
      }
    }
    return _circleHalfFill20!!
  }

private var _circleHalfFill20: ImageVector? = null
