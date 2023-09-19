package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ShieldPerson20: ImageVector
  get() {
    if (_shieldPerson20 != null) {
      return _shieldPerson20!!
    }
    _shieldPerson20 = fluentIcon(name = "Regular.ShieldPerson20", 20f) {
      materialPath {
          moveTo(10.0F, 9.5F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.896F, 2.0F, -2.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          curveToRelative(0.0F, 1.104F, 0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveToRelative(2.5F, 0.0F, 3.5F, -1.255F, 3.5F, -2.5F)
          curveToRelative(0.0F, -0.829F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.671F, -1.5F, 1.5F)
          curveToRelative(0.0F, 1.25F, 1.0F, 2.5F, 3.5F, 2.5F)
          close()
          moveToRelative(0.277F, -12.416F)
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
          moveTo(4.0F, 5.428F)
          curveTo(5.985F, 5.09F, 7.853F, 4.396F, 9.6F, 3.346F)
          lineTo(10.0F, 3.097F)
          lineToRelative(0.4F, 0.249F)
          curveToRelative(1.747F, 1.05F, 3.615F, 1.744F, 5.6F, 2.082F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 3.392F, -1.968F, 5.863F, -6.0F, 7.463F)
          curveToRelative(-4.032F, -1.6F, -6.0F, -4.071F, -6.0F, -7.463F)
          verticalLineTo(5.428F)
          close()        
      }
    }
    return _shieldPerson20!!
  }

private var _shieldPerson20: ImageVector? = null
