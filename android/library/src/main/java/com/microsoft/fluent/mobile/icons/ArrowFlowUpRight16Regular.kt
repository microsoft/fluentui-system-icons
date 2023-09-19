package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowFlowUpRight16: ImageVector
  get() {
    if (_arrowFlowUpRight16 != null) {
      return _arrowFlowUpRight16!!
    }
    _arrowFlowUpRight16 = fluentIcon(name = "Regular.ArrowFlowUpRight16", 16f) {
      materialPath {
          moveTo(11.854F, 2.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(13.293F, 5.0F)
          horizontalLineTo(9.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.95F)
          curveTo(5.718F, 8.859F, 4.71F, 8.0F, 3.5F, 8.0F)
          curveTo(2.12F, 8.0F, 1.0F, 9.12F, 1.0F, 10.5F)
          reflectiveCurveTo(2.12F, 13.0F, 3.5F, 13.0F)
          curveToRelative(1.21F, 0.0F, 2.218F, -0.859F, 2.45F, -2.0F)
          horizontalLineTo(6.5F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.793F)
          lineToRelative(-2.147F, 2.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-3.0F, -3.0F)
          close()
          moveTo(5.0F, 10.5F)
          curveTo(5.0F, 11.328F, 4.328F, 12.0F, 3.5F, 12.0F)
          reflectiveCurveTo(2.0F, 11.328F, 2.0F, 10.5F)
          reflectiveCurveTo(2.672F, 9.0F, 3.5F, 9.0F)
          reflectiveCurveTo(5.0F, 9.672F, 5.0F, 10.5F)
          close()        
      }
    }
    return _arrowFlowUpRight16!!
  }

private var _arrowFlowUpRight16: ImageVector? = null
