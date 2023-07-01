package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NavigationPlay20: ImageVector
  get() {
    if (_navigationPlay20 != null) {
      return _navigationPlay20!!
    }
    _navigationPlay20 = fluentIcon(name = "Filled.NavigationPlay20", 20f) {
      materialPath {
          moveTo(2.75F, 5.0F)
          curveTo(2.336F, 5.0F, 2.0F, 5.336F, 2.0F, 5.75F)
          reflectiveCurveTo(2.336F, 6.5F, 2.75F, 6.5F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 6.5F, 18.0F, 6.164F, 18.0F, 5.75F)
          reflectiveCurveTo(17.664F, 5.0F, 17.25F, 5.0F)
          horizontalLineTo(2.75F)
          close()
          moveTo(2.0F, 10.75F)
          curveTo(2.0F, 10.336F, 2.336F, 10.0F, 2.75F, 10.0F)
          horizontalLineToRelative(9.587F)
          curveToRelative(-0.572F, 0.403F, -1.065F, 0.913F, -1.447F, 1.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 11.5F, 2.0F, 11.164F, 2.0F, 10.75F)
          close()
          moveTo(2.75F, 15.0F)
          horizontalLineToRelative(7.272F)
          curveToRelative(0.048F, 0.525F, 0.169F, 1.028F, 0.353F, 1.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 16.5F, 2.0F, 16.164F, 2.0F, 15.75F)
          reflectiveCurveTo(2.336F, 15.0F, 2.75F, 15.0F)
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
