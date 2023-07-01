package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckmarkUnderlineCircle20: ImageVector
  get() {
    if (_checkmarkUnderlineCircle20 != null) {
      return _checkmarkUnderlineCircle20!!
    }
    _checkmarkUnderlineCircle20 = fluentIcon(name = "Filled.CheckmarkUnderlineCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(3.854F, -11.854F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          lineTo(9.5F, 9.793F)
          lineToRelative(3.646F, -3.646F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          close()
          moveTo(7.5F, 13.0F)
          horizontalLineToRelative(4.998F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 14.0F, 7.0F, 13.776F, 7.0F, 13.5F)
          reflectiveCurveTo(7.224F, 13.0F, 7.5F, 13.0F)
          close()        
      }
    }
    return _checkmarkUnderlineCircle20!!
  }

private var _checkmarkUnderlineCircle20: ImageVector? = null
