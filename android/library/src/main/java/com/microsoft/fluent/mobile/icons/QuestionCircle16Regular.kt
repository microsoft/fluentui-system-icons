package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.QuestionCircle16: ImageVector
  get() {
    if (_questionCircle16 != null) {
      return _questionCircle16!!
    }
    _questionCircle16 = fluentIcon(name = "Regular.QuestionCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveToRelative(0.0F, 7.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(8.414F, 12.0F, 8.0F, 12.0F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(7.586F, 10.5F, 8.0F, 10.5F)
          close()
          moveToRelative(0.0F, -6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          curveToRelative(0.0F, 0.73F, -0.212F, 1.14F, -0.754F, 1.708F)
          lineToRelative(-0.264F, 0.27F)
          curveTo(8.605F, 8.87F, 8.5F, 9.082F, 8.5F, 9.5F)
          curveTo(8.5F, 9.776F, 8.276F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveTo(7.5F, 9.776F, 7.5F, 9.5F)
          curveToRelative(0.0F, -0.73F, 0.212F, -1.14F, 0.754F, -1.708F)
          lineToRelative(0.264F, -0.27F)
          curveTo(8.895F, 7.13F, 9.0F, 6.918F, 9.0F, 6.5F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          curveTo(7.0F, 6.776F, 6.776F, 7.0F, 6.5F, 7.0F)
          reflectiveCurveTo(6.0F, 6.776F, 6.0F, 6.5F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _questionCircle16!!
  }

private var _questionCircle16: ImageVector? = null
