package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudEdit24: ImageVector
  get() {
    if (_cloudEdit24 != null) {
      return _cloudEdit24!!
    }
    _cloudEdit24 = fluentIcon(name = "Filled.CloudEdit24", 24f) {
      materialPath {
          moveTo(6.08F, 9.02F)
          curveTo(6.548F, 6.171F, 9.02F, 4.0F, 12.0F, 4.0F)
          reflectiveCurveToRelative(5.452F, 2.172F, 5.92F, 5.02F)
          curveToRelative(0.92F, 0.085F, 1.758F, 0.446F, 2.433F, 1.0F)
          curveToRelative(-0.716F, 0.08F, -1.411F, 0.393F, -1.96F, 0.942F)
          lineToRelative(-5.903F, 5.903F)
          curveToRelative(-0.328F, 0.328F, -0.59F, 0.713F, -0.773F, 1.135F)
          horizontalLineTo(6.5F)
          curveTo(4.015F, 18.0F, 2.0F, 15.985F, 2.0F, 13.5F)
          curveToRelative(0.0F, -2.344F, 1.792F, -4.269F, 4.08F, -4.48F)
          close()
          moveToRelative(13.02F, 2.65F)
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
    return _cloudEdit24!!
  }

private var _cloudEdit24: ImageVector? = null
