package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RoadCone20: ImageVector
  get() {
    if (_roadCone20 != null) {
      return _roadCone20!!
    }
    _roadCone20 = fluentIcon(name = "Filled.RoadCone20", 20f) {
      materialPath {
          moveTo(8.422F, 2.764F)
          curveTo(8.53F, 2.316F, 8.932F, 2.0F, 9.394F, 2.0F)
          horizontalLineToRelative(1.222F)
          curveToRelative(0.453F, 0.0F, 0.85F, 0.305F, 0.966F, 0.742F)
          lineTo(15.384F, 17.0F)
          horizontalLineTo(17.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 18.0F, 17.5F, 18.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 18.0F, 2.0F, 17.776F, 2.0F, 17.5F)
          reflectiveCurveTo(2.224F, 17.0F, 2.5F, 17.0F)
          horizontalLineToRelative(2.114F)
          curveToRelative(0.253F, -0.969F, 0.523F, -1.974F, 0.803F, -3.0F)
          horizontalLineTo(11.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 13.0F, 11.5F, 13.0F)
          horizontalLineTo(5.69F)
          lineToRelative(0.448F, -1.63F)
          lineTo(6.24F, 11.0F)
          horizontalLineToRelative(4.26F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.776F, 10.0F, 10.5F, 10.0F)
          horizontalLineTo(6.515F)
          curveToRelative(0.68F, -2.478F, 1.352F, -4.959F, 1.907F, -7.236F)
          close()        
      }
    }
    return _roadCone20!!
  }

private var _roadCone20: ImageVector? = null
