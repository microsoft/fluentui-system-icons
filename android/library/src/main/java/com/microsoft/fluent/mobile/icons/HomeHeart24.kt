package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HomeHeart24: ImageVector
  get() {
    if (_homeHeart24 != null) {
      return _homeHeart24!!
    }
    _homeHeart24 = fluentIcon(name = "Filled.HomeHeart24", 24f) {
      materialPath {
          moveTo(13.45F, 2.533F)
          curveToRelative(-0.837F, -0.707F, -2.063F, -0.707F, -2.9F, 0.0F)
          lineTo(3.8F, 8.228F)
          curveTo(3.291F, 8.655F, 3.0F, 9.284F, 3.0F, 9.948F)
          verticalLineToRelative(9.305F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(8.617F)
          lineToRelative(-2.063F, -2.136F)
          curveToRelative(-1.48F, -1.532F, -1.696F, -3.857F, -0.668F, -5.62F)
          curveToRelative(0.446F, -0.765F, 1.116F, -1.404F, 1.924F, -1.8F)
          curveToRelative(1.42F, -0.694F, 3.117F, -0.579F, 4.44F, 0.337F)
          curveToRelative(1.19F, -0.824F, 2.68F, -1.0F, 4.0F, -0.523F)
          verticalLineTo(9.948F)
          curveToRelative(0.0F, -0.664F, -0.292F, -1.293F, -0.8F, -1.72F)
          lineToRelative(-6.75F, -5.695F)
          close()
          moveToRelative(8.527F, 15.64F)
          curveToRelative(1.364F, -1.412F, 1.364F, -3.702F, 0.0F, -5.114F)
          curveToRelative(-0.15F, -0.154F, -0.309F, -0.292F, -0.476F, -0.413F)
          curveToRelative(-1.362F, -0.982F, -3.25F, -0.845F, -4.465F, 0.413F)
          horizontalLineToRelative(-0.072F)
          curveToRelative(-1.072F, -1.11F, -2.668F, -1.347F, -3.964F, -0.713F)
          curveToRelative(-0.625F, 0.306F, -1.15F, 0.803F, -1.5F, 1.404F)
          curveToRelative(-0.81F, 1.39F, -0.636F, 3.223F, 0.523F, 4.423F)
          lineToRelative(4.442F, 4.598F)
          curveToRelative(0.296F, 0.305F, 0.774F, 0.305F, 1.07F, 0.0F)
          lineToRelative(4.442F, -4.598F)
          close()        
      }
    }
    return _homeHeart24!!
  }

private var _homeHeart24: ImageVector? = null
