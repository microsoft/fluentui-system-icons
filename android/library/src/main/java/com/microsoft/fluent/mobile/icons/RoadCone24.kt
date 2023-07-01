package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RoadCone24: ImageVector
  get() {
    if (_roadCone24 != null) {
      return _roadCone24!!
    }
    _roadCone24 = fluentIcon(name = "Filled.RoadCone24", 24f) {
      materialPath {
          moveTo(11.194F, 2.0F)
          curveToRelative(-0.577F, 0.0F, -1.079F, 0.394F, -1.215F, 0.955F)
          curveTo(9.288F, 5.797F, 8.444F, 8.905F, 7.594F, 12.0F)
          horizontalLineToRelative(5.156F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(7.181F)
          lineToRelative(-0.55F, 2.0F)
          horizontalLineToRelative(7.119F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(14.164F, 17.0F, 13.75F, 17.0F)
          horizontalLineTo(6.222F)
          curveToRelative(-0.325F, 1.198F, -0.639F, 2.37F, -0.932F, 3.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 20.5F, 2.0F, 20.836F, 2.0F, 21.25F)
          reflectiveCurveTo(2.336F, 22.0F, 2.75F, 22.0F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-2.54F)
          lineTo(14.023F, 2.928F)
          curveTo(13.878F, 2.38F, 13.382F, 2.0F, 12.816F, 2.0F)
          horizontalLineToRelative(-1.622F)
          close()        
      }
    }
    return _roadCone24!!
  }

private var _roadCone24: ImageVector? = null
