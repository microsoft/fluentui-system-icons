package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonEdit24: ImageVector
  get() {
    if (_personEdit24 != null) {
      return _personEdit24!!
    }
    _personEdit24 = fluentIcon(name = "Filled.PersonEdit24", 24f) {
      materialPath {
          moveTo(12.49F, 17.865F)
          lineTo(16.356F, 14.0F)
          horizontalLineTo(6.253F)
          curveToRelative(-1.242F, 0.0F, -2.25F, 1.007F, -2.25F, 2.25F)
          verticalLineToRelative(0.919F)
          curveToRelative(0.0F, 0.572F, 0.18F, 1.13F, 0.511F, 1.596F)
          curveToRelative(1.388F, 1.947F, 3.57F, 3.01F, 6.486F, 3.204F)
          curveToRelative(-0.004F, -0.183F, 0.016F, -0.37F, 0.064F, -0.561F)
          lineToRelative(0.457F, -1.83F)
          curveToRelative(0.162F, -0.649F, 0.497F, -1.24F, 0.97F, -1.713F)
          close()
          moveTo(12.0F, 2.005F)
          curveToRelative(2.762F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveToRelative(7.1F, 10.665F)
          lineToRelative(-5.903F, 5.902F)
          curveToRelative(-0.344F, 0.344F, -0.588F, 0.775F, -0.706F, 1.247F)
          lineToRelative(-0.458F, 1.831F)
          curveToRelative(-0.199F, 0.796F, 0.523F, 1.517F, 1.319F, 1.318F)
          lineToRelative(1.83F, -0.457F)
          curveToRelative(0.473F, -0.118F, 0.904F, -0.363F, 1.248F, -0.707F)
          lineToRelative(5.902F, -5.902F)
          curveToRelative(0.893F, -0.893F, 0.893F, -2.34F, 0.0F, -3.232F)
          curveToRelative(-0.892F, -0.893F, -2.34F, -0.893F, -3.232F, 0.0F)
          close()        
      }
    }
    return _personEdit24!!
  }

private var _personEdit24: ImageVector? = null
