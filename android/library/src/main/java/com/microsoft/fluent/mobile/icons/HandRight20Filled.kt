package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HandRight20: ImageVector
  get() {
    if (_handRight20 != null) {
      return _handRight20!!
    }
    _handRight20 = fluentIcon(name = "Filled.HandRight20", 20f) {
      materialPath {
          moveTo(9.0F, 8.5F)
          verticalLineTo(2.75F)
          curveTo(9.0F, 2.336F, 9.336F, 2.0F, 9.75F, 2.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(8.5F)
          curveTo(10.5F, 8.776F, 10.724F, 9.0F, 11.0F, 9.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(3.75F)
          curveTo(11.5F, 3.336F, 11.836F, 3.0F, 12.25F, 3.0F)
          reflectiveCurveTo(13.0F, 3.336F, 13.0F, 3.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.662F, -0.426F, 1.392F, -0.75F, 2.0F, -0.75F)
          curveToRelative(0.971F, 0.0F, 1.787F, 0.324F, 1.984F, 1.116F)
          curveTo(16.996F, 10.663F, 17.0F, 10.712F, 17.0F, 10.76F)
          curveToRelative(0.0F, 0.15F, -0.07F, 0.292F, -0.191F, 0.382F)
          lineToRelative(-1.313F, 0.985F)
          curveToRelative(-1.062F, 0.796F, -2.063F, 1.865F, -2.76F, 2.988F)
          curveToRelative(-0.378F, 0.608F, -0.719F, 1.237F, -1.054F, 1.868F)
          curveTo(11.322F, 17.661F, 11.094F, 18.0F, 10.0F, 18.0F)
          horizontalLineTo(6.955F)
          curveTo(6.0F, 18.0F, 5.636F, 17.467F, 5.0F, 16.0F)
          reflectiveCurveToRelative(-1.0F, -2.944F, -1.0F, -3.5F)
          verticalLineTo(5.25F)
          curveTo(4.0F, 4.836F, 4.336F, 4.5F, 4.75F, 4.5F)
          reflectiveCurveTo(5.5F, 4.836F, 5.5F, 5.25F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(6.5F, 9.276F, 6.5F, 9.0F)
          verticalLineTo(3.75F)
          curveTo(6.5F, 3.336F, 6.836F, 3.0F, 7.25F, 3.0F)
          reflectiveCurveTo(8.0F, 3.336F, 8.0F, 3.75F)
          verticalLineTo(8.5F)
          curveTo(8.0F, 8.776F, 8.224F, 9.0F, 8.5F, 9.0F)
          reflectiveCurveTo(9.0F, 8.776F, 9.0F, 8.5F)
          close()        
      }
    }
    return _handRight20!!
  }

private var _handRight20: ImageVector? = null
