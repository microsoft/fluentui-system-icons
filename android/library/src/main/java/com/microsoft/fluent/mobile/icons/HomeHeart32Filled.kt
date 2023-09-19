package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HomeHeart32: ImageVector
  get() {
    if (_homeHeart32 != null) {
      return _homeHeart32!!
    }
    _homeHeart32 = fluentIcon(name = "Filled.HomeHeart32", 32f) {
      materialPath {
          moveTo(18.105F, 2.777F)
          curveToRelative(-1.214F, -1.032F, -2.996F, -1.032F, -4.21F, 0.0F)
          lineToRelative(-9.75F, 8.287F)
          curveTo(3.42F, 11.682F, 3.0F, 12.587F, 3.0F, 13.54F)
          verticalLineTo(26.5F)
          curveTo(3.0F, 27.88F, 4.12F, 29.0F, 5.5F, 29.0F)
          horizontalLineToRelative(12.61F)
          lineToRelative(-3.986F, -4.293F)
          curveToRelative(-2.247F, -2.42F, -2.152F, -6.246F, 0.22F, -8.545F)
          curveToRelative(2.32F, -2.247F, 5.91F, -2.18F, 8.153F, 0.002F)
          curveToRelative(1.758F, -1.713F, 4.348F, -2.124F, 6.503F, -1.138F)
          verticalLineTo(13.54F)
          curveToRelative(0.0F, -0.953F, -0.419F, -1.858F, -1.145F, -2.476F)
          lineToRelative(-9.75F, -8.287F)
          close()
          moveToRelative(4.392F, 15.726F)
          lineToRelative(-0.646F, -0.818F)
          curveToRelative(-1.618F, -2.053F, -4.592F, -2.258F, -6.463F, -0.446F)
          curveToRelative(-1.784F, 1.73F, -1.858F, 4.623F, -0.165F, 6.447F)
          lineToRelative(6.459F, 6.955F)
          curveToRelative(0.444F, 0.478F, 1.186F, 0.479F, 1.63F, 0.0F)
          lineToRelative(6.462F, -6.949F)
          curveToRelative(1.698F, -1.826F, 1.623F, -4.726F, -0.167F, -6.457F)
          curveToRelative(-1.872F, -1.81F, -4.846F, -1.604F, -6.464F, 0.449F)
          lineToRelative(-0.646F, 0.82F)
          close()        
      }
    }
    return _homeHeart32!!
  }

private var _homeHeart32: ImageVector? = null
