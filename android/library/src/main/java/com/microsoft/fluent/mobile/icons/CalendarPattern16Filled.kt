package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarPattern16: ImageVector
  get() {
    if (_calendarPattern16 != null) {
      return _calendarPattern16!!
    }
    _calendarPattern16 = fluentIcon(name = "Filled.CalendarPattern16", 16f) {
      materialPath {
          moveTo(4.75F, 2.0F)
          curveTo(3.231F, 2.0F, 2.0F, 3.231F, 2.0F, 4.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 12.769F, 3.231F, 14.0F, 4.75F, 14.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-6.5F)
          curveTo(14.0F, 3.231F, 12.769F, 2.0F, 11.25F, 2.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(3.5F, 4.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineTo(4.75F)
          close()
          moveTo(11.707F, 7.0F)
          horizontalLineTo(12.5F)
          verticalLineToRelative(0.793F)
          lineTo(10.293F, 10.0F)
          horizontalLineTo(8.707F)
          lineToRelative(3.0F, -3.0F)
          close()
          moveToRelative(-1.414F, 0.0F)
          lineToRelative(-3.0F, 3.0F)
          horizontalLineTo(5.707F)
          lineToRelative(3.0F, -3.0F)
          horizontalLineToRelative(1.586F)
          close()
          moveToRelative(-6.0F, 3.0F)
          horizontalLineTo(3.5F)
          verticalLineTo(9.207F)
          lineTo(5.707F, 7.0F)
          horizontalLineToRelative(1.586F)
          lineToRelative(-3.0F, 3.0F)
          close()
          moveTo(3.5F, 7.793F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(0.793F)
          lineTo(3.5F, 7.793F)
          close()
          moveTo(11.707F, 10.0F)
          lineTo(12.5F, 9.207F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-0.793F)
          close()        
      }
    }
    return _calendarPattern16!!
  }

private var _calendarPattern16: ImageVector? = null
