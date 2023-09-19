package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarMultiple16: ImageVector
  get() {
    if (_calendarMultiple16 != null) {
      return _calendarMultiple16!!
    }
    _calendarMultiple16 = fluentIcon(name = "Regular.CalendarMultiple16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 10.88F, 3.12F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(12.0F, 3.12F, 10.88F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(3.085F, 4.0F)
          curveTo(3.291F, 3.417F, 3.847F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.653F, 0.0F, 1.209F, 0.417F, 1.415F, 1.0F)
          horizontalLineToRelative(-7.83F)
          close()
          moveTo(3.0F, 5.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(3.672F, 11.0F, 3.0F, 10.328F, 3.0F, 9.5F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(3.5F, 9.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          horizontalLineToRelative(5.25F)
          curveTo(11.545F, 13.0F, 13.0F, 11.545F, 13.0F, 9.75F)
          verticalLineTo(4.5F)
          curveToRelative(0.607F, 0.456F, 1.0F, 1.182F, 1.0F, 2.0F)
          verticalLineToRelative(3.25F)
          curveTo(14.0F, 12.097F, 12.097F, 14.0F, 9.75F, 14.0F)
          horizontalLineTo(6.5F)
          close()        
      }
    }
    return _calendarMultiple16!!
  }

private var _calendarMultiple16: ImageVector? = null
