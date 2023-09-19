package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarStar16: ImageVector
  get() {
    if (_calendarStar16 != null) {
      return _calendarStar16!!
    }
    _calendarStar16 = fluentIcon(name = "Filled.CalendarStar16", 16f) {
      materialPath {
          moveTo(4.5F, 14.0F)
          horizontalLineToRelative(1.757F)
          curveTo(5.472F, 13.05F, 5.0F, 11.83F, 5.0F, 10.5F)
          curveTo(5.0F, 8.64F, 5.923F, 6.995F, 7.337F, 6.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          close()
          moveTo(14.0F, 5.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(-3.5F, 10.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(12.985F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(6.0F, 8.015F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 15.0F, 10.5F, 15.0F)
          close()
          moveToRelative(0.954F, -5.608F)
          horizontalLineToRelative(1.544F)
          curveToRelative(0.485F, 0.0F, 0.687F, 0.647F, 0.295F, 0.944F)
          lineToRelative(-1.25F, 0.947F)
          lineToRelative(0.477F, 1.532F)
          curveToRelative(0.15F, 0.48F, -0.378F, 0.88F, -0.77F, 0.583F)
          lineToRelative(-1.25F, -0.947F)
          lineToRelative(-1.25F, 0.947F)
          curveToRelative(-0.392F, 0.297F, -0.92F, -0.103F, -0.77F, -0.583F)
          lineToRelative(0.477F, -1.532F)
          lineToRelative(-1.25F, -0.947F)
          curveToRelative(-0.392F, -0.297F, -0.19F, -0.944F, 0.295F, -0.944F)
          horizontalLineToRelative(1.544F)
          lineToRelative(0.478F, -1.531F)
          curveToRelative(0.15F, -0.481F, 0.802F, -0.481F, 0.952F, 0.0F)
          lineToRelative(0.477F, 1.531F)
          close()        
      }
    }
    return _calendarStar16!!
  }

private var _calendarStar16: ImageVector? = null
