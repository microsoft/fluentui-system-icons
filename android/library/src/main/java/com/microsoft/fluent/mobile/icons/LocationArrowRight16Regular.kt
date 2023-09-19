package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrowRight16: ImageVector
  get() {
    if (_locationArrowRight16 != null) {
      return _locationArrowRight16!!
    }
    _locationArrowRight16 = fluentIcon(name = "Regular.LocationArrowRight16", 16f) {
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
          moveToRelative(0.146F, 2.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(9.293F, 7.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 7.0F, 5.0F, 6.776F, 5.0F, 6.5F)
          reflectiveCurveTo(5.224F, 6.0F, 5.5F, 6.0F)
          horizontalLineToRelative(3.793F)
          lineTo(8.147F, 4.854F)
          close()        
      }
    }
    return _locationArrowRight16!!
  }

private var _locationArrowRight16: ImageVector? = null
