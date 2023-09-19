package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarSearch20: ImageVector
  get() {
    if (_calendarSearch20 != null) {
      return _calendarSearch20!!
    }
    _calendarSearch20 = fluentIcon(name = "Filled.CalendarSearch20", 20f) {
      materialPath {
          moveTo(17.0F, 14.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(2.468F)
          curveTo(3.603F, 9.168F, 4.282F, 9.0F, 5.0F, 9.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          curveToRelative(0.0F, 0.695F, -0.157F, 1.353F, -0.439F, 1.94F)
          lineToRelative(1.56F, 1.56F)
          horizontalLineTo(14.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          close()
          moveToRelative(0.0F, -9.0F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(5.5F)
          close()
          moveTo(7.096F, 16.303F)
          curveTo(6.512F, 16.741F, 5.786F, 17.0F, 5.0F, 17.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveTo(3.067F, 10.0F, 5.0F, 10.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          curveToRelative(0.0F, 0.786F, -0.26F, 1.512F, -0.697F, 2.096F)
          lineToRelative(2.55F, 2.55F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.55F, -2.55F)
          close()
          moveTo(7.5F, 13.5F)
          curveTo(7.5F, 12.12F, 6.38F, 11.0F, 5.0F, 11.0F)
          reflectiveCurveToRelative(-2.5F, 1.12F, -2.5F, 2.5F)
          reflectiveCurveTo(3.62F, 16.0F, 5.0F, 16.0F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          close()        
      }
    }
    return _calendarSearch20!!
  }

private var _calendarSearch20: ImageVector? = null
