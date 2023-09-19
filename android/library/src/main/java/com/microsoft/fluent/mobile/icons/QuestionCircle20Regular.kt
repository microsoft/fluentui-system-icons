package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.QuestionCircle20: ImageVector
  get() {
    if (_questionCircle20 != null) {
      return _questionCircle20!!
    }
    _questionCircle20 = fluentIcon(name = "Regular.QuestionCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveToRelative(0.0F, 10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(10.414F, 15.0F, 10.0F, 15.0F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(9.586F, 13.5F, 10.0F, 13.5F)
          close()
          moveToRelative(0.0F, -8.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          curveToRelative(0.0F, 0.73F, -0.315F, 1.408F, -0.849F, 1.877F)
          lineToRelative(-0.154F, 0.125F)
          lineToRelative(-0.219F, 0.163F)
          lineToRelative(-0.087F, 0.072F)
          curveToRelative(-0.056F, 0.048F, -0.107F, 0.097F, -0.156F, 0.149F)
          curveTo(10.696F, 10.746F, 10.5F, 11.242F, 10.5F, 12.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(9.5F, 12.276F, 9.5F, 12.0F)
          curveToRelative(0.0F, -1.012F, 0.293F, -1.752F, 0.805F, -2.298F)
          curveToRelative(0.111F, -0.119F, 0.227F, -0.222F, 0.356F, -0.323F)
          lineToRelative(0.247F, -0.185F)
          lineToRelative(0.118F, -0.1F)
          curveTo(11.325F, 8.815F, 11.5F, 8.423F, 11.5F, 8.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveTo(8.5F, 7.172F, 8.5F, 8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(7.5F, 8.276F, 7.5F, 8.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          close()        
      }
    }
    return _questionCircle20!!
  }

private var _questionCircle20: ImageVector? = null
