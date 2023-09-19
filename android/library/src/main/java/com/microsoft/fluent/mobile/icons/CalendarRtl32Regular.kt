package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarRtl32: ImageVector
  get() {
    if (_calendarRtl32 != null) {
      return _calendarRtl32!!
    }
    _calendarRtl32 = fluentIcon(name = "Regular.CalendarRtl32", 32f) {
      materialPath {
          moveTo(21.5F, 18.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          close()
          moveTo(20.0F, 21.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveToRelative(-0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          close()
          moveTo(16.0F, 23.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveTo(15.172F, 20.0F, 16.0F, 20.0F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(16.828F, 23.0F, 16.0F, 23.0F)
          close()
          moveToRelative(-1.5F, -6.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(16.828F, 15.0F, 16.0F, 15.0F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          close()
          moveToRelative(-4.0F, 1.5F)
          curveTo(9.672F, 18.0F, 9.0F, 17.328F, 9.0F, 16.5F)
          reflectiveCurveTo(9.672F, 15.0F, 10.5F, 15.0F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          close()
          moveTo(28.0F, 9.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineTo(9.0F)
          curveTo(6.239F, 4.0F, 4.0F, 6.239F, 4.0F, 9.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(-5.0F, -3.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(14.0F)
          close()
          moveToRelative(3.0F, 17.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(20.0F)
          verticalLineToRelative(11.0F)
          close()        
      }
    }
    return _calendarRtl32!!
  }

private var _calendarRtl32: ImageVector? = null
