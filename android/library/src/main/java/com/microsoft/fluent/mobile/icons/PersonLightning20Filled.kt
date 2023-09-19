package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonLightning20: ImageVector
  get() {
    if (_personLightning20 != null) {
      return _personLightning20!!
    }
    _personLightning20 = fluentIcon(name = "Filled.PersonLightning20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveTo(7.79F, 2.0F, 6.0F, 3.79F, 6.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(-4.991F, 9.0F)
          curveTo(3.903F, 11.0F, 3.0F, 11.887F, 3.0F, 13.0F)
          curveToRelative(0.0F, 1.691F, 0.833F, 2.966F, 2.135F, 3.797F)
          curveTo(6.417F, 17.614F, 8.145F, 18.0F, 10.0F, 18.0F)
          curveToRelative(0.6F, 0.0F, 1.188F, -0.04F, 1.752F, -0.123F)
          lineTo(11.97F, 17.0F)
          horizontalLineTo(11.5F)
          curveToRelative(-1.07F, 0.0F, -1.796F, -1.089F, -1.384F, -2.077F)
          lineTo(11.752F, 11.0F)
          horizontalLineTo(5.009F)
          close()
          moveToRelative(7.603F, 5.0F)
          curveToRelative(0.325F, 0.0F, 0.564F, 0.306F, 0.485F, 0.621F)
          lineToRelative(-0.434F, 1.738F)
          curveToRelative(-0.121F, 0.483F, 0.462F, 0.827F, 0.826F, 0.487F)
          lineToRelative(4.872F, -4.548F)
          curveTo(18.86F, 13.834F, 18.531F, 13.0F, 17.85F, 13.0F)
          horizontalLineToRelative(-0.404F)
          curveToRelative(-0.341F, 0.0F, -0.582F, -0.334F, -0.474F, -0.658F)
          lineToRelative(0.561F, -1.684F)
          curveTo(17.641F, 10.334F, 17.4F, 10.0F, 17.06F, 10.0F)
          horizontalLineToRelative(-3.473F)
          curveToRelative(-0.202F, 0.0F, -0.384F, 0.121F, -0.462F, 0.308F)
          lineToRelative(-2.083F, 5.0F)
          curveTo(10.904F, 15.637F, 11.146F, 16.0F, 11.502F, 16.0F)
          horizontalLineToRelative(1.11F)
          close()        
      }
    }
    return _personLightning20!!
  }

private var _personLightning20: ImageVector? = null
