package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SyncOff20: ImageVector
  get() {
    if (_syncOff20 != null) {
      return _syncOff20!!
    }
    _syncOff20 = fluentIcon(name = "Filled.SyncOff20", 20f) {
      materialPath {
          moveTo(17.938F, 9.0F)
          horizontalLineToRelative(-5.632F)
          lineToRelative(0.675F, -2.362F)
          curveToRelative(0.076F, -0.266F, -0.078F, -0.543F, -0.344F, -0.619F)
          curveToRelative(-0.265F, -0.075F, -0.542F, 0.078F, -0.618F, 0.344F)
          lineToRelative(-2.0F, 7.0F)
          curveToRelative(-0.076F, 0.265F, 0.078F, 0.542F, 0.344F, 0.618F)
          curveToRelative(0.265F, 0.076F, 0.542F, -0.078F, 0.618F, -0.344F)
          lineTo(12.02F, 10.0F)
          horizontalLineTo(18.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          horizontalLineToRelative(5.98F)
          lineToRelative(-0.96F, 3.363F)
          curveToRelative(-0.077F, 0.265F, 0.077F, 0.542F, 0.343F, 0.618F)
          curveToRelative(0.265F, 0.076F, 0.542F, -0.078F, 0.618F, -0.344F)
          lineToRelative(2.0F, -7.0F)
          curveToRelative(0.076F, -0.265F, -0.078F, -0.542F, -0.344F, -0.618F)
          curveTo(9.372F, 5.944F, 9.095F, 6.097F, 9.02F, 6.363F)
          lineTo(8.266F, 9.0F)
          horizontalLineTo(2.062F)
          curveTo(2.554F, 5.054F, 5.92F, 2.0F, 10.0F, 2.0F)
          reflectiveCurveToRelative(7.446F, 3.054F, 7.938F, 7.0F)
          close()        
      }
    }
    return _syncOff20!!
  }

private var _syncOff20: ImageVector? = null
