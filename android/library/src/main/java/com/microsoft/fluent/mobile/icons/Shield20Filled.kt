package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shield20: ImageVector
  get() {
    if (_shield20 != null) {
      return _shield20!!
    }
    _shield20 = fluentIcon(name = "Filled.Shield20", 20f) {
      materialPath {
          moveTo(9.723F, 2.084F)
          curveToRelative(0.168F, -0.112F, 0.386F, -0.112F, 0.554F, 0.0F)
          curveToRelative(1.939F, 1.292F, 4.035F, 2.098F, 6.294F, 2.421F)
          curveTo(16.817F, 4.54F, 17.0F, 4.751F, 17.0F, 5.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 3.891F, -2.307F, 6.73F, -6.82F, 8.467F)
          curveToRelative(-0.116F, 0.044F, -0.244F, 0.044F, -0.36F, 0.0F)
          curveTo(5.307F, 16.23F, 3.0F, 13.39F, 3.0F, 9.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.249F, 0.183F, -0.46F, 0.43F, -0.495F)
          curveToRelative(2.258F, -0.323F, 4.354F, -1.129F, 6.293F, -2.421F)
          close()        
      }
    }
    return _shield20!!
  }

private var _shield20: ImageVector? = null
