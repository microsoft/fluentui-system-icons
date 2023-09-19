package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RoadCone48: ImageVector
  get() {
    if (_roadCone48 != null) {
      return _roadCone48!!
    }
    _roadCone48 = fluentIcon(name = "Filled.RoadCone48", 48f) {
      materialPath {
          moveTo(22.388F, 4.0F)
          curveToRelative(-1.154F, 0.0F, -2.158F, 0.789F, -2.43F, 1.91F)
          curveToRelative(-1.382F, 5.684F, -3.07F, 11.898F, -4.77F, 18.09F)
          horizontalLineTo(25.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(26.328F, 27.0F, 25.5F, 27.0F)
          horizontalLineTo(14.362F)
          lineToRelative(-1.099F, 4.0F)
          horizontalLineTo(27.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(28.328F, 34.0F, 27.5F, 34.0F)
          horizontalLineTo(12.445F)
          curveToRelative(-0.651F, 2.397F, -1.279F, 4.742F, -1.865F, 7.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 41.0F, 4.0F, 41.672F, 4.0F, 42.5F)
          reflectiveCurveTo(4.672F, 44.0F, 5.5F, 44.0F)
          horizontalLineToRelative(37.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(43.328F, 41.0F, 42.5F, 41.0F)
          horizontalLineToRelative(-5.08F)
          lineTo(28.046F, 5.856F)
          curveTo(27.756F, 4.76F, 26.764F, 4.0F, 25.632F, 4.0F)
          horizontalLineToRelative(-3.244F)
          close()        
      }
    }
    return _roadCone48!!
  }

private var _roadCone48: ImageVector? = null
