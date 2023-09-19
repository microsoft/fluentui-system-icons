package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrowRight16: ImageVector
  get() {
    if (_locationArrowRight16 != null) {
      return _locationArrowRight16!!
    }
    _locationArrowRight16 = fluentIcon(name = "Filled.LocationArrowRight16", 16f) {
      materialPath {
          moveTo(14.0F, 7.0F)
          curveToRelative(0.0F, 2.876F, -3.1F, 6.01F, -4.844F, 7.544F)
          curveToRelative(-0.668F, 0.588F, -1.645F, 0.588F, -2.312F, 0.0F)
          curveTo(5.101F, 13.01F, 2.0F, 9.876F, 2.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveTo(8.146F, 4.854F)
          lineTo(9.293F, 6.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 6.0F, 5.0F, 6.224F, 5.0F, 6.5F)
          reflectiveCurveTo(5.224F, 7.0F, 5.5F, 7.0F)
          horizontalLineToRelative(3.793F)
          lineTo(8.147F, 8.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.196F, 0.511F, 0.196F, 0.707F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          close()        
      }
    }
    return _locationArrowRight16!!
  }

private var _locationArrowRight16: ImageVector? = null
