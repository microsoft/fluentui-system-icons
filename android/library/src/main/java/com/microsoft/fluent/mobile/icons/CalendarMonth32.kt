package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarMonth32: ImageVector
  get() {
    if (_calendarMonth32 != null) {
      return _calendarMonth32!!
    }
    _calendarMonth32 = fluentIcon(name = "Regular.CalendarMonth32", 32f) {
      materialPath {
          moveTo(12.0F, 12.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(9.0F, 13.328F, 9.0F, 12.5F)
          reflectiveCurveTo(9.672F, 11.0F, 10.5F, 11.0F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          close()
          moveTo(10.5F, 20.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(11.328F, 17.0F, 10.5F, 17.0F)
          reflectiveCurveTo(9.0F, 17.672F, 9.0F, 18.5F)
          reflectiveCurveTo(9.672F, 20.0F, 10.5F, 20.0F)
          close()
          moveToRelative(5.5F, 0.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(16.828F, 17.0F, 16.0F, 17.0F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveTo(15.172F, 20.0F, 16.0F, 20.0F)
          close()
          moveToRelative(0.0F, -6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(16.828F, 11.0F, 16.0F, 11.0F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveTo(15.172F, 14.0F, 16.0F, 14.0F)
          close()
          moveToRelative(5.5F, 0.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(22.328F, 11.0F, 21.5F, 11.0F)
          reflectiveCurveTo(20.0F, 11.672F, 20.0F, 12.5F)
          reflectiveCurveToRelative(0.672F, 1.5F, 1.5F, 1.5F)
          close()
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-17.0F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(5.0F, 7.5F)
          curveTo(5.0F, 6.12F, 6.12F, 5.0F, 7.5F, 5.0F)
          horizontalLineToRelative(17.0F)
          curveTo(25.88F, 5.0F, 27.0F, 6.12F, 27.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(6.12F, 27.0F, 5.0F, 25.88F, 5.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          close()        
      }
    }
    return _calendarMonth32!!
  }

private var _calendarMonth32: ImageVector? = null
