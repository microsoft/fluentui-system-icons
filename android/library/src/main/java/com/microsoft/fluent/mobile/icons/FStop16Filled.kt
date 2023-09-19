package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FStop16: ImageVector
  get() {
    if (_fStop16 != null) {
      return _fStop16!!
    }
    _fStop16 = fluentIcon(name = "Filled.FStop16", 16f) {
      materialPath {
          moveTo(9.055F, 4.105F)
          curveToRelative(0.194F, -1.18F, 1.408F, -1.895F, 2.534F, -1.494F)
          lineTo(12.0F, 2.757F)
          curveToRelative(0.39F, 0.139F, 0.819F, -0.065F, 0.958F, -0.455F)
          reflectiveCurveToRelative(-0.065F, -0.82F, -0.455F, -0.958F)
          lineToRelative(-0.41F, -0.146F)
          curveToRelative(-2.006F, -0.715F, -4.17F, 0.561F, -4.517F, 2.663F)
          lineTo(7.1F, 6.751F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.335F, -0.75F, 0.75F)
          curveToRelative(0.0F, 0.413F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(2.352F)
          lineToRelative(-0.434F, 2.632F)
          curveToRelative(-0.223F, 1.359F, -1.764F, 2.045F, -2.924F, 1.303F)
          lineToRelative(-0.34F, -0.218F)
          curveToRelative(-0.349F, -0.223F, -0.812F, -0.121F, -1.036F, 0.228F)
          curveToRelative(-0.223F, 0.349F, -0.121F, 0.813F, 0.228F, 1.036F)
          lineToRelative(0.34F, 0.217F)
          curveToRelative(2.067F, 1.323F, 4.814F, 0.1F, 5.213F, -2.322F)
          lineTo(8.372F, 8.25F)
          horizontalLineTo(10.5F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.335F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.62F)
          lineToRelative(0.435F, -2.645F)
          close()        
      }
    }
    return _fStop16!!
  }

private var _fStop16: ImageVector? = null
