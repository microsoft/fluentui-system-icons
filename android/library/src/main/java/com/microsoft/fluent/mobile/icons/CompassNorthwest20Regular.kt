package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CompassNorthwest20: ImageVector
  get() {
    if (_compassNorthwest20 != null) {
      return _compassNorthwest20!!
    }
    _compassNorthwest20 = fluentIcon(name = "Regular.CompassNorthwest20", 20f) {
      materialPath {
          moveTo(3.0F, 10.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()
          moveToRelative(7.0F, -8.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveTo(6.096F, 7.42F)
          curveTo(5.715F, 6.58F, 6.58F, 5.715F, 7.421F, 6.097F)
          lineToRelative(3.262F, 1.483F)
          curveToRelative(0.77F, 0.35F, 1.387F, 0.968F, 1.738F, 1.738F)
          lineToRelative(1.482F, 3.262F)
          curveToRelative(0.383F, 0.841F, -0.483F, 1.707F, -1.324F, 1.324F)
          lineToRelative(-3.262F, -1.482F)
          curveToRelative(-0.77F, -0.35F, -1.388F, -0.968F, -1.738F, -1.738F)
          lineTo(6.097F, 7.42F)
          close()
          moveToRelative(4.173F, 1.07F)
          lineTo(7.007F, 7.007F)
          lineToRelative(1.483F, 3.262F)
          curveToRelative(0.25F, 0.55F, 0.69F, 0.991F, 1.241F, 1.241F)
          lineToRelative(3.262F, 1.483F)
          lineToRelative(-1.483F, -3.262F)
          curveToRelative(-0.25F, -0.55F, -0.69F, -0.991F, -1.241F, -1.241F)
          close()        
      }
    }
    return _compassNorthwest20!!
  }

private var _compassNorthwest20: ImageVector? = null
