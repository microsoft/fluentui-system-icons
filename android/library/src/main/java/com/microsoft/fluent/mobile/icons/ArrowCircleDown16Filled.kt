package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleDown16: ImageVector
  get() {
    if (_arrowCircleDown16 != null) {
      return _arrowCircleDown16!!
    }
    _arrowCircleDown16 = fluentIcon(name = "Filled.ArrowCircleDown16", 16f) {
      materialPath {
          moveTo(1.0F, 8.0F)
          curveToRelative(0.0F, 3.866F, 3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          close()
          moveToRelative(6.809F, 3.462F)
          curveToRelative(-0.059F, -0.024F, -0.113F, -0.06F, -0.16F, -0.106F)
          lineToRelative(-0.003F, -0.003F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(7.5F, 9.793F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveTo(8.5F, 4.724F, 8.5F, 5.0F)
          verticalLineToRelative(4.793F)
          lineToRelative(1.646F, -1.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-2.5F, 2.5F)
          lineToRelative(-0.003F, 0.002F)
          curveTo(8.261F, 11.445F, 8.137F, 11.5F, 8.0F, 11.5F)
          curveToRelative(-0.068F, 0.0F, -0.132F, -0.014F, -0.191F, -0.038F)
          close()        
      }
    }
    return _arrowCircleDown16!!
  }

private var _arrowCircleDown16: ImageVector? = null
