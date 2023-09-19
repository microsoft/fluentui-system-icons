package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarWeekNumbers20: ImageVector
  get() {
    if (_calendarWeekNumbers20 != null) {
      return _calendarWeekNumbers20!!
    }
    _calendarWeekNumbers20 = fluentIcon(name = "Filled.CalendarWeekNumbers20", 20f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(7.0F, 6.5F)
          verticalLineToRelative(1.0F)
          curveTo(7.0F, 7.776F, 6.776F, 8.0F, 6.5F, 8.0F)
          reflectiveCurveTo(6.0F, 7.776F, 6.0F, 7.5F)
          verticalLineToRelative(-1.0F)
          curveTo(6.0F, 6.224F, 6.224F, 6.0F, 6.5F, 6.0F)
          reflectiveCurveTo(7.0F, 6.224F, 7.0F, 6.5F)
          close()
          moveTo(6.5F, 9.0F)
          curveTo(6.776F, 9.0F, 7.0F, 9.224F, 7.0F, 9.5F)
          verticalLineToRelative(1.0F)
          curveTo(7.0F, 10.776F, 6.776F, 11.0F, 6.5F, 11.0F)
          reflectiveCurveTo(6.0F, 10.776F, 6.0F, 10.5F)
          verticalLineToRelative(-1.0F)
          curveTo(6.0F, 9.224F, 6.224F, 9.0F, 6.5F, 9.0F)
          close()
          moveTo(7.0F, 12.5F)
          verticalLineToRelative(1.0F)
          curveTo(7.0F, 13.776F, 6.776F, 14.0F, 6.5F, 14.0F)
          reflectiveCurveTo(6.0F, 13.776F, 6.0F, 13.5F)
          verticalLineToRelative(-1.0F)
          curveTo(6.0F, 12.224F, 6.224F, 12.0F, 6.5F, 12.0F)
          reflectiveCurveTo(7.0F, 12.224F, 7.0F, 12.5F)
          close()        
      }
    }
    return _calendarWeekNumbers20!!
  }

private var _calendarWeekNumbers20: ImageVector? = null
