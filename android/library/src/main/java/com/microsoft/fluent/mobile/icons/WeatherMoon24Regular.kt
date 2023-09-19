package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WeatherMoon24: ImageVector
  get() {
    if (_weatherMoon24 != null) {
      return _weatherMoon24!!
    }
    _weatherMoon24 = fluentIcon(name = "Regular.WeatherMoon24", 24f) {
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
          moveToRelative(-8.248F, -4.903F)
          curveToRelative(-1.25F, 2.389F, -3.31F, 4.1F, -6.817F, 5.499F)
          curveToRelative(0.608F, 0.696F, 1.332F, 1.292F, 2.152F, 1.766F)
          curveToRelative(4.067F, 2.348F, 9.266F, 0.955F, 11.614F, -3.112F)
          curveToRelative(2.347F, -4.066F, 0.954F, -9.265F, -3.112F, -11.613F)
          curveToRelative(-0.877F, -0.506F, -1.82F, -0.846F, -2.792F, -1.015F)
          curveToRelative(0.647F, 3.383F, 0.23F, 6.043F, -1.045F, 8.475F)
          close()        
      }
    }
    return _weatherMoon24!!
  }

private var _weatherMoon24: ImageVector? = null
