package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NumberCircle120: ImageVector
  get() {
    if (_numberCircle120 != null) {
      return _numberCircle120!!
    }
    _numberCircle120 = fluentIcon(name = "Filled.NumberCircle120", 120f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(1.0F, -11.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(10.0F, 13.776F, 10.0F, 13.5F)
          verticalLineTo(8.477F)
          curveTo(9.622F, 8.96F, 9.182F, 9.397F, 8.777F, 9.666F)
          curveToRelative(-0.23F, 0.153F, -0.54F, 0.091F, -0.693F, -0.139F)
          curveToRelative(-0.153F, -0.23F, -0.091F, -0.54F, 0.139F, -0.693F)
          curveToRelative(0.313F, -0.209F, 0.711F, -0.6F, 1.064F, -1.071F)
          curveToRelative(0.355F, -0.473F, 0.625F, -0.974F, 0.728F, -1.384F)
          curveToRelative(0.061F, -0.245F, 0.295F, -0.406F, 0.546F, -0.375F)
          curveToRelative(0.25F, 0.03F, 0.44F, 0.244F, 0.44F, 0.496F)
          close()        
      }
    }
    return _numberCircle120!!
  }

private var _numberCircle120: ImageVector? = null
