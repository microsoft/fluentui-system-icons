package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RoadCone24: ImageVector
  get() {
    if (_roadCone24 != null) {
      return _roadCone24!!
    }
    _roadCone24 = fluentIcon(name = "Regular.RoadCone24", 24f) {
      materialPath {
          moveTo(11.184F, 2.0F)
          curveToRelative(-0.566F, 0.0F, -1.062F, 0.38F, -1.208F, 0.928F)
          lineTo(5.29F, 20.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 20.5F, 2.0F, 20.836F, 2.0F, 21.25F)
          reflectiveCurveTo(2.336F, 22.0F, 2.75F, 22.0F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-2.54F)
          lineTo(14.023F, 2.928F)
          curveTo(13.878F, 2.38F, 13.382F, 2.0F, 12.816F, 2.0F)
          horizontalLineToRelative(-1.632F)
          close()
          moveTo(6.843F, 20.5F)
          lineTo(7.776F, 17.0F)
          horizontalLineToRelative(5.974F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.176F)
          lineToRelative(0.534F, -2.0F)
          horizontalLineToRelative(4.04F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.164F, 12.0F, 12.75F, 12.0F)
          horizontalLineTo(9.11F)
          lineToRelative(2.266F, -8.5F)
          horizontalLineToRelative(1.248F)
          lineToRelative(4.533F, 17.0F)
          horizontalLineTo(6.843F)
          close()        
      }
    }
    return _roadCone24!!
  }

private var _roadCone24: ImageVector? = null
