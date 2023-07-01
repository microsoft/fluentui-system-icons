package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarPhone16: ImageVector
  get() {
    if (_calendarPhone16 != null) {
      return _calendarPhone16!!
    }
    _calendarPhone16 = fluentIcon(name = "Filled.CalendarPhone16", 16f) {
      materialPath {
          moveTo(8.0F, 7.5F)
          curveTo(8.0F, 6.937F, 8.186F, 6.418F, 8.5F, 6.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(3.55F)
          curveTo(8.017F, 13.838F, 8.0F, 13.671F, 8.0F, 13.5F)
          verticalLineToRelative(-6.0F)
          close()
          moveTo(2.0F, 5.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(8.75F, 1.0F)
          curveTo(9.784F, 6.0F, 9.0F, 6.784F, 9.0F, 7.75F)
          verticalLineToRelative(5.5F)
          curveTo(9.0F, 14.216F, 9.784F, 15.0F, 10.75F, 15.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-5.5F)
          curveTo(15.0F, 6.784F, 14.216F, 6.0F, 13.25F, 6.0F)
          horizontalLineToRelative(-2.5F)
          close()
          moveTo(11.0F, 12.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 13.0F, 12.5F, 13.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()        
      }
    }
    return _calendarPhone16!!
  }

private var _calendarPhone16: ImageVector? = null
