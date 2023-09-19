package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarStar20: ImageVector
  get() {
    if (_calendarStar20 != null) {
      return _calendarStar20!!
    }
    _calendarStar20 = fluentIcon(name = "Regular.CalendarStar20", 20f) {
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
          moveTo(19.0F, 14.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveToRelative(-4.024F, -2.64F)
          curveToRelative(-0.15F, -0.48F, -0.802F, -0.48F, -0.952F, 0.0F)
          lineToRelative(-0.477F, 1.532F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.484F, 0.0F, -0.686F, 0.647F, -0.294F, 0.944F)
          lineToRelative(1.25F, 0.947F)
          lineToRelative(-0.477F, 1.532F)
          curveToRelative(-0.15F, 0.48F, 0.378F, 0.88F, 0.77F, 0.583F)
          lineToRelative(1.25F, -0.947F)
          lineToRelative(1.25F, 0.947F)
          curveToRelative(0.392F, 0.297F, 0.92F, -0.103F, 0.77F, -0.583F)
          lineToRelative(-0.477F, -1.532F)
          lineToRelative(1.25F, -0.947F)
          curveToRelative(0.392F, -0.297F, 0.19F, -0.944F, -0.294F, -0.944F)
          horizontalLineToRelative(-1.545F)
          lineToRelative(-0.478F, -1.531F)
          close()        
      }
    }
    return _calendarStar20!!
  }

private var _calendarStar20: ImageVector? = null
