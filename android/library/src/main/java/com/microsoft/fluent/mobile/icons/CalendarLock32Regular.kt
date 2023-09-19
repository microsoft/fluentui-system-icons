package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarLock32: ImageVector
  get() {
    if (_calendarLock32 != null) {
      return _calendarLock32!!
    }
    _calendarLock32 = fluentIcon(name = "Regular.CalendarLock32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(8.626F)
          curveTo(16.044F, 28.68F, 16.0F, 28.345F, 16.0F, 28.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(7.5F)
          curveTo(6.12F, 27.0F, 5.0F, 25.88F, 5.0F, 24.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(22.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.988F, 0.742F, 1.692F, 1.841F, 1.92F, 3.106F)
          lineToRelative(0.08F, 0.02F)
          verticalLineTo(7.5F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(5.0F, 7.5F)
          curveTo(5.0F, 6.12F, 6.12F, 5.0F, 7.5F, 5.0F)
          horizontalLineToRelative(17.0F)
          curveTo(25.88F, 5.0F, 27.0F, 6.12F, 27.0F, 7.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(7.5F)
          close()
          moveToRelative(15.5F, 12.0F)
          horizontalLineTo(20.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          horizontalLineToRelative(-0.5F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          reflectiveCurveToRelative(-3.5F, 1.567F, -3.5F, 3.5F)
          verticalLineToRelative(0.5F)
          close()
          moveToRelative(2.0F, -0.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(0.5F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(19.0F)
          close()
          moveToRelative(3.5F, 6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()        
      }
    }
    return _calendarLock32!!
  }

private var _calendarLock32: ImageVector? = null
