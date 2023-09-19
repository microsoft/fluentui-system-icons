package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarMail16: ImageVector
  get() {
    if (_calendarMail16 != null) {
      return _calendarMail16!!
    }
    _calendarMail16 = fluentIcon(name = "Filled.CalendarMail16", 16f) {
      materialPath {
          moveTo(1.05F, 3.0F)
          horizontalLineToRelative(9.9F)
          curveTo(10.718F, 1.859F, 9.71F, 1.0F, 8.5F, 1.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(2.29F, 1.0F, 1.282F, 1.859F, 1.05F, 3.0F)
          close()
          moveTo(11.0F, 4.0F)
          horizontalLineTo(1.0F)
          verticalLineToRelative(4.5F)
          curveTo(1.0F, 9.88F, 2.12F, 11.0F, 3.5F, 11.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(8.5F)
          curveTo(4.0F, 7.12F, 5.12F, 6.0F, 6.5F, 6.0F)
          horizontalLineTo(11.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(-1.224F, 7.947F)
          lineTo(5.0F, 9.56F)
          verticalLineToRelative(3.94F)
          curveTo(5.0F, 14.328F, 5.672F, 15.0F, 6.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(9.559F)
          lineToRelative(-4.776F, 2.388F)
          curveToRelative(-0.141F, 0.07F, -0.307F, 0.07F, -0.448F, 0.0F)
          close()
          moveTo(6.5F, 7.0F)
          curveTo(5.691F, 7.0F, 5.032F, 7.64F, 5.001F, 8.441F)
          lineToRelative(4.999F, 2.5F)
          lineToRelative(4.999F, -2.5F)
          curveTo(14.969F, 7.641F, 14.309F, 7.0F, 13.5F, 7.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _calendarMail16!!
  }

private var _calendarMail16: ImageVector? = null
