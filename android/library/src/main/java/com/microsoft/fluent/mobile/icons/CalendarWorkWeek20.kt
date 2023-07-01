package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarWorkWeek20: ImageVector
  get() {
    if (_calendarWorkWeek20 != null) {
      return _calendarWorkWeek20!!
    }
    _calendarWorkWeek20 = fluentIcon(name = "Regular.CalendarWorkWeek20", 20f) {
      materialPath {
          moveTo(6.5F, 6.0F)
          curveTo(6.224F, 6.0F, 6.0F, 6.224F, 6.0F, 6.5F)
          verticalLineToRelative(3.0F)
          curveTo(6.0F, 9.776F, 6.224F, 10.0F, 6.5F, 10.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveTo(14.0F, 6.224F, 13.776F, 6.0F, 13.5F, 6.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(7.0F, 9.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(10.0F, -3.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(5.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.328F, 4.0F, 16.0F, 4.672F, 16.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 16.0F, 4.0F, 15.328F, 4.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(4.0F, 4.672F, 4.672F, 4.0F, 5.5F, 4.0F)
          close()        
      }
    }
    return _calendarWorkWeek20!!
  }

private var _calendarWorkWeek20: ImageVector? = null
