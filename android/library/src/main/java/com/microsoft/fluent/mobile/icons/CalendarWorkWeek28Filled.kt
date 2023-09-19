package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarWorkWeek28: ImageVector
  get() {
    if (_calendarWorkWeek28 != null) {
      return _calendarWorkWeek28!!
    }
    _calendarWorkWeek28 = fluentIcon(name = "Filled.CalendarWorkWeek28", 28f) {
      materialPath {
          moveTo(9.0F, 13.5F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(-6.0F, 8.25F)
          curveTo(3.0F, 23.545F, 4.455F, 25.0F, 6.25F, 25.0F)
          horizontalLineToRelative(15.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(25.0F, 4.455F, 23.545F, 3.0F, 21.75F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(15.5F)
          close()
          moveTo(8.25F, 8.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(8.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-5.5F)
          curveTo(7.5F, 8.336F, 7.836F, 8.0F, 8.25F, 8.0F)
          close()        
      }
    }
    return _calendarWorkWeek28!!
  }

private var _calendarWorkWeek28: ImageVector? = null
