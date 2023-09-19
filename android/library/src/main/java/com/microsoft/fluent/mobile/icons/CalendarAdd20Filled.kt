package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarAdd20: ImageVector
  get() {
    if (_calendarAdd20 != null) {
      return _calendarAdd20!!
    }
    _calendarAdd20 = fluentIcon(name = "Filled.CalendarAdd20", 20f) {
      materialPath {
          moveTo(17.0F, 7.0F)
          verticalLineToRelative(2.6F)
          curveTo(16.25F, 9.216F, 15.4F, 9.0F, 14.5F, 9.0F)
          curveTo(11.462F, 9.0F, 9.0F, 11.462F, 9.0F, 14.5F)
          curveToRelative(0.0F, 0.9F, 0.216F, 1.75F, 0.6F, 2.5F)
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
          moveTo(19.0F, 14.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(14.0F, 12.224F, 14.0F, 12.5F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 14.0F, 16.5F, 14.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(-1.5F)
          close()        
      }
    }
    return _calendarAdd20!!
  }

private var _calendarAdd20: ImageVector? = null
