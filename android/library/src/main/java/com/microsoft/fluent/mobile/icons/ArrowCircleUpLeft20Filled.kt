package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleUpLeft20: ImageVector
  get() {
    if (_arrowCircleUpLeft20 != null) {
      return _arrowCircleUpLeft20!!
    }
    _arrowCircleUpLeft20 = fluentIcon(name = "Filled.ArrowCircleUpLeft20", 20f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveTo(7.149F, 7.144F)
          curveToRelative(0.047F, -0.047F, 0.101F, -0.082F, 0.16F, -0.106F)
          curveTo(7.368F, 7.013F, 7.432F, 7.0F, 7.5F, 7.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.776F, 7.0F, 13.0F, 7.224F, 13.0F, 7.5F)
          reflectiveCurveTo(12.776F, 8.0F, 12.5F, 8.0F)
          horizontalLineTo(8.707F)
          lineToRelative(4.147F, 4.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 8.707F)
          verticalLineTo(12.5F)
          curveTo(8.0F, 12.776F, 7.776F, 13.0F, 7.5F, 13.0F)
          reflectiveCurveTo(7.0F, 12.776F, 7.0F, 12.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.068F, 0.013F, -0.132F, 0.038F, -0.191F)
          curveToRelative(0.024F, -0.059F, 0.06F, -0.113F, 0.106F, -0.16F)
          lineTo(7.15F, 7.144F)
          close()        
      }
    }
    return _arrowCircleUpLeft20!!
  }

private var _arrowCircleUpLeft20: ImageVector? = null
