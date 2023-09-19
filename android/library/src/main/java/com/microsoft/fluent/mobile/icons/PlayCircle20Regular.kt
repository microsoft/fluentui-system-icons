package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PlayCircle20: ImageVector
  get() {
    if (_playCircle20 != null) {
      return _playCircle20!!
    }
    _playCircle20 = fluentIcon(name = "Regular.PlayCircle20", 20f) {
      materialPath {
          moveTo(9.125F, 7.184F)
          curveTo(8.625F, 6.894F, 8.0F, 7.256F, 8.0F, 7.834F)
          verticalLineToRelative(4.333F)
          curveToRelative(0.0F, 0.577F, 0.625F, 0.938F, 1.125F, 0.65F)
          lineToRelative(4.125F, -2.384F)
          curveToRelative(0.155F, -0.09F, 0.25F, -0.255F, 0.25F, -0.433F)
          curveToRelative(0.0F, -0.179F, -0.095F, -0.344F, -0.25F, -0.433F)
          lineTo(9.125F, 7.184F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(8.0F, -7.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()        
      }
    }
    return _playCircle20!!
  }

private var _playCircle20: ImageVector? = null
