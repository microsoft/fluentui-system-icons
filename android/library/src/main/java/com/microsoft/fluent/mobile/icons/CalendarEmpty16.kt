package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarEmpty16: ImageVector
  get() {
    if (_calendarEmpty16 != null) {
      return _calendarEmpty16!!
    }
    _calendarEmpty16 = fluentIcon(name = "Filled.CalendarEmpty16", 16f) {
      materialPath {
          moveTo(14.0F, 6.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(12.0F)
          close()
          moveToRelative(-2.5F, -4.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          close()        
      }
    }
    return _calendarEmpty16!!
  }

private var _calendarEmpty16: ImageVector? = null
