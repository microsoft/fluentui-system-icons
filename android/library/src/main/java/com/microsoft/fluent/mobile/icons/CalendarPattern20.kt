package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarPattern20: ImageVector
  get() {
    if (_calendarPattern20 != null) {
      return _calendarPattern20!!
    }
    _calendarPattern20 = fluentIcon(name = "Filled.CalendarPattern20", 20f) {
      materialPath {
          moveTo(5.75F, 3.0F)
          horizontalLineToRelative(8.5F)
          curveTo(15.769F, 3.0F, 17.0F, 4.231F, 17.0F, 5.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(4.231F, 17.0F, 3.0F, 15.769F, 3.0F, 14.25F)
          verticalLineToRelative(-8.5F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          close()
          moveTo(4.5F, 5.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(11.0F)
          verticalLineTo(5.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-8.5F)
          curveTo(5.06F, 4.5F, 4.5F, 5.06F, 4.5F, 5.75F)
          close()
          moveTo(14.707F, 8.0F)
          lineToRelative(-4.0F, 4.0F)
          horizontalLineToRelative(2.586F)
          lineTo(15.5F, 9.793F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-0.793F)
          close()
          moveToRelative(-1.414F, 0.0F)
          horizontalLineToRelative(-2.586F)
          lineToRelative(-4.0F, 4.0F)
          horizontalLineToRelative(2.586F)
          lineToRelative(4.0F, -4.0F)
          close()
          moveToRelative(-8.0F, 4.0F)
          lineToRelative(4.0F, -4.0F)
          horizontalLineTo(6.707F)
          lineTo(4.5F, 10.207F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(0.793F)
          close()
          moveTo(4.5F, 8.793F)
          lineTo(5.293F, 8.0F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(0.793F)
          close()
          moveTo(14.707F, 12.0F)
          horizontalLineTo(15.5F)
          verticalLineToRelative(-0.793F)
          lineTo(14.707F, 12.0F)
          close()        
      }
    }
    return _calendarPattern20!!
  }

private var _calendarPattern20: ImageVector? = null
