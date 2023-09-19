package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.QuestionCircle24: ImageVector
  get() {
    if (_questionCircle24 != null) {
      return _questionCircle24!!
    }
    _questionCircle24 = fluentIcon(name = "Filled.QuestionCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.478F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.522F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 13.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(0.0F, -8.75F)
          curveToRelative(-1.519F, 0.0F, -2.75F, 1.231F, -2.75F, 2.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.648F)
          lineTo(10.75F, 9.5F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          curveToRelative(0.0F, 0.539F, -0.135F, 0.805F, -0.645F, 1.332F)
          lineTo(12.47F, 10.97F)
          curveToRelative(-0.878F, 0.878F, -1.22F, 1.447F, -1.22F, 2.53F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.539F, 0.135F, -0.805F, 0.645F, -1.332F)
          lineToRelative(0.135F, -0.138F)
          curveToRelative(0.878F, -0.878F, 1.22F, -1.447F, 1.22F, -2.53F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          close()        
      }
    }
    return _questionCircle24!!
  }

private var _questionCircle24: ImageVector? = null
