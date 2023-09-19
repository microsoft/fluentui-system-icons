package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarSearch16: ImageVector
  get() {
    if (_calendarSearch16 != null) {
      return _calendarSearch16!!
    }
    _calendarSearch16 = fluentIcon(name = "Regular.CalendarSearch16", 16f) {
      materialPath {
          moveTo(14.0F, 4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(1.258F)
          curveTo(2.715F, 5.279F, 3.575F, 5.0F, 4.5F, 5.0F)
          curveToRelative(1.072F, 0.0F, 2.056F, 0.375F, 2.829F, 1.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-1.379F)
          lineToRelative(0.44F, 0.44F)
          curveToRelative(0.163F, 0.163F, 0.281F, 0.355F, 0.354F, 0.56F)
          horizontalLineTo(11.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(4.5F, 5.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(4.5F)
          close()
          moveToRelative(2.096F, 7.303F)
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
