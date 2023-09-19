package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarAdd16: ImageVector
  get() {
    if (_calendarAdd16 != null) {
      return _calendarAdd16!!
    }
    _calendarAdd16 = fluentIcon(name = "Regular.CalendarAdd16", 16f) {
      materialPath {
          moveTo(11.5F, 2.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(2.1F)
          curveToRelative(-0.317F, -0.162F, -0.651F, -0.294F, -1.0F, -0.393F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(5.5F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(1.707F)
          curveToRelative(0.099F, 0.349F, 0.23F, 0.683F, 0.393F, 1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          close()
          moveToRelative(4.5F, 8.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(16.0F, 9.015F, 16.0F, 11.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveTo(12.0F, 9.224F, 11.776F, 9.0F, 11.5F, 9.0F)
          reflectiveCurveTo(11.0F, 9.224F, 11.0F, 9.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 11.0F, 9.0F, 11.224F, 9.0F, 11.5F)
          reflectiveCurveTo(9.224F, 12.0F, 9.5F, 12.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 11.0F, 13.5F, 11.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(9.5F)
          close()        
      }
    }
    return _calendarAdd16!!
  }

private var _calendarAdd16: ImageVector? = null
