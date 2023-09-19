package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.HomeHeart32: ImageVector
  get() {
    if (_homeHeart32 != null) {
      return _homeHeart32!!
    }
    _homeHeart32 = fluentIcon(name = "Regular.HomeHeart32", 32f) {
      materialPath {
          moveTo(15.19F, 4.3F)
          curveToRelative(0.467F, -0.396F, 1.153F, -0.396F, 1.62F, 0.0F)
          lineToRelative(9.75F, 8.288F)
          curveToRelative(0.279F, 0.238F, 0.44F, 0.586F, 0.44F, 0.953F)
          verticalLineToRelative(0.974F)
          curveToRelative(0.683F, 0.049F, 1.36F, 0.219F, 2.0F, 0.511F)
          verticalLineTo(13.54F)
          curveToRelative(0.0F, -0.953F, -0.419F, -1.858F, -1.145F, -2.476F)
          lineToRelative(-9.75F, -8.287F)
          curveToRelative(-1.214F, -1.032F, -2.996F, -1.032F, -4.21F, 0.0F)
          lineToRelative(-9.75F, 8.287F)
          curveTo(3.42F, 11.682F, 3.0F, 12.587F, 3.0F, 13.54F)
          verticalLineTo(26.5F)
          curveTo(3.0F, 27.88F, 4.12F, 29.0F, 5.5F, 29.0F)
          horizontalLineToRelative(12.61F)
          lineToRelative(-1.857F, -2.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 27.0F, 5.0F, 26.776F, 5.0F, 26.5F)
          verticalLineTo(13.54F)
          curveToRelative(0.0F, -0.366F, 0.161F, -0.714F, 0.44F, -0.952F)
          lineToRelative(9.75F, -8.287F)
          close()
          moveToRelative(7.307F, 14.204F)
          lineToRelative(-0.646F, -0.82F)
          curveToRelative(-1.618F, -2.052F, -4.592F, -2.257F, -6.463F, -0.445F)
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
