package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RoadCone20: ImageVector
  get() {
    if (_roadCone20 != null) {
      return _roadCone20!!
    }
    _roadCone20 = fluentIcon(name = "Regular.RoadCone20", 20f) {
      materialPath {
          moveTo(9.384F, 2.0F)
          curveToRelative(-0.453F, 0.0F, -0.85F, 0.305F, -0.966F, 0.742F)
          lineTo(4.616F, 17.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 17.0F, 2.0F, 17.224F, 2.0F, 17.5F)
          reflectiveCurveTo(2.224F, 18.0F, 2.5F, 18.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 17.0F, 17.5F, 17.0F)
          horizontalLineToRelative(-2.116F)
          lineTo(11.582F, 2.742F)
          curveTo(11.465F, 2.305F, 11.07F, 2.0F, 10.616F, 2.0F)
          horizontalLineTo(9.384F)
          close()
          moveTo(5.651F, 17.0F)
          lineToRelative(0.8F, -3.0F)
          horizontalLineTo(11.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 13.0F, 11.5F, 13.0F)
          horizontalLineTo(6.718F)
          lineToRelative(0.533F, -2.0F)
          horizontalLineTo(10.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.776F, 10.0F, 10.5F, 10.0F)
          horizontalLineTo(7.518F)
          lineToRelative(1.866F, -7.0F)
          horizontalLineToRelative(1.232F)
          lineToRelative(3.733F, 14.0F)
          horizontalLineTo(5.651F)
          close()        
      }
    }
    return _roadCone20!!
  }

private var _roadCone20: ImageVector? = null
