package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleHalfFill20: ImageVector
  get() {
    if (_circleHalfFill20 != null) {
      return _circleHalfFill20!!
    }
    _circleHalfFill20 = fluentIcon(name = "Filled.CircleHalfFill20", 20f) {
      materialPath {
          moveTo(3.543F, 9.25F)
          horizontalLineToRelative(12.914F)
          curveTo(16.085F, 6.013F, 13.337F, 3.5F, 10.0F, 3.5F)
          curveToRelative(-3.336F, 0.0F, -6.085F, 2.513F, -6.457F, 5.75F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()        
      }
    }
    return _circleHalfFill20!!
  }

private var _circleHalfFill20: ImageVector? = null
