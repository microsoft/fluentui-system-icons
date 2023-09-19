package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoon48: ImageVector
  get() {
    if (_weatherMoon48 != null) {
      return _weatherMoon48!!
    }
    _weatherMoon48 = fluentIcon(name = "Filled.WeatherMoon48", 48f) {
      materialPath {
          moveTo(37.903F, 33.01F)
          curveToRelative(-4.971F, 8.608F, -15.98F, 11.558F, -24.589F, 6.588F)
          curveToRelative(-2.344F, -1.354F, -4.318F, -3.185F, -5.821F, -5.368F)
          curveToRelative(-0.503F, -0.73F, -0.178F, -1.738F, 0.656F, -2.036F)
          curveToRelative(6.78F, -2.427F, 10.412F, -5.24F, 12.52F, -9.262F)
          curveToRelative(2.218F, -4.235F, 2.791F, -8.873F, 1.24F, -15.232F)
          curveToRelative(-0.215F, -0.879F, 0.48F, -1.716F, 1.383F, -1.668F)
          curveToRelative(2.802F, 0.15F, 5.54F, 0.955F, 8.022F, 2.389F)
          curveToRelative(8.61F, 4.97F, 11.56F, 15.979F, 6.589F, 24.588F)
          close()        
      }
    }
    return _weatherMoon48!!
  }

private var _weatherMoon48: ImageVector? = null
