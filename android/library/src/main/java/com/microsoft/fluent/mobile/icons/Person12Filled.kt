package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Person12: ImageVector
  get() {
    if (_person12 != null) {
      return _person12!!
    }
    _person12 = fluentIcon(name = "Filled.Person12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(4.895F, 1.0F, 4.0F, 1.895F, 4.0F, 3.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(2.5F, 5.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(2.672F, 6.0F, 2.0F, 6.672F, 2.0F, 7.5F)
          curveToRelative(0.0F, 1.116F, 0.459F, 2.01F, 1.212F, 2.615F)
          curveTo(3.953F, 10.71F, 4.947F, 11.0F, 6.0F, 11.0F)
          curveToRelative(1.053F, 0.0F, 2.047F, -0.29F, 2.788F, -0.885F)
          curveTo(9.54F, 9.51F, 10.0F, 8.616F, 10.0F, 7.5F)
          curveTo(10.0F, 6.672F, 9.328F, 6.0F, 8.5F, 6.0F)
          close()        
      }
    }
    return _person12!!
  }

private var _person12: ImageVector? = null
