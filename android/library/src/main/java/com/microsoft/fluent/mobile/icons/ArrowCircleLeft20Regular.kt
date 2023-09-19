package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleLeft20: ImageVector
  get() {
    if (_arrowCircleLeft20 != null) {
      return _arrowCircleLeft20!!
    }
    _arrowCircleLeft20 = fluentIcon(name = "Regular.ArrowCircleLeft20", 20f) {
      materialPath {
          moveTo(9.146F, 13.354F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.511F, 0.0F, 0.707F)
          lineTo(7.708F, 9.5F)
          horizontalLineTo(13.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(7.707F)
          lineToRelative(2.147F, 2.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, 4.418F, 3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          close()
          moveToRelative(8.0F, 7.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, -3.134F, -7.0F, -7.0F)
          reflectiveCurveToRelative(3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          close()        
      }
    }
    return _arrowCircleLeft20!!
  }

private var _arrowCircleLeft20: ImageVector? = null
