package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarStar20: ImageVector
  get() {
    if (_calendarStar20 != null) {
      return _calendarStar20!!
    }
    _calendarStar20 = fluentIcon(name = "Filled.CalendarStar20", 20f) {
      materialPath {
          moveTo(17.0F, 5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(5.5F)
          close()
          moveToRelative(0.0F, 4.1F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(7.5F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(4.1F)
          curveTo(9.216F, 16.25F, 9.0F, 15.4F, 9.0F, 14.5F)
          curveTo(9.0F, 11.462F, 11.462F, 9.0F, 14.5F, 9.0F)
          curveToRelative(0.9F, 0.0F, 1.75F, 0.216F, 2.5F, 0.6F)
          close()
          moveToRelative(2.0F, 4.9F)
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
