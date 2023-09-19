package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WindowPlay20: ImageVector
  get() {
    if (_windowPlay20 != null) {
      return _windowPlay20!!
    }
    _windowPlay20 = fluentIcon(name = "Filled.WindowPlay20", 20f) {
      materialPath {
          moveTo(17.0F, 5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(5.5F)
          close()
          moveToRelative(0.0F, 4.1F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(7.5F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(4.1F)
          curveTo(9.216F, 16.25F, 9.0F, 15.4F, 9.0F, 14.5F)
          curveTo(9.0F, 11.462F, 11.462F, 9.0F, 14.5F, 9.0F)
          curveToRelative(0.9F, 0.0F, 1.75F, 0.216F, 2.5F, 0.6F)
          close()
          moveToRelative(2.0F, 4.9F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-2.287F, -0.437F)
          lineToRelative(-2.97F, -1.65F)
          curveTo(13.41F, 12.227F, 13.0F, 12.469F, 13.0F, 12.85F)
          verticalLineToRelative(3.3F)
          curveToRelative(0.0F, 0.382F, 0.41F, 0.623F, 0.743F, 0.437F)
          lineToRelative(2.97F, -1.65F)
          curveToRelative(0.343F, -0.19F, 0.343F, -0.684F, 0.0F, -0.874F)
          close()        
      }
    }
    return _windowPlay20!!
  }

private var _windowPlay20: ImageVector? = null
