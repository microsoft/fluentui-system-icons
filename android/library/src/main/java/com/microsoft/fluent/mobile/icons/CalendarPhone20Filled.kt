package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarPhone20: ImageVector
  get() {
    if (_calendarPhone20 != null) {
      return _calendarPhone20!!
    }
    _calendarPhone20 = fluentIcon(name = "Filled.CalendarPhone20", 20f) {
      materialPath {
          moveTo(17.0F, 7.0F)
          verticalLineToRelative(1.05F)
          curveTo(16.838F, 8.017F, 16.671F, 8.0F, 16.5F, 8.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(12.12F, 8.0F, 11.0F, 9.12F, 11.0F, 10.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.171F, 0.017F, 0.338F, 0.05F, 0.5F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(14.0F)
          close()
          moveToRelative(-2.5F, -4.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(-0.75F, 6.0F)
          curveTo(12.784F, 9.0F, 12.0F, 9.784F, 12.0F, 10.75F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-5.5F)
          curveTo(18.0F, 9.784F, 17.216F, 9.0F, 16.25F, 9.0F)
          horizontalLineToRelative(-2.5F)
          close()
          moveTo(14.0F, 15.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.776F, 16.0F, 15.5F, 16.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()        
      }
    }
    return _calendarPhone20!!
  }

private var _calendarPhone20: ImageVector? = null
