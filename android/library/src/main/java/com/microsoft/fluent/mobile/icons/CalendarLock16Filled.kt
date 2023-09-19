package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarLock16: ImageVector
  get() {
    if (_calendarLock16 != null) {
      return _calendarLock16!!
    }
    _calendarLock16 = fluentIcon(name = "Filled.CalendarLock16", 16f) {
      materialPath {
          moveTo(9.5F, 8.0F)
          curveToRelative(0.0F, -0.768F, 0.289F, -1.47F, 0.764F, -2.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.932F, 0.637F, -1.715F, 1.5F, -1.937F)
          verticalLineTo(8.0F)
          close()
          moveTo(14.0F, 5.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(-3.5F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-0.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          close()
          moveToRelative(1.0F, 1.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveToRelative(1.0F, 2.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          close()        
      }
    }
    return _calendarLock16!!
  }

private var _calendarLock16: ImageVector? = null
