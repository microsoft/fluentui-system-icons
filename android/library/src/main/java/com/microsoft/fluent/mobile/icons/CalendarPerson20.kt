package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarPerson20: ImageVector
  get() {
    if (_calendarPerson20 != null) {
      return _calendarPerson20!!
    }
    _calendarPerson20 = fluentIcon(name = "Filled.CalendarPerson20", 20f) {
      materialPath {
          moveTo(17.0F, 7.0F)
          verticalLineToRelative(2.401F)
          curveTo(16.559F, 9.146F, 16.046F, 9.0F, 15.5F, 9.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          curveToRelative(0.0F, 0.773F, 0.293F, 1.478F, 0.773F, 2.01F)
          curveTo(11.999F, 14.125F, 11.0F, 15.196F, 11.0F, 16.5F)
          curveToRelative(0.0F, 0.167F, 0.013F, 0.334F, 0.038F, 0.5F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(14.0F)
          close()
          moveToRelative(-2.5F, -4.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(3.0F, 9.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(12.0F, 17.75F, 12.0F, 16.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _calendarPerson20!!
  }

private var _calendarPerson20: ImageVector? = null
