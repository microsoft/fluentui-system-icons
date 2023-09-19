package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleRight20: ImageVector
  get() {
    if (_arrowCircleRight20 != null) {
      return _arrowCircleRight20!!
    }
    _arrowCircleRight20 = fluentIcon(name = "Filled.ArrowCircleRight20", 20f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(0.854F, -4.646F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(2.147F, -2.146F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 10.5F, 6.0F, 10.276F, 6.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(5.793F)
          lineToRelative(-2.147F, -2.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-3.0F, 3.0F)
          close()        
      }
    }
    return _arrowCircleRight20!!
  }

private var _arrowCircleRight20: ImageVector? = null
