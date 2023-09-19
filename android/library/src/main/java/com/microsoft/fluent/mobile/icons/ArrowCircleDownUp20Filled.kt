package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleDownUp20: ImageVector
  get() {
    if (_arrowCircleDownUp20 != null) {
      return _arrowCircleDownUp20!!
    }
    _arrowCircleDownUp20 = fluentIcon(name = "Filled.ArrowCircleDownUp20", 20f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(-1.0F, -5.793F)
          lineToRelative(-1.646F, 1.647F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(5.0F, 12.207F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineTo(6.5F, 12.293F)
          verticalLineTo(6.5F)
          curveTo(6.5F, 6.224F, 6.724F, 6.0F, 7.0F, 6.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(5.793F)
          lineTo(8.293F, 11.5F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          close()
          moveToRelative(6.0F, -4.414F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineTo(13.5F, 7.707F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(7.707F)
          lineTo(11.707F, 8.5F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.646F, -1.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineTo(15.0F, 7.793F)
          close()        
      }
    }
    return _arrowCircleDownUp20!!
  }

private var _arrowCircleDownUp20: ImageVector? = null
