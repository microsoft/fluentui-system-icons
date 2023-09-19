package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarMultiple20: ImageVector
  get() {
    if (_calendarMultiple20 != null) {
      return _calendarMultiple20!!
    }
    _calendarMultiple20 = fluentIcon(name = "Regular.CalendarMultiple20", 20f) {
      materialPath {
          moveTo(16.0F, 4.5F)
          curveTo(16.0F, 3.12F, 14.88F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(3.0F, 6.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.672F, 15.0F, 3.0F, 14.328F, 3.0F, 13.5F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(1.5F, -3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(14.328F, 3.0F, 15.0F, 3.672F, 15.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          close()
          moveTo(5.0F, 17.0F)
          curveToRelative(0.456F, 0.607F, 1.182F, 1.0F, 2.0F, 1.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -0.818F, -0.393F, -1.544F, -1.0F, -2.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _calendarMultiple20!!
  }

private var _calendarMultiple20: ImageVector? = null
