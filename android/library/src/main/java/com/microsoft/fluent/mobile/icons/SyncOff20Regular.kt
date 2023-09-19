package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SyncOff20: ImageVector
  get() {
    if (_syncOff20 != null) {
      return _syncOff20!!
    }
    _syncOff20 = fluentIcon(name = "Regular.SyncOff20", 20f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(8.0F, -7.0F)
          curveTo(6.473F, 3.0F, 3.556F, 5.608F, 3.07F, 9.0F)
          horizontalLineToRelative(5.196F)
          lineToRelative(0.753F, -2.638F)
          curveTo(9.095F, 6.097F, 9.372F, 5.943F, 9.637F, 6.02F)
          curveToRelative(0.266F, 0.076F, 0.42F, 0.353F, 0.344F, 0.618F)
          lineToRelative(-2.0F, 7.0F)
          curveToRelative(-0.076F, 0.266F, -0.353F, 0.42F, -0.618F, 0.343F)
          curveToRelative(-0.266F, -0.075F, -0.42F, -0.352F, -0.344F, -0.618F)
          lineTo(7.98F, 10.0F)
          horizontalLineTo(3.0F)
          curveToRelative(0.0F, 3.866F, 3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          horizontalLineToRelative(-4.98F)
          lineToRelative(-1.04F, 3.637F)
          curveToRelative(-0.075F, 0.266F, -0.352F, 0.42F, -0.617F, 0.343F)
          curveToRelative(-0.266F, -0.075F, -0.42F, -0.352F, -0.344F, -0.618F)
          lineToRelative(2.0F, -7.0F)
          curveToRelative(0.076F, -0.265F, 0.353F, -0.419F, 0.618F, -0.343F)
          curveToRelative(0.266F, 0.076F, 0.42F, 0.353F, 0.344F, 0.618F)
          lineTo(12.306F, 9.0F)
          horizontalLineToRelative(4.623F)
          curveTo(16.444F, 5.608F, 13.527F, 3.0F, 10.0F, 3.0F)
          close()        
      }
    }
    return _syncOff20!!
  }

private var _syncOff20: ImageVector? = null
