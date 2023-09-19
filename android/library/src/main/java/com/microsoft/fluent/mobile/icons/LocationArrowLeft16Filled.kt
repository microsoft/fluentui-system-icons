package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrowLeft16: ImageVector
  get() {
    if (_locationArrowLeft16 != null) {
      return _locationArrowLeft16!!
    }
    _locationArrowLeft16 = fluentIcon(name = "Filled.LocationArrowLeft16", 16f) {
      materialPath {
          moveTo(14.0F, 7.0F)
          curveToRelative(0.0F, 2.876F, -3.1F, 6.01F, -4.844F, 7.544F)
          curveToRelative(-0.668F, 0.588F, -1.645F, 0.588F, -2.312F, 0.0F)
          curveTo(5.101F, 13.01F, 2.0F, 9.876F, 2.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
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
