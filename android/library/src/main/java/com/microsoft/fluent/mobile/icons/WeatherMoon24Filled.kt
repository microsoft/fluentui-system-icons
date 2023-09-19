package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoon24: ImageVector
  get() {
    if (_weatherMoon24 != null) {
      return _weatherMoon24!!
    }
    _weatherMoon24 = fluentIcon(name = "Filled.WeatherMoon24", 24f) {
      materialPath {
          moveTo(20.026F, 17.001F)
          curveToRelative(-2.762F, 4.784F, -8.879F, 6.423F, -13.663F, 3.661F)
          curveToRelative(-1.302F, -0.752F, -2.399F, -1.77F, -3.234F, -2.982F)
          curveToRelative(-0.28F, -0.406F, -0.099F, -0.966F, 0.365F, -1.132F)
          curveToRelative(3.767F, -1.348F, 5.785F, -2.91F, 6.956F, -5.146F)
          curveTo(11.682F, 9.05F, 12.0F, 6.472F, 11.139F, 2.94F)
          curveToRelative(-0.12F, -0.489F, 0.266F, -0.954F, 0.769F, -0.927F)
          curveToRelative(1.556F, 0.083F, 3.078F, 0.53F, 4.457F, 1.327F)
          curveToRelative(4.784F, 2.762F, 6.423F, 8.879F, 3.66F, 13.662F)
          close()        
      }
    }
    return _weatherMoon24!!
  }

private var _weatherMoon24: ImageVector? = null
