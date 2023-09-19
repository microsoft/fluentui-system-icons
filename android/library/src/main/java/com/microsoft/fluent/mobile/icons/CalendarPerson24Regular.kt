package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarPerson24: ImageVector
  get() {
    if (_calendarPerson24 != null) {
      return _calendarPerson24!!
    }
    _calendarPerson24 = fluentIcon(name = "Regular.CalendarPerson24", 24f) {
      materialPath {
          moveTo(21.0F, 6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(6.922F)
          curveTo(13.056F, 20.633F, 13.0F, 20.254F, 13.0F, 19.875F)
          verticalLineToRelative(-0.103F)
          curveToRelative(0.0F, -0.092F, 0.005F, -0.182F, 0.013F, -0.272F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(15.0F)
          verticalLineToRelative(2.645F)
          curveToRelative(0.576F, 0.171F, 1.09F, 0.487F, 1.5F, 0.905F)
          verticalLineToRelative(-5.8F)
          close()
          moveTo(6.25F, 4.5F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          close()
          moveTo(21.0F, 14.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(16.0F, 15.88F, 16.0F, 14.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveToRelative(2.0F, 5.375F)
          curveTo(23.0F, 21.431F, 21.714F, 23.0F, 18.5F, 23.0F)
          reflectiveCurveTo(14.0F, 21.437F, 14.0F, 19.875F)
          verticalLineToRelative(-0.103F)
          curveTo(14.0F, 18.792F, 14.794F, 18.0F, 15.773F, 18.0F)
          horizontalLineToRelative(5.454F)
          curveTo(22.207F, 18.0F, 23.0F, 18.793F, 23.0F, 19.772F)
          verticalLineToRelative(0.103F)
          close()        
      }
    }
    return _calendarPerson24!!
  }

private var _calendarPerson24: ImageVector? = null
