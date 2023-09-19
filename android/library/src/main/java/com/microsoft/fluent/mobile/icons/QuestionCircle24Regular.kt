package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.QuestionCircle24: ImageVector
  get() {
    if (_questionCircle24 != null) {
      return _questionCircle24!!
    }
    _questionCircle24 = fluentIcon(name = "Regular.QuestionCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.478F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.522F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.667F)
          curveToRelative(-4.595F, 0.0F, -8.333F, 3.738F, -8.333F, 8.333F)
          curveToRelative(0.0F, 4.595F, 3.738F, 8.333F, 8.333F, 8.333F)
          curveToRelative(4.595F, 0.0F, 8.333F, -3.738F, 8.333F, -8.333F)
          curveToRelative(0.0F, -4.595F, -3.738F, -8.333F, -8.333F, -8.333F)
          close()
          moveTo(12.0F, 15.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.0F, -8.75F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          curveToRelative(0.0F, 1.01F, -0.297F, 1.574F, -1.051F, 2.359F)
          lineTo(13.53F, 12.03F)
          curveToRelative(-0.622F, 0.622F, -0.78F, 0.886F, -0.78F, 1.47F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -1.01F, 0.297F, -1.574F, 1.051F, -2.359F)
          lineToRelative(0.169F, -0.171F)
          curveToRelative(0.622F, -0.622F, 0.78F, -0.886F, 0.78F, -1.47F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          curveToRelative(-0.647F, 0.0F, -1.18F, 0.492F, -1.243F, 1.122F)
          lineTo(10.75F, 9.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.25F, 9.914F, 9.25F, 9.5F)
          curveToRelative(0.0F, -1.519F, 1.231F, -2.75F, 2.75F, -2.75F)
          close()        
      }
    }
    return _questionCircle24!!
  }

private var _questionCircle24: ImageVector? = null
