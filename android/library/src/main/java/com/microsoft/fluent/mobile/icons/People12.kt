package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.People12: ImageVector
  get() {
    if (_people12 != null) {
      return _people12!!
    }
    _people12 = fluentIcon(name = "Filled.People12", 12f) {
      materialPath {
          moveTo(4.0F, 6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveTo(5.105F, 2.0F, 4.0F, 2.0F)
          reflectiveCurveTo(2.0F, 2.895F, 2.0F, 4.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(4.5F, 0.0F)
          curveTo(9.328F, 6.0F, 10.0F, 5.328F, 10.0F, 4.5F)
          reflectiveCurveTo(9.328F, 3.0F, 8.5F, 3.0F)
          reflectiveCurveTo(7.0F, 3.672F, 7.0F, 4.5F)
          reflectiveCurveTo(7.672F, 6.0F, 8.5F, 6.0F)
          close()
          moveTo(2.25F, 7.0F)
          curveTo(1.56F, 7.0F, 1.0F, 7.56F, 1.0F, 8.25F)
          curveToRelative(0.0F, 0.0F, 0.0F, 2.25F, 3.0F, 2.25F)
          curveToRelative(2.378F, 0.0F, 2.871F, -1.414F, 2.973F, -2.0F)
          curveTo(7.0F, 8.347F, 7.0F, 8.25F, 7.0F, 8.25F)
          curveTo(7.0F, 7.56F, 6.44F, 7.0F, 5.75F, 7.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveToRelative(5.746F, 1.6F)
          curveTo(7.994F, 8.64F, 7.99F, 8.688F, 7.984F, 8.742F)
          curveTo(7.97F, 8.849F, 7.948F, 8.983F, 7.905F, 9.136F)
          curveTo(7.843F, 9.359F, 7.74F, 9.626F, 7.565F, 9.9F)
          curveTo(7.828F, 9.964F, 8.137F, 10.0F, 8.498F, 10.0F)
          curveToRelative(2.5F, 0.0F, 2.5F, -1.75F, 2.5F, -1.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(7.62F)
          curveTo(7.86F, 7.357F, 8.0F, 7.787F, 8.0F, 8.25F)
          verticalLineTo(8.5F)
          lineTo(7.996F, 8.6F)
          close()        
      }
    }
    return _people12!!
  }

private var _people12: ImageVector? = null
