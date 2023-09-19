package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shield20: ImageVector
  get() {
    if (_shield20 != null) {
      return _shield20!!
    }
    _shield20 = fluentIcon(name = "Regular.Shield20", 20f) {
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
          moveTo(9.599F, 3.346F)
          curveTo(7.853F, 4.396F, 5.985F, 5.09F, 4.0F, 5.428F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 3.392F, 1.968F, 5.863F, 6.0F, 7.463F)
          curveToRelative(4.032F, -1.6F, 6.0F, -4.071F, 6.0F, -7.463F)
          verticalLineTo(5.428F)
          curveToRelative(-1.985F, -0.338F, -3.853F, -1.032F, -5.6F, -2.082F)
          lineTo(10.0F, 3.097F)
          lineTo(9.6F, 3.346F)
          close()        
      }
    }
    return _shield20!!
  }

private var _shield20: ImageVector? = null
