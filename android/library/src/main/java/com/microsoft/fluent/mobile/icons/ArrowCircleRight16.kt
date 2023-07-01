package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleRight16: ImageVector
  get() {
    if (_arrowCircleRight16 != null) {
      return _arrowCircleRight16!!
    }
    _arrowCircleRight16 = fluentIcon(name = "Filled.ArrowCircleRight16", 16f) {
      materialPath {
          moveTo(8.0F, 15.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          close()
          moveToRelative(3.462F, -6.809F)
          curveToRelative(-0.024F, 0.058F, -0.06F, 0.113F, -0.106F, 0.16F)
          lineToRelative(-0.003F, 0.003F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(9.793F, 8.5F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 8.5F, 4.5F, 8.276F, 4.5F, 8.0F)
          reflectiveCurveTo(4.724F, 7.5F, 5.0F, 7.5F)
          horizontalLineToRelative(4.793F)
          lineTo(8.147F, 5.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          lineToRelative(0.002F, 0.003F)
          curveTo(11.445F, 7.739F, 11.5F, 7.863F, 11.5F, 8.0F)
          curveToRelative(0.0F, 0.068F, -0.014F, 0.132F, -0.038F, 0.191F)
          close()        
      }
    }
    return _arrowCircleRight16!!
  }

private var _arrowCircleRight16: ImageVector? = null
