package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarSearch16: ImageVector
  get() {
    if (_calendarSearch16 != null) {
      return _calendarSearch16!!
    }
    _calendarSearch16 = fluentIcon(name = "Filled.CalendarSearch16", 16f) {
      materialPath {
          moveTo(14.0F, 11.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(7.329F)
          curveTo(8.349F, 6.825F, 9.0F, 8.086F, 9.0F, 9.5F)
          curveToRelative(0.0F, 0.695F, -0.157F, 1.353F, -0.439F, 1.94F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.163F, 0.163F, 0.281F, 0.355F, 0.354F, 0.56F)
          horizontalLineTo(11.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          close()
          moveToRelative(0.0F, -7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(4.5F)
          close()
          moveToRelative(-7.404F, 7.803F)
          curveTo(6.012F, 12.741F, 5.286F, 13.0F, 4.5F, 13.0F)
          curveTo(2.567F, 13.0F, 1.0F, 11.433F, 1.0F, 9.5F)
          reflectiveCurveTo(2.567F, 6.0F, 4.5F, 6.0F)
          reflectiveCurveTo(8.0F, 7.567F, 8.0F, 9.5F)
          curveToRelative(0.0F, 0.786F, -0.26F, 1.512F, -0.697F, 2.096F)
          lineToRelative(2.55F, 2.55F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.55F, -2.55F)
          close()
          moveTo(7.0F, 9.5F)
          curveTo(7.0F, 8.12F, 5.88F, 7.0F, 4.5F, 7.0F)
          reflectiveCurveTo(2.0F, 8.12F, 2.0F, 9.5F)
          reflectiveCurveTo(3.12F, 12.0F, 4.5F, 12.0F)
          reflectiveCurveTo(7.0F, 10.88F, 7.0F, 9.5F)
          close()        
      }
    }
    return _calendarSearch16!!
  }

private var _calendarSearch16: ImageVector? = null
