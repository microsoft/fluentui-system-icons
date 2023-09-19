package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarWorkWeek24: ImageVector
  get() {
    if (_calendarWorkWeek24 != null) {
      return _calendarWorkWeek24!!
    }
    _calendarWorkWeek24 = fluentIcon(name = "Regular.CalendarWorkWeek24", 24f) {
      materialPath {
          moveTo(7.75F, 7.0F)
          curveTo(7.336F, 7.0F, 7.0F, 7.336F, 7.0F, 7.75F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-4.0F)
          curveTo(17.0F, 7.336F, 16.664F, 7.0F, 16.25F, 7.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveToRelative(0.75F, 4.0F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(7.0F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(9.25F, 10.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveTo(19.5F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          close()        
      }
    }
    return _calendarWorkWeek24!!
  }

private var _calendarWorkWeek24: ImageVector? = null
