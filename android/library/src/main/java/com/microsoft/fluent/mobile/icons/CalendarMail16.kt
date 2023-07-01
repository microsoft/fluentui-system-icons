package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarMail16: ImageVector
  get() {
    if (_calendarMail16 != null) {
      return _calendarMail16!!
    }
    _calendarMail16 = fluentIcon(name = "Regular.CalendarMail16", 16f) {
      materialPath {
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 2.12F, 2.12F, 1.0F, 3.5F, 1.0F)
          horizontalLineToRelative(5.0F)
          curveTo(9.88F, 1.0F, 11.0F, 2.12F, 11.0F, 3.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(4.5F)
          curveTo(2.0F, 9.328F, 2.672F, 10.0F, 3.5F, 10.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 11.0F, 1.0F, 9.88F, 1.0F, 8.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(3.5F, 2.0F)
          curveTo(2.847F, 2.0F, 2.291F, 2.417F, 2.085F, 3.0F)
          horizontalLineToRelative(7.83F)
          curveTo(9.709F, 2.417F, 9.153F, 2.0F, 8.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(5.0F, 8.5F)
          curveTo(5.0F, 7.672F, 5.672F, 7.0F, 6.5F, 7.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.328F, 7.0F, 15.0F, 7.672F, 15.0F, 8.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.672F, 15.0F, 5.0F, 14.328F, 5.0F, 13.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(6.5F, 8.0F)
          curveTo(6.224F, 8.0F, 6.0F, 8.224F, 6.0F, 8.5F)
          verticalLineToRelative(0.441F)
          lineToRelative(4.0F, 2.0F)
          lineToRelative(4.0F, -2.0F)
          verticalLineTo(8.5F)
          curveTo(14.0F, 8.224F, 13.776F, 8.0F, 13.5F, 8.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(6.0F, 13.5F)
          curveTo(6.0F, 13.776F, 6.224F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.441F)
          lineToRelative(-3.776F, 1.888F)
          curveToRelative(-0.141F, 0.07F, -0.307F, 0.07F, -0.448F, 0.0F)
          lineTo(6.0F, 10.06F)
          verticalLineToRelative(3.44F)
          close()        
      }
    }
    return _calendarMail16!!
  }

private var _calendarMail16: ImageVector? = null
