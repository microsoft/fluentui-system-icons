package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RoadCone16: ImageVector
  get() {
    if (_roadCone16 != null) {
      return _roadCone16!!
    }
    _roadCone16 = fluentIcon(name = "Regular.RoadCone16", 16f) {
      materialPath {
          moveTo(7.462F, 1.0F)
          curveToRelative(-0.459F, 0.0F, -0.859F, 0.312F, -0.97F, 0.758F)
          lineTo(3.432F, 14.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 14.0F, 1.0F, 14.224F, 1.0F, 14.5F)
          reflectiveCurveTo(1.224F, 15.0F, 1.5F, 15.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 14.0F, 14.5F, 14.0F)
          horizontalLineToRelative(-1.931F)
          lineTo(9.509F, 1.758F)
          curveTo(9.396F, 1.312F, 8.996F, 1.0F, 8.538F, 1.0F)
          horizontalLineTo(7.461F)
          close()
          moveToRelative(4.076F, 13.0F)
          horizontalLineTo(4.462F)
          lineToRelative(0.625F, -2.5F)
          horizontalLineTo(9.25F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(5.337F)
          lineToRelative(0.5F, -2.0F)
          horizontalLineTo(8.5F)
          curveTo(8.776F, 8.5F, 9.0F, 8.276F, 9.0F, 8.0F)
          reflectiveCurveTo(8.776F, 7.5F, 8.5F, 7.5F)
          horizontalLineTo(6.087F)
          lineTo(7.462F, 2.0F)
          horizontalLineToRelative(1.076F)
          lineToRelative(3.0F, 12.0F)
          close()        
      }
    }
    return _roadCone16!!
  }

private var _roadCone16: ImageVector? = null
