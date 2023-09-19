package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarLtr32: ImageVector
  get() {
    if (_calendarLtr32 != null) {
      return _calendarLtr32!!
    }
    _calendarLtr32 = fluentIcon(name = "Filled.CalendarLtr32", 32f) {
      materialPath {
          moveTo(9.0F, 4.0F)
          curveTo(6.239F, 4.0F, 4.0F, 6.239F, 4.0F, 9.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(24.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(4.0F, 23.0F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(24.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(6.5F, -5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(11.328F, 15.0F, 10.5F, 15.0F)
          reflectiveCurveTo(9.0F, 15.672F, 9.0F, 16.5F)
          reflectiveCurveTo(9.672F, 18.0F, 10.5F, 18.0F)
          close()
          moveToRelative(1.5F, 3.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveTo(9.0F, 20.672F, 9.0F, 21.5F)
          reflectiveCurveTo(9.672F, 23.0F, 10.5F, 23.0F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          close()
          moveToRelative(4.0F, 1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(16.828F, 20.0F, 16.0F, 20.0F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveTo(15.172F, 23.0F, 16.0F, 23.0F)
          close()
          moveToRelative(1.5F, -6.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveTo(15.172F, 18.0F, 16.0F, 18.0F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          close()
          moveToRelative(4.0F, 1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(22.328F, 15.0F, 21.5F, 15.0F)
          reflectiveCurveTo(20.0F, 15.672F, 20.0F, 16.5F)
          reflectiveCurveToRelative(0.672F, 1.5F, 1.5F, 1.5F)
          close()        
      }
    }
    return _calendarLtr32!!
  }

private var _calendarLtr32: ImageVector? = null
