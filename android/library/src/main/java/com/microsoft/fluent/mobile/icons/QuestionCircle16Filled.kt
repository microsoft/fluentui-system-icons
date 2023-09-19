package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.QuestionCircle16: ImageVector
  get() {
    if (_questionCircle16 != null) {
      return _questionCircle16!!
    }
    _questionCircle16 = fluentIcon(name = "Filled.QuestionCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 8.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(7.586F, 12.0F, 8.0F, 12.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(8.414F, 10.5F, 8.0F, 10.5F)
          close()
          moveToRelative(0.0F, -6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          curveTo(6.0F, 6.776F, 6.224F, 7.0F, 6.5F, 7.0F)
          reflectiveCurveTo(7.0F, 6.776F, 7.0F, 6.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.37F, -0.083F, 0.58F, -0.366F, 0.898F)
          lineTo(8.518F, 7.523F)
          lineToRelative(-0.264F, 0.27F)
          curveTo(7.712F, 8.36F, 7.5F, 8.77F, 7.5F, 9.5F)
          curveTo(7.5F, 9.776F, 7.724F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.37F, 0.083F, -0.58F, 0.366F, -0.898F)
          lineToRelative(0.116F, -0.125F)
          lineToRelative(0.264F, -0.27F)
          curveTo(9.788F, 7.64F, 10.0F, 7.23F, 10.0F, 6.5F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()        
      }
    }
    return _questionCircle16!!
  }

private var _questionCircle16: ImageVector? = null
