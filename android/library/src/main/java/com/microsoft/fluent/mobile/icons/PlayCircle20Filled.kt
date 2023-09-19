package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PlayCircle20: ImageVector
  get() {
    if (_playCircle20 != null) {
      return _playCircle20!!
    }
    _playCircle20 = fluentIcon(name = "Filled.PlayCircle20", 20f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(6.0F, -2.167F)
          verticalLineToRelative(4.334F)
          curveToRelative(0.0F, 0.577F, 0.625F, 0.938F, 1.125F, 0.65F)
          lineToRelative(4.125F, -2.384F)
          curveToRelative(0.155F, -0.09F, 0.25F, -0.255F, 0.25F, -0.433F)
          curveToRelative(0.0F, -0.179F, -0.095F, -0.344F, -0.25F, -0.433F)
          lineTo(9.125F, 7.184F)
          curveTo(8.625F, 6.894F, 8.0F, 7.256F, 8.0F, 7.834F)
          close()        
      }
    }
    return _playCircle20!!
  }

private var _playCircle20: ImageVector? = null
