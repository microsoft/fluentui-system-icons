package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SubtractCircle20: ImageVector
  get() {
    if (_subtractCircle20 != null) {
      return _subtractCircle20!!
    }
    _subtractCircle20 = fluentIcon(name = "Filled.SubtractCircle20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()
          moveTo(6.0F, 10.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 9.5F, 6.0F, 9.724F, 6.0F, 10.0F)
          close()        
      }
    }
    return _subtractCircle20!!
  }

private var _subtractCircle20: ImageVector? = null
