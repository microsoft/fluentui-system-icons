package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorBackgroundAccent24: ImageVector
  get() {
    if (_colorBackgroundAccent24 != null) {
      return _colorBackgroundAccent24!!
    }
    _colorBackgroundAccent24 = fluentIcon(name = "Regular.ColorBackgroundAccent24", 24f) {
      materialPath {
          moveTo(3.0F, 17.5F)
          verticalLineToRelative(-4.088F)
          lineTo(4.488F, 14.9F)
          curveToRelative(1.172F, 1.171F, 3.071F, 1.171F, 4.243F, 0.0F)
          lineToRelative(1.37F, -1.37F)
          curveTo(10.039F, 13.795F, 10.0F, 14.08F, 10.0F, 14.375F)
          curveTo(10.0F, 16.232F, 11.394F, 18.0F, 13.5F, 18.0F)
          reflectiveCurveToRelative(3.5F, -1.768F, 3.5F, -3.625F)
          curveToRelative(0.0F, -0.693F, -0.214F, -1.32F, -0.433F, -1.798F)
          curveToRelative(-0.226F, -0.493F, -0.512F, -0.94F, -0.77F, -1.3F)
          curveToRelative(-0.263F, -0.366F, -0.52F, -0.675F, -0.713F, -0.891F)
          lineToRelative(-0.008F, -0.01F)
          lineToRelative(-0.325F, -0.35F)
          lineToRelative(-0.014F, -0.013F)
          curveToRelative(-0.293F, -0.294F, -0.664F, -0.461F, -1.047F, -0.503F)
          curveToRelative(0.36F, -1.05F, 0.12F, -2.258F, -0.717F, -3.096F)
          lineTo(11.56F, 5.0F)
          horizontalLineToRelative(7.94F)
          curveTo(20.328F, 5.0F, 21.0F, 5.672F, 21.0F, 6.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(3.672F, 19.0F, 3.0F, 18.328F, 3.0F, 17.5F)
          close()        
      }
    }
    return _colorBackgroundAccent24!!
  }

private var _colorBackgroundAccent24: ImageVector? = null
