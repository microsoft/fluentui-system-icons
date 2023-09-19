package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShieldKeyhole20: ImageVector
  get() {
    if (_shieldKeyhole20 != null) {
      return _shieldKeyhole20!!
    }
    _shieldKeyhole20 = fluentIcon(name = "Filled.ShieldKeyhole20", 20f) {
      materialPath {
          moveTo(10.277F, 2.084F)
          curveToRelative(-0.168F, -0.112F, -0.386F, -0.112F, -0.554F, 0.0F)
          curveToRelative(-1.939F, 1.292F, -4.035F, 2.098F, -6.294F, 2.421F)
          curveTo(3.183F, 4.54F, 3.0F, 4.751F, 3.0F, 5.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 3.891F, 2.307F, 6.73F, 6.82F, 8.467F)
          curveToRelative(0.116F, 0.044F, 0.244F, 0.044F, 0.36F, 0.0F)
          curveTo(14.693F, 16.23F, 17.0F, 13.39F, 17.0F, 9.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.249F, -0.183F, -0.46F, -0.43F, -0.495F)
          curveToRelative(-2.258F, -0.323F, -4.354F, -1.129F, -6.293F, -2.421F)
          close()
          moveTo(11.5F, 9.0F)
          curveToRelative(0.0F, 0.653F, -0.417F, 1.209F, -1.0F, 1.415F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-2.085F)
          curveToRelative(-0.583F, -0.206F, -1.0F, -0.762F, -1.0F, -1.415F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _shieldKeyhole20!!
  }

private var _shieldKeyhole20: ImageVector? = null
