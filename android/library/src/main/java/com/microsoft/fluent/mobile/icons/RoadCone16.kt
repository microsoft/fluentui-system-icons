package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RoadCone16: ImageVector
  get() {
    if (_roadCone16 != null) {
      return _roadCone16!!
    }
    _roadCone16 = fluentIcon(name = "Filled.RoadCone16", 16f) {
      materialPath {
          moveTo(7.462F, 1.0F)
          curveToRelative(-0.46F, 0.0F, -0.86F, 0.312F, -0.97F, 0.758F)
          lineTo(5.056F, 7.5F)
          horizontalLineTo(8.5F)
          curveTo(8.776F, 7.5F, 9.0F, 7.724F, 9.0F, 8.0F)
          reflectiveCurveTo(8.776F, 8.5F, 8.5F, 8.5F)
          horizontalLineTo(4.806F)
          lineToRelative(-0.5F, 2.0F)
          horizontalLineTo(9.25F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(4.056F)
          lineTo(3.43F, 14.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 14.0F, 1.0F, 14.224F, 1.0F, 14.5F)
          reflectiveCurveTo(1.224F, 15.0F, 1.5F, 15.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 14.0F, 14.5F, 14.0F)
          horizontalLineToRelative(-1.931F)
          lineTo(9.509F, 1.758F)
          curveTo(9.396F, 1.312F, 8.996F, 1.0F, 8.537F, 1.0F)
          horizontalLineTo(7.462F)
          close()        
      }
    }
    return _roadCone16!!
  }

private var _roadCone16: ImageVector? = null
