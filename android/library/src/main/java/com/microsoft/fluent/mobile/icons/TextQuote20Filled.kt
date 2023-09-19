package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextQuote20: ImageVector
  get() {
    if (_textQuote20 != null) {
      return _textQuote20!!
    }
    _textQuote20 = fluentIcon(name = "Filled.TextQuote20", 20f) {
      materialPath {
          moveTo(9.0F, 6.5F)
          curveTo(9.0F, 5.12F, 7.88F, 4.0F, 6.5F, 4.0F)
          reflectiveCurveTo(4.0F, 5.12F, 4.0F, 6.5F)
          reflectiveCurveTo(5.12F, 9.0F, 6.5F, 9.0F)
          curveToRelative(0.487F, 0.0F, 0.942F, -0.14F, 1.326F, -0.38F)
          curveToRelative(-0.195F, 1.117F, -0.54F, 2.016F, -0.952F, 2.764F)
          curveToRelative(-0.649F, 1.18F, -1.476F, 2.011F, -2.228F, 2.762F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(0.011F, -0.012F)
          curveToRelative(0.747F, -0.747F, 1.664F, -1.664F, 2.386F, -2.976F)
          curveTo(8.48F, 10.538F, 9.0F, 8.83F, 9.0F, 6.5F)
          close()
          moveToRelative(5.826F, 2.12F)
          curveTo(14.442F, 8.86F, 13.987F, 9.0F, 13.5F, 9.0F)
          curveTo(12.12F, 9.0F, 11.0F, 7.88F, 11.0F, 6.5F)
          reflectiveCurveTo(12.12F, 4.0F, 13.5F, 4.0F)
          reflectiveCurveTo(16.0F, 5.12F, 16.0F, 6.5F)
          curveToRelative(0.0F, 2.33F, -0.52F, 4.038F, -1.25F, 5.366F)
          curveToRelative(-0.721F, 1.312F, -1.638F, 2.23F, -2.384F, 2.976F)
          lineToRelative(-0.012F, 0.012F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.752F, -0.751F, 1.579F, -1.581F, 2.228F, -2.762F)
          curveToRelative(0.412F, -0.748F, 0.757F, -1.648F, 0.952F, -2.764F)
          close()        
      }
    }
    return _textQuote20!!
  }

private var _textQuote20: ImageVector? = null
