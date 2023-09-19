package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonAlert16: ImageVector
  get() {
    if (_personAlert16 != null) {
      return _personAlert16!!
    }
    _personAlert16 = fluentIcon(name = "Filled.PersonAlert16", 16f) {
      materialPath {
          moveTo(11.5F, 8.0F)
          curveTo(12.328F, 8.0F, 13.0F, 8.672F, 13.0F, 9.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.51F, -1.092F, 3.055F, -3.015F, 3.694F)
          curveToRelative(0.064F, -0.47F, -0.088F, -0.973F, -0.52F, -1.339F)
          lineTo(8.5F, 11.537F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -0.729F, -0.195F, -1.412F, -0.535F, -2.0F)
          horizontalLineTo(11.5F)
          close()
          moveTo(6.363F, 6.46F)
          curveToRelative(0.147F, 0.078F, 0.29F, 0.164F, 0.425F, 0.26F)
          curveTo(7.154F, 6.898F, 7.565F, 7.0F, 8.0F, 7.0F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          reflectiveCurveTo(9.519F, 1.5F, 8.0F, 1.5F)
          reflectiveCurveTo(5.25F, 2.731F, 5.25F, 4.25F)
          curveToRelative(0.0F, 0.905F, 0.438F, 1.709F, 1.113F, 2.21F)
          close()
          moveTo(1.497F, 10.0F)
          curveToRelative(0.0F, -1.657F, 1.344F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(2.0F)
          lineToRelative(1.32F, 1.119F)
          curveTo(9.173F, 13.419F, 8.96F, 14.0F, 8.494F, 14.0F)
          horizontalLineTo(0.501F)
          curveToRelative(-0.466F, 0.0F, -0.678F, -0.58F, -0.323F, -0.881F)
          lineTo(1.498F, 12.0F)
          verticalLineToRelative(-2.0F)
          close()
          moveToRelative(3.0F, 6.0F)
          curveToRelative(-0.652F, 0.0F, -1.208F, -0.418F, -1.414F, -1.0F)
          horizontalLineToRelative(2.829F)
          curveToRelative(-0.206F, 0.582F, -0.761F, 1.0F, -1.415F, 1.0F)
          close()        
      }
    }
    return _personAlert16!!
  }

private var _personAlert16: ImageVector? = null
