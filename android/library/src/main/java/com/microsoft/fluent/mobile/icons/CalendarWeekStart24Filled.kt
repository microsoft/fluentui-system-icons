package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarWeekStart24: ImageVector
  get() {
    if (_calendarWeekStart24 != null) {
      return _calendarWeekStart24!!
    }
    _calendarWeekStart24 = fluentIcon(name = "Filled.CalendarWeekStart24", 24f) {
      materialPath {
          moveTo(17.75F, 3.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveToRelative(-10.0F, 4.0F)
          curveTo(7.336F, 7.0F, 7.0F, 7.336F, 7.0F, 7.75F)
          verticalLineToRelative(8.5F)
          curveTo(7.0F, 16.664F, 7.336F, 17.0F, 7.75F, 17.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-8.5F)
          curveTo(8.5F, 7.336F, 8.164F, 7.0F, 7.75F, 7.0F)
          close()        
      }
    }
    return _calendarWeekStart24!!
  }

private var _calendarWeekStart24: ImageVector? = null
