package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarToday20: ImageVector
  get() {
    if (_calendarToday20 != null) {
      return _calendarToday20!!
    }
    _calendarToday20 = fluentIcon(name = "Regular.CalendarToday20", 20f) {
      materialPath {
          moveTo(14.5F, 3.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(7.5F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 4.0F, 4.0F, 4.672F, 4.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(5.5F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          close()
          moveTo(11.0F, 9.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveTo(9.0F, 9.552F, 9.0F, 9.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(0.884F, 5.07F)
          curveToRelative(-0.177F, 0.212F, -0.492F, 0.24F, -0.704F, 0.064F)
          lineToRelative(-0.68F, -0.566F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-3.932F)
          lineToRelative(-0.68F, 0.566F)
          curveToRelative(-0.212F, 0.177F, -0.527F, 0.148F, -0.704F, -0.064F)
          curveToRelative(-0.177F, -0.212F, -0.148F, -0.527F, 0.064F, -0.704F)
          lineToRelative(1.5F, -1.25F)
          curveToRelative(0.185F, -0.155F, 0.455F, -0.155F, 0.64F, 0.0F)
          lineToRelative(1.5F, 1.25F)
          curveToRelative(0.212F, 0.177F, 0.24F, 0.492F, 0.064F, 0.704F)
          close()        
      }
    }
    return _calendarToday20!!
  }

private var _calendarToday20: ImageVector? = null
