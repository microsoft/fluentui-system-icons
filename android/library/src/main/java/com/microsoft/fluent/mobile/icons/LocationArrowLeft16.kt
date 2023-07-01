package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrowLeft16: ImageVector
  get() {
    if (_locationArrowLeft16 != null) {
      return _locationArrowLeft16!!
    }
    _locationArrowLeft16 = fluentIcon(name = "Regular.LocationArrowLeft16", 16f) {
      materialPath {
          moveTo(9.159F, 14.558F)
          curveTo(10.903F, 13.016F, 14.0F, 9.874F, 14.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveTo(2.0F, 3.686F, 2.0F, 7.0F)
          curveToRelative(0.0F, 2.874F, 3.097F, 6.016F, 4.841F, 7.558F)
          curveToRelative(0.668F, 0.59F, 1.65F, 0.59F, 2.318F, 0.0F)
          close()
          moveTo(8.0F, 2.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          curveToRelative(0.0F, 1.108F, -0.615F, 2.395F, -1.57F, 3.683F)
          curveToRelative(-0.934F, 1.258F, -2.087F, 2.377F, -2.933F, 3.126F)
          curveToRelative(-0.29F, 0.256F, -0.703F, 0.256F, -0.994F, 0.0F)
          curveToRelative(-0.846F, -0.749F, -2.0F, -1.867F, -2.933F, -3.126F)
          curveTo(3.615F, 9.395F, 3.0F, 8.108F, 3.0F, 7.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveTo(7.854F, 4.854F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(6.707F, 7.0F)
          horizontalLineTo(10.5F)
          curveTo(10.776F, 7.0F, 11.0F, 6.776F, 11.0F, 6.5F)
          reflectiveCurveTo(10.776F, 6.0F, 10.5F, 6.0F)
          horizontalLineTo(6.707F)
          lineToRelative(1.147F, -1.146F)
          close()        
      }
    }
    return _locationArrowLeft16!!
  }

private var _locationArrowLeft16: ImageVector? = null
