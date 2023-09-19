package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarClock20: ImageVector
  get() {
    if (_calendarClock20 != null) {
      return _calendarClock20!!
    }
    _calendarClock20 = fluentIcon(name = "Regular.CalendarClock20", 20f) {
      materialPath {
          moveTo(17.0F, 5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(4.1F)
          curveToRelative(-0.162F, -0.317F, -0.294F, -0.651F, -0.393F, -1.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 16.0F, 4.0F, 15.328F, 4.0F, 14.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(2.207F)
          curveToRelative(0.349F, 0.099F, 0.683F, 0.23F, 1.0F, 0.393F)
          verticalLineTo(5.5F)
          close()
          moveTo(5.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.328F, 4.0F, 16.0F, 4.672F, 16.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(5.5F)
          curveTo(4.0F, 4.672F, 4.672F, 4.0F, 5.5F, 4.0F)
          close()
          moveToRelative(9.0F, 15.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(16.985F, 10.0F, 14.5F, 10.0F)
          reflectiveCurveTo(10.0F, 12.015F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()
          moveTo(14.0F, 12.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.276F, 15.0F, 16.0F, 15.0F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _calendarClock20!!
  }

private var _calendarClock20: ImageVector? = null
