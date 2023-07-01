package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarEmpty28: ImageVector
  get() {
    if (_calendarEmpty28 != null) {
      return _calendarEmpty28!!
    }
    _calendarEmpty28 = fluentIcon(name = "Filled.CalendarEmpty28", 28f) {
      materialPath {
          moveTo(25.0F, 9.5F)
          verticalLineToRelative(12.25F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 25.0F, 3.0F, 23.545F, 3.0F, 21.75F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(22.0F)
          close()
          moveTo(21.75F, 3.0F)
          curveTo(23.545F, 3.0F, 25.0F, 4.455F, 25.0F, 6.25F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(15.5F)
          close()        
      }
    }
    return _calendarEmpty28!!
  }

private var _calendarEmpty28: ImageVector? = null
