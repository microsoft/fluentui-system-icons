package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RoadCone48: ImageVector
  get() {
    if (_roadCone48 != null) {
      return _roadCone48!!
    }
    _roadCone48 = fluentIcon(name = "Regular.RoadCone48", 48f) {
      materialPath {
          moveTo(22.368F, 4.0F)
          curveToRelative(-1.132F, 0.0F, -2.123F, 0.761F, -2.415F, 1.856F)
          lineTo(10.58F, 41.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 41.0F, 4.0F, 41.672F, 4.0F, 42.5F)
          reflectiveCurveTo(4.672F, 44.0F, 5.5F, 44.0F)
          horizontalLineToRelative(37.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(43.328F, 41.0F, 42.5F, 41.0F)
          horizontalLineToRelative(-5.08F)
          lineTo(28.046F, 5.856F)
          curveTo(27.756F, 4.76F, 26.764F, 4.0F, 25.632F, 4.0F)
          horizontalLineToRelative(-3.264F)
          close()
          moveToRelative(-8.682F, 37.0F)
          lineToRelative(1.866F, -7.0F)
          horizontalLineTo(27.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(28.328F, 31.0F, 27.5F, 31.0F)
          horizontalLineTo(16.352F)
          lineToRelative(1.067F, -4.0F)
          horizontalLineTo(25.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(26.328F, 24.0F, 25.5F, 24.0F)
          horizontalLineToRelative(-7.28F)
          lineToRelative(4.532F, -17.0F)
          horizontalLineToRelative(2.496F)
          lineToRelative(9.066F, 34.0F)
          horizontalLineTo(13.686F)
          close()        
      }
    }
    return _roadCone48!!
  }

private var _roadCone48: ImageVector? = null
