package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarClock24: ImageVector
  get() {
    if (_calendarClock24 != null) {
      return _calendarClock24!!
    }
    _calendarClock24 = fluentIcon(name = "Regular.CalendarClock24", 24f) {
      materialPath {
          moveTo(21.0F, 6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(5.772F)
          curveToRelative(-0.297F, -0.463F, -0.536F, -0.966F, -0.709F, -1.5F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(15.0F)
          verticalLineToRelative(2.813F)
          curveToRelative(0.534F, 0.173F, 1.037F, 0.412F, 1.5F, 0.709F)
          verticalLineTo(6.25F)
          close()
          moveTo(6.25F, 4.5F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          close()
          moveTo(23.0F, 17.5F)
          curveToRelative(0.0F, -3.038F, -2.462F, -5.5F, -5.5F, -5.5F)
          reflectiveCurveTo(12.0F, 14.462F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, 5.5F, 5.5F, 5.5F)
          reflectiveCurveToRelative(5.5F, -2.462F, 5.5F, -5.5F)
          close()
          moveToRelative(-5.5F, 0.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(17.0F)
          curveToRelative(-0.273F, 0.0F, -0.495F, -0.22F, -0.5F, -0.491F)
          verticalLineToRelative(-3.01F)
          curveToRelative(0.0F, -0.275F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.225F, 0.5F, 0.5F)
          verticalLineTo(17.5F)
          close()        
      }
    }
    return _calendarClock24!!
  }

private var _calendarClock24: ImageVector? = null
