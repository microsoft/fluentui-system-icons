package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleLeft16: ImageVector
  get() {
    if (_arrowCircleLeft16 != null) {
      return _arrowCircleLeft16!!
    }
    _arrowCircleLeft16 = fluentIcon(name = "Filled.ArrowCircleLeft16", 16f) {
      materialPath {
          moveTo(8.0F, 15.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          close()
          moveTo(4.538F, 8.191F)
          curveToRelative(0.024F, 0.058F, 0.06F, 0.113F, 0.106F, 0.16F)
          lineToRelative(0.003F, 0.003F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(6.207F, 8.5F)
          horizontalLineTo(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.276F, 7.5F, 11.0F, 7.5F)
          horizontalLineTo(6.207F)
          lineToRelative(1.647F, -1.646F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          lineTo(4.645F, 7.65F)
          curveTo(4.555F, 7.739F, 4.5F, 7.863F, 4.5F, 8.0F)
          curveToRelative(0.0F, 0.068F, 0.013F, 0.132F, 0.038F, 0.191F)
          close()        
      }
    }
    return _arrowCircleLeft16!!
  }

private var _arrowCircleLeft16: ImageVector? = null
