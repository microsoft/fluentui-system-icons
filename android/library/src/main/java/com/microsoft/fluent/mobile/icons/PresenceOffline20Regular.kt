package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOffline20: ImageVector
  get() {
    if (_presenceOffline20 != null) {
      return _presenceOffline20!!
    }
    _presenceOffline20 = fluentIcon(name = "Regular.PresenceOffline20", 20f) {
      materialPath {
          moveTo(13.707F, 6.293F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(11.414F, 10.0F)
          lineToRelative(2.293F, 2.293F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineTo(10.0F, 11.414F)
          lineToRelative(-2.293F, 2.293F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(8.586F, 10.0F)
          lineTo(6.293F, 7.707F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(10.0F, 8.586F)
          lineToRelative(2.293F, -2.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          close()
          moveTo(0.0F, 10.0F)
          curveTo(0.0F, 4.477F, 4.477F, 0.0F, 10.0F, 0.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(0.0F, 15.523F, 0.0F, 10.0F)
          close()
          moveToRelative(10.0F, -8.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()        
      }
    }
    return _presenceOffline20!!
  }

private var _presenceOffline20: ImageVector? = null
