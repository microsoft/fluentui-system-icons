package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarMultiple32: ImageVector
  get() {
    if (_calendarMultiple32 != null) {
      return _calendarMultiple32!!
    }
    _calendarMultiple32 = fluentIcon(name = "Regular.CalendarMultiple32", 32f) {
      materialPath {
          moveTo(2.0F, 6.5F)
          curveTo(2.0F, 4.015F, 4.015F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(15.0F)
          curveTo(23.985F, 2.0F, 26.0F, 4.015F, 26.0F, 6.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(4.015F, 26.0F, 2.0F, 23.985F, 2.0F, 21.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveTo(6.5F, 4.0F)
          curveTo(5.12F, 4.0F, 4.0F, 5.12F, 4.0F, 6.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(20.0F)
          verticalLineTo(6.5F)
          curveTo(24.0F, 5.12F, 22.88F, 4.0F, 21.5F, 4.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveTo(4.0F, 21.5F)
          curveTo(4.0F, 22.88F, 5.12F, 24.0F, 6.5F, 24.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(12.5F)
          close()
          moveToRelative(24.0F, -12.0F)
          verticalLineTo(5.757F)
          curveToRelative(1.206F, 0.808F, 2.0F, 2.183F, 2.0F, 3.743F)
          verticalLineTo(22.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          horizontalLineTo(9.5F)
          curveToRelative(-1.56F, 0.0F, -2.934F, -0.794F, -3.742F, -2.0F)
          horizontalLineTo(22.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          verticalLineTo(9.5F)
          close()        
      }
    }
    return _calendarMultiple32!!
  }

private var _calendarMultiple32: ImageVector? = null
