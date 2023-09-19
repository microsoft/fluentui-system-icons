package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleOff20: ImageVector
  get() {
    if (_circleOff20 != null) {
      return _circleOff20!!
    }
    _circleOff20 = fluentIcon(name = "Filled.CircleOff20", 20f) {
      materialPath {
          moveTo(15.292F, 16.0F)
          lineToRelative(1.854F, 1.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.855F, 1.854F)
          curveTo(2.755F, 6.118F, 2.0F, 7.97F, 2.0F, 10.0F)
          curveToRelative(0.0F, 4.418F, 3.582F, 8.0F, 8.0F, 8.0F)
          curveToRelative(2.03F, 0.0F, 3.882F, -0.756F, 5.292F, -2.0F)
          close()
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, 1.667F, -0.51F, 3.215F, -1.382F, 4.496F)
          lineTo(5.504F, 3.382F)
          curveTo(6.785F, 2.51F, 8.333F, 2.0F, 10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          close()        
      }
    }
    return _circleOff20!!
  }

private var _circleOff20: ImageVector? = null
