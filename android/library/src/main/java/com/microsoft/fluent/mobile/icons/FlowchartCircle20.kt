package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlowchartCircle20: ImageVector
  get() {
    if (_flowchartCircle20 != null) {
      return _flowchartCircle20!!
    }
    _flowchartCircle20 = fluentIcon(name = "Regular.FlowchartCircle20", 20f) {
      materialPath {
          moveTo(6.0F, 6.5F)
          curveTo(6.0F, 6.224F, 6.224F, 6.0F, 6.5F, 6.0F)
          horizontalLineToRelative(2.0F)
          curveTo(8.776F, 6.0F, 9.0F, 6.224F, 9.0F, 6.5F)
          verticalLineToRelative(2.0F)
          curveTo(9.0F, 8.776F, 8.776F, 9.0F, 8.5F, 9.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(1.793F)
          lineTo(9.207F, 12.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(13.0F)
          horizontalLineTo(9.207F)
          lineToRelative(-1.354F, 1.354F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(7.0F, 10.793F)
          verticalLineTo(9.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 9.0F, 6.0F, 8.776F, 6.0F, 8.5F)
          verticalLineToRelative(-2.0F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(8.0F, -7.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()        
      }
    }
    return _flowchartCircle20!!
  }

private var _flowchartCircle20: ImageVector? = null
