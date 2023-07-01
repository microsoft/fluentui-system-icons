package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarPattern16: ImageVector
  get() {
    if (_calendarPattern16 != null) {
      return _calendarPattern16!!
    }
    _calendarPattern16 = fluentIcon(name = "Regular.CalendarPattern16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.5F)
          close()
          moveTo(11.707F, 7.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(0.293F)
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
          horizontalLineTo(3.0F)
          verticalLineTo(9.707F)
          lineTo(5.707F, 7.0F)
          horizontalLineToRelative(1.586F)
          lineToRelative(-3.0F, 3.0F)
          close()
          moveTo(3.0F, 8.293F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(1.293F)
          lineTo(3.0F, 8.293F)
          close()
          moveTo(11.707F, 10.0F)
          lineTo(13.0F, 8.707F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-1.293F)
          close()        
      }
    }
    return _calendarPattern16!!
  }

private var _calendarPattern16: ImageVector? = null
