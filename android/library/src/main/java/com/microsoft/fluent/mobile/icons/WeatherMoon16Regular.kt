package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WeatherMoon16: ImageVector
  get() {
    if (_weatherMoon16 != null) {
      return _weatherMoon16!!
    }
    _weatherMoon16 = fluentIcon(name = "Regular.WeatherMoon16", 16f) {
      materialPath {
          moveTo(7.85F, 3.015F)
          curveTo(10.428F, 3.216F, 12.456F, 5.371F, 12.456F, 8.0F)
          curveToRelative(0.0F, 2.761F, -2.238F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-1.754F, 0.0F, -3.299F, -0.904F, -4.191F, -2.273F)
          curveToRelative(1.403F, -0.38F, 3.316F, -1.302F, 4.16F, -3.551F)
          curveToRelative(0.552F, -1.474F, 0.584F, -2.938F, 0.425F, -4.16F)
          close()
          moveTo(13.456F, 8.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          curveToRelative(-0.07F, 0.0F, -0.14F, 0.001F, -0.21F, 0.004F)
          curveTo(7.1F, 2.009F, 6.964F, 2.077F, 6.872F, 2.19F)
          curveToRelative(-0.09F, 0.114F, -0.127F, 0.262F, -0.1F, 0.405F)
          curveTo(7.0F, 3.81F, 7.05F, 5.324F, 6.487F, 6.824F)
          curveToRelative(-0.8F, 2.134F, -2.802F, 2.84F, -4.077F, 3.071F)
          curveToRelative(-0.154F, 0.028F, -0.286F, 0.126F, -0.357F, 0.266F)
          curveToRelative(-0.07F, 0.139F, -0.072F, 0.303F, -0.004F, 0.444F)
          curveTo(3.019F, 12.613F, 5.075F, 14.0F, 7.456F, 14.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          close()        
      }
    }
    return _weatherMoon16!!
  }

private var _weatherMoon16: ImageVector? = null
