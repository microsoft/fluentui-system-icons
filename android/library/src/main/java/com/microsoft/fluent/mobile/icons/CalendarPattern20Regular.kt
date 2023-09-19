package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarPattern20: ImageVector
  get() {
    if (_calendarPattern20 != null) {
      return _calendarPattern20!!
    }
    _calendarPattern20 = fluentIcon(name = "Regular.CalendarPattern20", 20f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          close()
          moveTo(4.0F, 5.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(5.5F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 4.0F, 4.0F, 4.672F, 4.0F, 5.5F)
          close()
          moveTo(14.707F, 8.0F)
          lineToRelative(-4.0F, 4.0F)
          horizontalLineToRelative(2.586F)
          lineTo(16.0F, 9.293F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-1.293F)
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
          lineTo(4.0F, 10.707F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(1.293F)
          close()
          moveTo(4.0F, 9.293F)
          lineTo(5.293F, 8.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.293F)
          close()
          moveTo(14.707F, 12.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(-1.293F)
          lineTo(14.707F, 12.0F)
          close()        
      }
    }
    return _calendarPattern20!!
  }

private var _calendarPattern20: ImageVector? = null
