package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarEmpty48: ImageVector
  get() {
    if (_calendarEmpty48 != null) {
      return _calendarEmpty48!!
    }
    _calendarEmpty48 = fluentIcon(name = "Regular.CalendarEmpty48", 48f) {
      materialPath {
          moveTo(6.0F, 12.25F)
          curveTo(6.0F, 8.798F, 8.798F, 6.0F, 12.25F, 6.0F)
          horizontalLineToRelative(23.5F)
          curveTo(39.202F, 6.0F, 42.0F, 8.798F, 42.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineToRelative(-23.5F)
          curveTo(8.798F, 42.0F, 6.0F, 39.202F, 6.0F, 35.75F)
          verticalLineToRelative(-23.5F)
          close()
          moveToRelative(6.25F, -3.75F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(31.0F)
          verticalLineToRelative(-1.75F)
          curveToRelative(0.0F, -2.071F, -1.679F, -3.75F, -3.75F, -3.75F)
          horizontalLineToRelative(-23.5F)
          close()
          moveTo(8.5F, 35.75F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineToRelative(23.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(16.5F)
          horizontalLineToRelative(-31.0F)
          verticalLineToRelative(19.25F)
          close()        
      }
    }
    return _calendarEmpty48!!
  }

private var _calendarEmpty48: ImageVector? = null
