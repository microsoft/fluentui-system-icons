package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AddSubtractCircle20: ImageVector
  get() {
    if (_addSubtractCircle20 != null) {
      return _addSubtractCircle20!!
    }
    _addSubtractCircle20 = fluentIcon(name = "Filled.AddSubtractCircle20", 20f) {
      materialPath {
          moveTo(11.5F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 12.0F, 14.5F, 12.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveToRelative(-1.753F, 0.0F, -3.356F, -0.644F, -4.583F, -1.71F)
          lineToRelative(9.874F, -9.873F)
          curveTo(16.356F, 6.644F, 17.0F, 8.246F, 17.0F, 10.0F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          close()
          moveTo(5.5F, 7.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(-1.0F)
          curveTo(7.0F, 5.224F, 7.224F, 5.0F, 7.5F, 5.0F)
          reflectiveCurveTo(8.0F, 5.224F, 8.0F, 5.5F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.276F, 7.5F, 9.0F, 7.5F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(1.0F)
          curveTo(8.0F, 8.776F, 7.776F, 9.0F, 7.5F, 9.0F)
          reflectiveCurveTo(7.0F, 8.776F, 7.0F, 8.5F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(6.0F)
          curveTo(5.724F, 7.5F, 5.5F, 7.276F, 5.5F, 7.0F)
          close()        
      }
    }
    return _addSubtractCircle20!!
  }

private var _addSubtractCircle20: ImageVector? = null
