package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarSearch20: ImageVector
  get() {
    if (_calendarSearch20 != null) {
      return _calendarSearch20!!
    }
    _calendarSearch20 = fluentIcon(name = "Regular.CalendarSearch20", 20f) {
      materialPath {
          moveTo(17.0F, 5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(3.756F)
          curveToRelative(0.318F, -0.113F, 0.653F, -0.19F, 1.0F, -0.229F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(9.121F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(14.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(5.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.328F, 4.0F, 16.0F, 4.672F, 16.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(5.5F)
          curveTo(4.0F, 4.672F, 4.672F, 4.0F, 5.5F, 4.0F)
          close()
          moveToRelative(1.096F, 12.303F)
          curveTo(6.012F, 16.741F, 5.286F, 17.0F, 4.5F, 17.0F)
          curveTo(2.567F, 17.0F, 1.0F, 15.433F, 1.0F, 13.5F)
          reflectiveCurveTo(2.567F, 10.0F, 4.5F, 10.0F)
          reflectiveCurveTo(8.0F, 11.567F, 8.0F, 13.5F)
          curveToRelative(0.0F, 0.786F, -0.26F, 1.512F, -0.697F, 2.096F)
          lineToRelative(2.55F, 2.55F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.55F, -2.55F)
          close()
          moveTo(7.0F, 13.5F)
          curveTo(7.0F, 12.12F, 5.88F, 11.0F, 4.5F, 11.0F)
          reflectiveCurveTo(2.0F, 12.12F, 2.0F, 13.5F)
          reflectiveCurveTo(3.12F, 16.0F, 4.5F, 16.0F)
          reflectiveCurveTo(7.0F, 14.88F, 7.0F, 13.5F)
          close()        
      }
    }
    return _calendarSearch20!!
  }

private var _calendarSearch20: ImageVector? = null
