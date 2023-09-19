package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Heart32: ImageVector
  get() {
    if (_heart32 != null) {
      return _heart32!!
    }
    _heart32 = fluentIcon(name = "Filled.Heart32", 32f) {
      materialPath {
          moveTo(15.53F, 7.122F)
          curveTo(12.551F, 2.956F, 6.356F, 2.96F, 3.384F, 7.131F)
          curveToRelative(-2.056F, 2.883F, -1.801F, 6.814F, 0.609F, 9.409F)
          lineToRelative(11.275F, 12.14F)
          curveTo(15.457F, 28.884F, 15.722F, 29.0F, 16.0F, 29.0F)
          curveToRelative(0.278F, 0.0F, 0.543F, -0.116F, 0.732F, -0.319F)
          lineTo(28.0F, 16.583F)
          curveToRelative(2.437F, -2.616F, 2.681F, -6.59F, 0.584F, -9.485F)
          curveToRelative(-3.01F, -4.155F, -9.216F, -4.114F, -12.171F, 0.081F)
          lineToRelative(-0.417F, 0.593F)
          lineToRelative(-0.465F, -0.65F)
          close()        
      }
    }
    return _heart32!!
  }

private var _heart32: ImageVector? = null
