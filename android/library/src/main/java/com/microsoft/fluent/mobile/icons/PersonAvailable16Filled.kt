package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonAvailable16: ImageVector
  get() {
    if (_personAvailable16 != null) {
      return _personAvailable16!!
    }
    _personAvailable16 = fluentIcon(name = "Filled.PersonAvailable16", 16f) {
      materialPath {
          moveTo(8.889F, 5.24F)
          curveTo(7.85F, 5.557F, 6.943F, 6.174F, 6.266F, 6.99F)
          curveTo(4.996F, 6.87F, 4.0F, 5.801F, 4.0F, 4.5F)
          curveTo(4.0F, 3.12F, 5.12F, 2.0F, 6.5F, 2.0F)
          reflectiveCurveTo(9.0F, 3.12F, 9.0F, 4.5F)
          curveToRelative(0.0F, 0.258F, -0.039F, 0.506F, -0.111F, 0.74F)
          close()
          moveTo(3.5F, 8.0F)
          horizontalLineToRelative(2.1F)
          curveTo(5.216F, 8.75F, 5.0F, 9.6F, 5.0F, 10.5F)
          curveToRelative(0.0F, 1.309F, 0.457F, 2.51F, 1.22F, 3.455F)
          curveTo(3.554F, 13.64F, 2.0F, 11.73F, 2.0F, 10.0F)
          verticalLineTo(9.75F)
          curveTo(2.0F, 8.955F, 2.672F, 8.0F, 3.5F, 8.0F)
          close()
          moveTo(15.0F, 10.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(9.5F, 11.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _personAvailable16!!
  }

private var _personAvailable16: ImageVector? = null
