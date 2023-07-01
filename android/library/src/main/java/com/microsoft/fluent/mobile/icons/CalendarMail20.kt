package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarMail20: ImageVector
  get() {
    if (_calendarMail20 != null) {
      return _calendarMail20!!
    }
    _calendarMail20 = fluentIcon(name = "Filled.CalendarMail20", 20f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(14.0F, 6.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(-7.93F, 4.475F)
          curveTo(6.3F, 9.625F, 7.076F, 9.0F, 8.0F, 9.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.923F, 0.0F, 1.7F, 0.625F, 1.93F, 1.475F)
          lineTo(12.0F, 13.961F)
          lineToRelative(-5.93F, -3.486F)
          close()
          moveToRelative(6.31F, 4.423F)
          lineTo(18.0F, 11.594F)
          verticalLineTo(16.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-4.405F)
          lineToRelative(5.62F, 3.303F)
          curveToRelative(0.235F, 0.138F, 0.526F, 0.138F, 0.76F, 0.0F)
          close()        
      }
    }
    return _calendarMail20!!
  }

private var _calendarMail20: ImageVector? = null
