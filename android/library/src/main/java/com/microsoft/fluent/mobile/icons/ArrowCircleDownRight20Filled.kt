package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleDownRight20: ImageVector
  get() {
    if (_arrowCircleDownRight20 != null) {
      return _arrowCircleDownRight20!!
    }
    _arrowCircleDownRight20 = fluentIcon(name = "Filled.ArrowCircleDownRight20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveToRelative(2.851F, 10.856F)
          curveToRelative(-0.047F, 0.047F, -0.102F, 0.082F, -0.16F, 0.106F)
          curveTo(12.632F, 12.986F, 12.568F, 13.0F, 12.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 13.0F, 7.0F, 12.776F, 7.0F, 12.5F)
          reflectiveCurveTo(7.224F, 12.0F, 7.5F, 12.0F)
          horizontalLineToRelative(3.793F)
          lineTo(7.147F, 7.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(12.0F, 11.293F)
          verticalLineTo(7.5F)
          curveTo(12.0F, 7.224F, 12.224F, 7.0F, 12.5F, 7.0F)
          reflectiveCurveTo(13.0F, 7.224F, 13.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.068F, -0.014F, 0.132F, -0.038F, 0.191F)
          curveToRelative(-0.024F, 0.058F, -0.06F, 0.113F, -0.106F, 0.16F)
          lineToRelative(-0.005F, 0.005F)
          close()        
      }
    }
    return _arrowCircleDownRight20!!
  }

private var _arrowCircleDownRight20: ImageVector? = null
