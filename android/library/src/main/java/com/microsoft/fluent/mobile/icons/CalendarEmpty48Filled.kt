package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarEmpty48: ImageVector
  get() {
    if (_calendarEmpty48 != null) {
      return _calendarEmpty48!!
    }
    _calendarEmpty48 = fluentIcon(name = "Filled.CalendarEmpty48", 48f) {
      materialPath {
          moveTo(6.0F, 12.25F)
          curveTo(6.0F, 8.798F, 8.798F, 6.0F, 12.25F, 6.0F)
          horizontalLineToRelative(23.5F)
          curveTo(39.202F, 6.0F, 42.0F, 8.798F, 42.0F, 12.25F)
          verticalLineTo(14.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-1.75F)
          close()
          moveToRelative(0.0F, 4.25F)
          verticalLineToRelative(19.25F)
          curveTo(6.0F, 39.202F, 8.798F, 42.0F, 12.25F, 42.0F)
          horizontalLineToRelative(23.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineTo(16.5F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _calendarEmpty48!!
  }

private var _calendarEmpty48: ImageVector? = null
