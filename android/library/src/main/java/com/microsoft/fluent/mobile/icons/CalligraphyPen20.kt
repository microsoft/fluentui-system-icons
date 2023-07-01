package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalligraphyPen20: ImageVector
  get() {
    if (_calligraphyPen20 != null) {
      return _calligraphyPen20!!
    }
    _calligraphyPen20 = fluentIcon(name = "Filled.CalligraphyPen20", 20f) {
      materialPath {
          moveTo(6.0F, 2.5F)
          curveTo(6.0F, 2.224F, 5.776F, 2.0F, 5.5F, 2.0F)
          reflectiveCurveTo(5.0F, 2.224F, 5.0F, 2.5F)
          verticalLineToRelative(2.0F)
          curveTo(5.0F, 5.328F, 5.672F, 6.0F, 6.5F, 6.0F)
          horizontalLineToRelative(0.2F)
          lineTo(5.24F, 9.08F)
          curveToRelative(-0.353F, 0.748F, -0.315F, 1.622F, 0.103F, 2.335F)
          lineToRelative(3.463F, 5.907F)
          curveTo(8.966F, 17.595F, 9.213F, 17.8F, 9.5F, 17.91F)
          verticalLineToRelative(-7.044F)
          curveTo(9.201F, 10.693F, 9.0F, 10.37F, 9.0F, 10.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.37F, -0.201F, 0.693F, -0.5F, 0.866F)
          verticalLineToRelative(7.036F)
          curveToRelative(0.278F, -0.112F, 0.518F, -0.313F, 0.674F, -0.58F)
          lineToRelative(3.463F, -5.907F)
          curveToRelative(0.418F, -0.713F, 0.456F, -1.587F, 0.102F, -2.334F)
          lineTo(13.28F, 6.0F)
          horizontalLineToRelative(0.22F)
          curveTo(14.328F, 6.0F, 15.0F, 5.328F, 15.0F, 4.5F)
          verticalLineToRelative(-2.0F)
          curveTo(15.0F, 2.224F, 14.776F, 2.0F, 14.5F, 2.0F)
          reflectiveCurveTo(14.0F, 2.224F, 14.0F, 2.5F)
          verticalLineToRelative(2.0F)
          curveTo(14.0F, 4.776F, 13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 5.0F, 6.0F, 4.776F, 6.0F, 4.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _calligraphyPen20!!
  }

private var _calligraphyPen20: ImageVector? = null
