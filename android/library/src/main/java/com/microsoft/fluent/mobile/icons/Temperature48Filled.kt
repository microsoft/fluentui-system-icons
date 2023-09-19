package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Temperature48: ImageVector
  get() {
    if (_temperature48 != null) {
      return _temperature48!!
    }
    _temperature48 = fluentIcon(name = "Filled.Temperature48", 48f) {
      materialPath {
          moveTo(24.0F, 9.0F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(15.207F)
          lineToRelative(-0.484F, 0.445F)
          curveToRelative(-1.241F, 1.144F, -2.016F, 2.78F, -2.016F, 4.598F)
          curveToRelative(0.0F, 3.452F, 2.798F, 6.25F, 6.25F, 6.25F)
          reflectiveCurveToRelative(6.25F, -2.798F, 6.25F, -6.25F)
          curveToRelative(0.0F, -1.818F, -0.775F, -3.454F, -2.016F, -4.598F)
          lineToRelative(-0.484F, -0.445F)
          verticalLineTo(12.75F)
          curveTo(27.75F, 10.679F, 26.071F, 9.0F, 24.0F, 9.0F)
          close()
          moveToRelative(-6.75F, 3.75F)
          curveTo(17.25F, 9.022F, 20.272F, 6.0F, 24.0F, 6.0F)
          reflectiveCurveToRelative(6.75F, 3.022F, 6.75F, 6.75F)
          verticalLineToRelative(13.925F)
          curveToRelative(1.549F, 1.653F, 2.5F, 3.879F, 2.5F, 6.325F)
          curveToRelative(0.0F, 5.109F, -4.141F, 9.25F, -9.25F, 9.25F)
          reflectiveCurveToRelative(-9.25F, -4.141F, -9.25F, -9.25F)
          curveToRelative(0.0F, -2.446F, 0.951F, -4.672F, 2.5F, -6.325F)
          verticalLineTo(12.75F)
          close()
          moveTo(28.0F, 33.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          curveToRelative(0.0F, -1.679F, 1.034F, -3.116F, 2.5F, -3.71F)
          verticalLineTo(18.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(10.79F)
          curveTo(26.966F, 29.885F, 28.0F, 31.322F, 28.0F, 33.0F)
          close()        
      }
    }
    return _temperature48!!
  }

private var _temperature48: ImageVector? = null
