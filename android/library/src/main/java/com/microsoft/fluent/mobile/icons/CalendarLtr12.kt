package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarLtr12: ImageVector
  get() {
    if (_calendarLtr12 != null) {
      return _calendarLtr12!!
    }
    _calendarLtr12 = fluentIcon(name = "Filled.CalendarLtr12", 12f) {
      materialPath {
          moveTo(1.05F, 3.0F)
          curveTo(1.282F, 1.859F, 2.29F, 1.0F, 3.5F, 1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.21F, 0.0F, 2.218F, 0.859F, 2.45F, 2.0F)
          horizontalLineToRelative(-9.9F)
          close()
          moveTo(1.0F, 4.0F)
          verticalLineToRelative(4.5F)
          curveTo(1.0F, 9.88F, 2.12F, 11.0F, 3.5F, 11.0F)
          horizontalLineToRelative(5.0F)
          curveTo(9.88F, 11.0F, 11.0F, 9.88F, 11.0F, 8.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(1.0F)
          close()
          moveToRelative(2.0F, 1.5F)
          curveTo(3.0F, 5.224F, 3.224F, 5.0F, 3.5F, 5.0F)
          reflectiveCurveTo(4.0F, 5.224F, 4.0F, 5.5F)
          reflectiveCurveTo(3.776F, 6.0F, 3.5F, 6.0F)
          reflectiveCurveTo(3.0F, 5.776F, 3.0F, 5.5F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveTo(3.0F, 7.224F, 3.224F, 7.0F, 3.5F, 7.0F)
          reflectiveCurveTo(4.0F, 7.224F, 4.0F, 7.5F)
          reflectiveCurveTo(3.776F, 8.0F, 3.5F, 8.0F)
          reflectiveCurveTo(3.0F, 7.776F, 3.0F, 7.5F)
          close()
          moveTo(5.5F, 5.0F)
          curveTo(5.776F, 5.0F, 6.0F, 5.224F, 6.0F, 5.5F)
          reflectiveCurveTo(5.776F, 6.0F, 5.5F, 6.0F)
          reflectiveCurveTo(5.0F, 5.776F, 5.0F, 5.5F)
          reflectiveCurveTo(5.224F, 5.0F, 5.5F, 5.0F)
          close()
          moveTo(5.0F, 7.5F)
          curveTo(5.0F, 7.224F, 5.224F, 7.0F, 5.5F, 7.0F)
          reflectiveCurveTo(6.0F, 7.224F, 6.0F, 7.5F)
          reflectiveCurveTo(5.776F, 8.0F, 5.5F, 8.0F)
          reflectiveCurveTo(5.0F, 7.776F, 5.0F, 7.5F)
          close()
          moveTo(7.5F, 5.0F)
          curveTo(7.776F, 5.0F, 8.0F, 5.224F, 8.0F, 5.5F)
          reflectiveCurveTo(7.776F, 6.0F, 7.5F, 6.0F)
          reflectiveCurveTo(7.0F, 5.776F, 7.0F, 5.5F)
          reflectiveCurveTo(7.224F, 5.0F, 7.5F, 5.0F)
          close()        
      }
    }
    return _calendarLtr12!!
  }

private var _calendarLtr12: ImageVector? = null
