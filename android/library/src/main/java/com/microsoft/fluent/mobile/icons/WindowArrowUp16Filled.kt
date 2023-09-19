package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WindowArrowUp16: ImageVector
  get() {
    if (_windowArrowUp16 != null) {
      return _windowArrowUp16!!
    }
    _windowArrowUp16 = fluentIcon(name = "Filled.WindowArrowUp16", 16f) {
      materialPath {
          moveTo(4.75F, 2.0F)
          curveTo(3.231F, 2.0F, 2.0F, 3.231F, 2.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 12.769F, 3.231F, 14.0F, 4.75F, 14.0F)
          horizontalLineToRelative(1.507F)
          curveToRelative(-0.368F, -0.446F, -0.668F, -0.952F, -0.882F, -1.5F)
          horizontalLineTo(4.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(4.999F)
          horizontalLineToRelative(9.0F)
          verticalLineToRelative(0.376F)
          curveToRelative(0.548F, 0.214F, 1.054F, 0.514F, 1.5F, 0.882F)
          verticalLineTo(4.75F)
          curveTo(14.0F, 3.231F, 12.769F, 2.0F, 11.25F, 2.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(5.75F, 13.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(12.985F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(6.0F, 8.015F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 15.0F, 10.5F, 15.0F)
          close()
          moveToRelative(2.354F, -4.854F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(11.0F, 9.707F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(10.0F, 12.776F, 10.0F, 12.5F)
          verticalLineTo(9.707F)
          lineToRelative(-1.146F, 1.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.047F, -0.048F, 0.103F, -0.084F, 0.162F, -0.108F)
          curveTo(10.367F, 8.014F, 10.43F, 8.0F, 10.497F, 8.0F)
          horizontalLineToRelative(0.006F)
          curveToRelative(0.067F, 0.0F, 0.13F, 0.014F, 0.188F, 0.038F)
          curveToRelative(0.058F, 0.024F, 0.113F, 0.06F, 0.16F, 0.106F)
          lineToRelative(0.003F, 0.003F)
          lineToRelative(2.0F, 2.0F)
          close()        
      }
    }
    return _windowArrowUp16!!
  }

private var _windowArrowUp16: ImageVector? = null
