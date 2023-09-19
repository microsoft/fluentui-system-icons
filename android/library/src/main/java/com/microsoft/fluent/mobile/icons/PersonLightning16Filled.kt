package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonLightning16: ImageVector
  get() {
    if (_personLightning16 != null) {
      return _personLightning16!!
    }
    _personLightning16 = fluentIcon(name = "Filled.PersonLightning16", 16f) {
      materialPath {
          moveTo(7.117F, 11.923F)
          curveToRelative(-0.347F, 0.833F, 0.114F, 1.737F, 0.908F, 2.0F)
          curveTo(7.7F, 13.974F, 7.359F, 14.0F, 7.0F, 14.0F)
          curveToRelative(-3.14F, 0.0F, -5.0F, -2.029F, -5.0F, -4.0F)
          verticalLineTo(9.5F)
          curveTo(2.0F, 8.672F, 2.672F, 8.0F, 3.5F, 8.0F)
          horizontalLineToRelative(5.252F)
          lineToRelative(-1.635F, 3.923F)
          close()
          moveTo(7.0F, 1.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveTo(8.519F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveTo(4.25F, 5.769F, 4.25F, 4.25F)
          reflectiveCurveTo(5.481F, 1.5F, 7.0F, 1.5F)
          close()
          moveTo(8.502F, 13.0F)
          horizontalLineToRelative(1.75F)
          lineToRelative(-0.59F, 2.36F)
          curveToRelative(-0.12F, 0.482F, 0.463F, 0.826F, 0.827F, 0.486F)
          lineToRelative(4.872F, -4.548F)
          curveTo(15.86F, 10.834F, 15.531F, 10.0F, 14.85F, 10.0F)
          horizontalLineToRelative(-1.098F)
          lineToRelative(0.781F, -2.342F)
          curveTo(14.641F, 7.334F, 14.4F, 7.0F, 14.06F, 7.0F)
          horizontalLineToRelative(-3.473F)
          curveToRelative(-0.202F, 0.0F, -0.384F, 0.121F, -0.462F, 0.308F)
          lineToRelative(-2.083F, 5.0F)
          curveTo(7.904F, 12.637F, 8.146F, 13.0F, 8.502F, 13.0F)
          close()        
      }
    }
    return _personLightning16!!
  }

private var _personLightning16: ImageVector? = null
