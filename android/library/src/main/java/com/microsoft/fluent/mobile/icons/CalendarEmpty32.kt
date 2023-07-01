package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarEmpty32: ImageVector
  get() {
    if (_calendarEmpty32 != null) {
      return _calendarEmpty32!!
    }
    _calendarEmpty32 = fluentIcon(name = "Filled.CalendarEmpty32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(26.0F)
          verticalLineTo(7.5F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(29.0F, 11.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(13.5F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(11.0F)
          close()        
      }
    }
    return _calendarEmpty32!!
  }

private var _calendarEmpty32: ImageVector? = null
