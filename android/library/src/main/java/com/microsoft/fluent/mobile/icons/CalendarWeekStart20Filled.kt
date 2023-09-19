package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarWeekStart20: ImageVector
  get() {
    if (_calendarWeekStart20 != null) {
      return _calendarWeekStart20!!
    }
    _calendarWeekStart20 = fluentIcon(name = "Filled.CalendarWeekStart20", 20f) {
      materialPath {
          moveTo(14.5F, 3.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(-8.0F, 3.0F)
          curveTo(6.255F, 6.0F, 6.05F, 6.177F, 6.008F, 6.41F)
          lineTo(6.0F, 6.5F)
          verticalLineToRelative(7.0F)
          lineToRelative(0.008F, 0.09F)
          curveTo(6.05F, 13.823F, 6.255F, 14.0F, 6.5F, 14.0F)
          reflectiveCurveToRelative(0.45F, -0.177F, 0.492F, -0.41F)
          lineTo(7.0F, 13.5F)
          verticalLineToRelative(-7.0F)
          lineTo(6.992F, 6.41F)
          curveTo(6.95F, 6.177F, 6.745F, 6.0F, 6.5F, 6.0F)
          close()        
      }
    }
    return _calendarWeekStart20!!
  }

private var _calendarWeekStart20: ImageVector? = null
