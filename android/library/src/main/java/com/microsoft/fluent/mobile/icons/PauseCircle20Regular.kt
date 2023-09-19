package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PauseCircle20: ImageVector
  get() {
    if (_pauseCircle20 != null) {
      return _pauseCircle20!!
    }
    _pauseCircle20 = fluentIcon(name = "Regular.PauseCircle20", 20f) {
      materialPath {
          moveTo(9.0F, 7.5F)
          curveTo(9.0F, 7.224F, 8.776F, 7.0F, 8.5F, 7.0F)
          reflectiveCurveTo(8.0F, 7.224F, 8.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveTo(8.0F, 12.776F, 8.224F, 13.0F, 8.5F, 13.0F)
          reflectiveCurveTo(9.0F, 12.776F, 9.0F, 12.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          curveTo(12.0F, 7.224F, 11.776F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(11.0F, 7.224F, 11.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveToRelative(-7.0F, 8.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()        
      }
    }
    return _pauseCircle20!!
  }

private var _pauseCircle20: ImageVector? = null
