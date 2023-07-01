package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RoadCone28: ImageVector
  get() {
    if (_roadCone28 != null) {
      return _roadCone28!!
    }
    _roadCone28 = fluentIcon(name = "Regular.RoadCone28", 28f) {
      materialPath {
          moveTo(12.981F, 2.0F)
          curveToRelative(-0.563F, 0.0F, -1.057F, 0.377F, -1.206F, 0.92F)
          lineTo(5.86F, 24.5F)
          horizontalLineTo(3.083F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(2.669F, 26.0F, 3.083F, 26.0F)
          horizontalLineToRelative(21.833F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.335F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(22.14F)
          lineTo(16.224F, 2.92F)
          curveTo(16.074F, 2.376F, 15.58F, 2.0F, 15.018F, 2.0F)
          horizontalLineToRelative(-2.037F)
          close()
          moveTo(7.483F, 24.25F)
          lineToRelative(1.234F, -4.5F)
          horizontalLineToRelative(7.533F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(9.128F)
          lineToRelative(0.685F, -2.5F)
          horizontalLineToRelative(5.437F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-5.025F)
          lineTo(13.172F, 3.5F)
          horizontalLineToRelative(1.656F)
          lineToRelative(5.688F, 20.75F)
          horizontalLineTo(7.483F)
          close()        
      }
    }
    return _roadCone28!!
  }

private var _roadCone28: ImageVector? = null
