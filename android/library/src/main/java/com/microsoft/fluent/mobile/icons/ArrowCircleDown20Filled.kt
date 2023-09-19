package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleDown20: ImageVector
  get() {
    if (_arrowCircleDown20 != null) {
      return _arrowCircleDown20!!
    }
    _arrowCircleDown20 = fluentIcon(name = "Filled.ArrowCircleDown20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()
          moveToRelative(-4.646F, 0.854F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 12.293F)
          verticalLineTo(6.5F)
          curveTo(10.5F, 6.224F, 10.276F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveTo(9.5F, 6.224F, 9.5F, 6.5F)
          verticalLineToRelative(5.793F)
          lineToRelative(-2.146F, -2.147F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          close()        
      }
    }
    return _arrowCircleDown20!!
  }

private var _arrowCircleDown20: ImageVector? = null
