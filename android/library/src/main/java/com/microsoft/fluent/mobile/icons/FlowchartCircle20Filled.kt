package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlowchartCircle20: ImageVector
  get() {
    if (_flowchartCircle20 != null) {
      return _flowchartCircle20!!
    }
    _flowchartCircle20 = fluentIcon(name = "Filled.FlowchartCircle20", 20f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(4.0F, -3.5F)
          verticalLineToRelative(2.0F)
          curveTo(6.0F, 8.776F, 6.224F, 9.0F, 6.5F, 9.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(1.793F)
          lineToRelative(-1.354F, 1.353F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(9.207F, 13.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineTo(12.0F)
          horizontalLineTo(9.207F)
          lineTo(8.0F, 10.793F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(0.5F)
          curveTo(8.776F, 9.0F, 9.0F, 8.776F, 9.0F, 8.5F)
          verticalLineToRelative(-2.0F)
          curveTo(9.0F, 6.224F, 8.776F, 6.0F, 8.5F, 6.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(6.224F, 6.0F, 6.0F, 6.224F, 6.0F, 6.5F)
          close()        
      }
    }
    return _flowchartCircle20!!
  }

private var _flowchartCircle20: ImageVector? = null
