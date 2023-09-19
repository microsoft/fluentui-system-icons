package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SubtractCircle20: ImageVector
  get() {
    if (_subtractCircle20 != null) {
      return _subtractCircle20!!
    }
    _subtractCircle20 = fluentIcon(name = "Regular.SubtractCircle20", 20f) {
      materialPath {
          moveTo(6.0F, 10.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 10.5F, 6.0F, 10.276F, 6.0F, 10.0F)
          close()
          moveToRelative(4.0F, 8.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          close()        
      }
    }
    return _subtractCircle20!!
  }

private var _subtractCircle20: ImageVector? = null
