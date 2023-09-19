package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.NavigationPlay20: ImageVector
  get() {
    if (_navigationPlay20 != null) {
      return _navigationPlay20!!
    }
    _navigationPlay20 = fluentIcon(name = "Regular.NavigationPlay20", 20f) {
      materialPath {
          moveTo(2.5F, 5.0F)
          curveTo(2.224F, 5.0F, 2.0F, 5.224F, 2.0F, 5.5F)
          reflectiveCurveTo(2.224F, 6.0F, 2.5F, 6.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 6.0F, 18.0F, 5.776F, 18.0F, 5.5F)
          reflectiveCurveTo(17.776F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(2.224F, 10.0F, 2.0F, 10.224F, 2.0F, 10.5F)
          reflectiveCurveTo(2.224F, 11.0F, 2.5F, 11.0F)
          horizontalLineToRelative(8.757F)
          curveToRelative(0.313F, -0.38F, 0.677F, -0.716F, 1.08F, -1.0F)
          horizontalLineTo(2.5F)
          close()
          moveToRelative(7.707F, 6.0F)
          curveToRelative(-0.091F, -0.322F, -0.154F, -0.657F, -0.185F, -1.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 15.0F, 2.0F, 15.224F, 2.0F, 15.5F)
          reflectiveCurveTo(2.224F, 16.0F, 2.5F, 16.0F)
          horizontalLineToRelative(7.707F)
          close()
          moveTo(20.0F, 14.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(11.0F, 16.985F, 11.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-2.287F, -0.437F)
          lineToRelative(-2.97F, -1.65F)
          curveTo(14.41F, 12.227F, 14.0F, 12.469F, 14.0F, 12.85F)
          verticalLineToRelative(3.3F)
          curveToRelative(0.0F, 0.382F, 0.41F, 0.623F, 0.743F, 0.437F)
          lineToRelative(2.97F, -1.65F)
          curveToRelative(0.343F, -0.19F, 0.343F, -0.684F, 0.0F, -0.874F)
          close()        
      }
    }
    return _navigationPlay20!!
  }

private var _navigationPlay20: ImageVector? = null
