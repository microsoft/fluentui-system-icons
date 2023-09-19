package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarToday16: ImageVector
  get() {
    if (_calendarToday16 != null) {
      return _calendarToday16!!
    }
    _calendarToday16 = fluentIcon(name = "Regular.CalendarToday16", 16f) {
      materialPath {
          moveTo(14.0F, 4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          close()
          moveToRelative(3.781F, 11.914F)
          curveTo(8.413F, 14.824F, 8.5F, 14.672F, 8.5F, 14.5F)
          verticalLineToRelative(-3.432F)
          lineToRelative(0.68F, 0.566F)
          curveToRelative(0.212F, 0.177F, 0.527F, 0.148F, 0.704F, -0.064F)
          curveToRelative(0.177F, -0.212F, 0.148F, -0.527F, -0.064F, -0.704F)
          lineToRelative(-1.5F, -1.25F)
          curveToRelative(-0.185F, -0.155F, -0.455F, -0.155F, -0.64F, 0.0F)
          lineToRelative(-1.5F, 1.25F)
          curveToRelative(-0.212F, 0.177F, -0.24F, 0.492F, -0.064F, 0.704F)
          curveToRelative(0.177F, 0.212F, 0.492F, 0.24F, 0.704F, 0.064F)
          lineToRelative(0.68F, -0.566F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.173F, 0.087F, 0.325F, 0.22F, 0.415F)
          curveTo(7.8F, 14.968F, 7.894F, 14.999F, 7.996F, 15.0F)
          horizontalLineToRelative(0.008F)
          curveToRelative(0.103F, 0.0F, 0.198F, -0.033F, 0.277F, -0.086F)
          close()
          moveTo(8.75F, 7.75F)
          curveTo(8.75F, 8.164F, 8.414F, 8.5F, 8.0F, 8.5F)
          reflectiveCurveTo(7.25F, 8.164F, 7.25F, 7.75F)
          reflectiveCurveTo(7.586F, 7.0F, 8.0F, 7.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          close()        
      }
    }
    return _calendarToday16!!
  }

private var _calendarToday16: ImageVector? = null
