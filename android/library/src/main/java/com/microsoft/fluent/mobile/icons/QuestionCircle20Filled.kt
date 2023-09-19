package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.QuestionCircle20: ImageVector
  get() {
    if (_questionCircle20 != null) {
      return _questionCircle20!!
    }
    _questionCircle20 = fluentIcon(name = "Filled.QuestionCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(0.0F, 11.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(9.586F, 15.0F, 10.0F, 15.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.414F, 13.5F, 10.0F, 13.5F)
          close()
          moveToRelative(0.0F, -8.0F)
          curveTo(8.62F, 5.5F, 7.5F, 6.62F, 7.5F, 8.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(8.5F, 8.276F, 8.5F, 8.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          curveToRelative(0.0F, 0.37F, -0.134F, 0.716F, -0.368F, 0.985F)
          lineToRelative(-0.106F, 0.11F)
          lineToRelative(-0.118F, 0.1F)
          lineToRelative(-0.247F, 0.184F)
          curveToRelative(-0.129F, 0.1F, -0.245F, 0.204F, -0.356F, 0.323F)
          curveTo(9.793F, 10.248F, 9.5F, 10.988F, 9.5F, 12.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.758F, 0.196F, -1.254F, 0.535F, -1.614F)
          lineToRelative(0.075F, -0.076F)
          lineToRelative(0.08F, -0.073F)
          lineToRelative(0.088F, -0.072F)
          lineToRelative(0.219F, -0.163F)
          lineToRelative(0.154F, -0.125F)
          curveTo(12.185F, 9.407F, 12.5F, 8.73F, 12.5F, 8.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          close()        
      }
    }
    return _questionCircle20!!
  }

private var _questionCircle20: ImageVector? = null
