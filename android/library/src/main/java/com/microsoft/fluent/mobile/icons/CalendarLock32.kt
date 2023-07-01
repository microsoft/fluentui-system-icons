package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarLock32: ImageVector
  get() {
    if (_calendarLock32 != null) {
      return _calendarLock32!!
    }
    _calendarLock32 = fluentIcon(name = "Filled.CalendarLock32", 32f) {
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
          horizontalLineToRelative(8.626F)
          curveTo(16.044F, 28.68F, 16.0F, 28.345F, 16.0F, 28.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -1.892F, 1.314F, -3.478F, 3.08F, -3.894F)
          curveTo(19.5F, 15.771F, 21.544F, 14.0F, 24.0F, 14.0F)
          reflectiveCurveToRelative(4.5F, 1.771F, 4.92F, 4.106F)
          lineToRelative(0.08F, 0.02F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(-8.5F, 8.5F)
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
