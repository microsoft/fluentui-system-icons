package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudCheckmark20: ImageVector
  get() {
    if (_cloudCheckmark20 != null) {
      return _cloudCheckmark20!!
    }
    _cloudCheckmark20 = fluentIcon(name = "Filled.CloudCheckmark20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(2.817F, 0.0F, 4.415F, 1.923F, 4.647F, 4.246F)
          horizontalLineToRelative(0.07F)
          curveTo(16.532F, 6.246F, 18.0F, 7.758F, 18.0F, 9.623F)
          curveToRelative(0.0F, 0.095F, -0.004F, 0.19F, -0.011F, 0.283F)
          curveTo(16.935F, 8.592F, 15.316F, 7.75F, 13.5F, 7.75F)
          curveToRelative(-3.007F, 0.0F, -5.475F, 2.309F, -5.729F, 5.25F)
          horizontalLineTo(5.282F)
          curveTo(3.47F, 13.0F, 2.0F, 11.488F, 2.0F, 9.623F)
          curveToRelative(0.0F, -1.865F, 1.47F, -3.377F, 3.282F, -3.377F)
          horizontalLineToRelative(0.071F)
          curveTo(5.587F, 3.908F, 7.183F, 2.0F, 10.0F, 2.0F)
          close()
          moveToRelative(8.0F, 11.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(9.0F, 15.985F, 9.0F, 13.5F)
          reflectiveCurveTo(11.015F, 9.0F, 13.5F, 9.0F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(12.5F, 14.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _cloudCheckmark20!!
  }

private var _cloudCheckmark20: ImageVector? = null
