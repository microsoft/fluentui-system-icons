package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.QuestionCircle32: ImageVector
  get() {
    if (_questionCircle32 != null) {
      return _questionCircle32!!
    }
    _questionCircle32 = fluentIcon(name = "Filled.QuestionCircle32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveToRelative(7.732F, 0.0F, 14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          reflectiveCurveTo(2.0F, 23.732F, 2.0F, 16.0F)
          reflectiveCurveTo(8.268F, 2.0F, 16.0F, 2.0F)
          close()
          moveToRelative(1.5F, 20.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveToRelative(0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          close()
          moveTo(14.0F, 12.0F)
          curveToRelative(0.0F, -0.537F, 0.18F, -1.041F, 0.497F, -1.398F)
          curveTo(14.798F, 10.263F, 15.271F, 10.0F, 16.0F, 10.0F)
          curveToRelative(1.308F, 0.0F, 2.382F, 1.348F, 2.03F, 2.758F)
          curveToRelative(-0.18F, 0.722F, -0.61F, 1.135F, -1.257F, 1.756F)
          lineToRelative(-0.178F, 0.17F)
          curveTo(15.866F, 15.39F, 15.0F, 16.328F, 15.0F, 18.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.827F, 0.353F, -1.267F, 0.985F, -1.877F)
          lineToRelative(0.191F, -0.182F)
          curveToRelative(0.614F, -0.58F, 1.466F, -1.385F, 1.794F, -2.699F)
          curveTo(20.618F, 10.652F, 18.692F, 8.0F, 16.0F, 8.0F)
          curveToRelative(-1.271F, 0.0F, -2.298F, 0.487F, -2.997F, 1.273F)
          curveTo(12.32F, 10.041F, 12.0F, 11.037F, 12.0F, 12.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _questionCircle32!!
  }

private var _questionCircle32: ImageVector? = null
