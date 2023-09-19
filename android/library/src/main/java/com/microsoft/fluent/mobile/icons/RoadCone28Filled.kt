package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RoadCone28: ImageVector
  get() {
    if (_roadCone28 != null) {
      return _roadCone28!!
    }
    _roadCone28 = fluentIcon(name = "Filled.RoadCone28", 28f) {
      materialPath {
          moveTo(12.982F, 2.0F)
          curveToRelative(-0.563F, 0.0F, -1.057F, 0.377F, -1.206F, 0.92F)
          lineTo(8.67F, 14.25F)
          horizontalLineToRelative(6.58F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(8.259F)
          lineToRelative(-0.686F, 2.5F)
          horizontalLineToRelative(8.677F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(7.162F)
          lineTo(5.86F, 24.5F)
          horizontalLineTo(3.083F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(2.669F, 26.0F, 3.083F, 26.0F)
          horizontalLineToRelative(21.833F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.335F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-2.775F)
          lineTo(16.225F, 2.92F)
          curveTo(16.075F, 2.376F, 15.581F, 2.0F, 15.018F, 2.0F)
          horizontalLineToRelative(-2.037F)
          close()        
      }
    }
    return _roadCone28!!
  }

private var _roadCone28: ImageVector? = null
