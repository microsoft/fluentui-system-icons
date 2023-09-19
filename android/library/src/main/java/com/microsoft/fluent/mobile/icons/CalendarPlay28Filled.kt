package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarPlay28: ImageVector
  get() {
    if (_calendarPlay28 != null) {
      return _calendarPlay28!!
    }
    _calendarPlay28 = fluentIcon(name = "Filled.CalendarPlay28", 28f) {
      materialPath {
          moveTo(25.0F, 9.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(-1.253F, -0.942F, -2.812F, -1.5F, -4.5F, -1.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 1.688F, 0.558F, 3.247F, 1.5F, 4.5F)
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
          moveTo(20.5F, 27.0F)
          curveToRelative(3.59F, 0.0F, 6.5F, -2.91F, 6.5F, -6.5F)
          reflectiveCurveTo(24.09F, 14.0F, 20.5F, 14.0F)
          reflectiveCurveTo(14.0F, 16.91F, 14.0F, 20.5F)
          reflectiveCurveToRelative(2.91F, 6.5F, 6.5F, 6.5F)
          close()
          moveToRelative(-0.902F, -9.404F)
          lineToRelative(4.032F, 2.275F)
          curveToRelative(0.493F, 0.278F, 0.493F, 0.98F, 0.0F, 1.258F)
          lineToRelative(-4.032F, 2.274F)
          curveToRelative(-0.49F, 0.277F, -1.098F, -0.072F, -1.098F, -0.629F)
          verticalLineToRelative(-4.548F)
          curveToRelative(0.0F, -0.557F, 0.609F, -0.905F, 1.098F, -0.63F)
          close()        
      }
    }
    return _calendarPlay28!!
  }

private var _calendarPlay28: ImageVector? = null
