package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleOff20: ImageVector
  get() {
    if (_circleOff20 != null) {
      return _circleOff20!!
    }
    _circleOff20 = fluentIcon(name = "Regular.CircleOff20", 20f) {
      materialPath {
          moveTo(4.0F, 4.708F)
          lineTo(2.148F, 2.853F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(15.0F, 15.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.854F, -1.855F)
          curveTo(13.882F, 17.244F, 12.03F, 18.0F, 10.0F, 18.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, -3.582F, -8.0F, -8.0F)
          curveToRelative(0.0F, -2.03F, 0.756F, -3.882F, 2.0F, -5.292F)
          close()
          moveTo(14.585F, 15.29F)
          lineTo(4.709F, 5.416F)
          curveTo(3.644F, 6.644F, 3.0F, 8.247F, 3.0F, 10.0F)
          curveToRelative(0.0F, 3.866F, 3.134F, 7.0F, 7.0F, 7.0F)
          curveToRelative(1.753F, 0.0F, 3.356F, -0.644F, 4.584F, -1.71F)
          close()
          moveTo(17.0F, 10.0F)
          curveToRelative(0.0F, 1.39F, -0.405F, 2.686F, -1.104F, 3.775F)
          lineToRelative(0.722F, 0.721F)
          curveTo(17.49F, 13.215F, 18.0F, 11.667F, 18.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          curveToRelative(-1.667F, 0.0F, -3.215F, 0.51F, -4.496F, 1.382F)
          lineToRelative(0.721F, 0.722F)
          curveTo(7.315F, 3.405F, 8.61F, 3.0F, 10.0F, 3.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, 3.134F, 7.0F, 7.0F)
          close()        
      }
    }
    return _circleOff20!!
  }

private var _circleOff20: ImageVector? = null
