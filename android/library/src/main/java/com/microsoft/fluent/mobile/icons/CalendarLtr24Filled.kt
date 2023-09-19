package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarLtr24: ImageVector
  get() {
    if (_calendarLtr24 != null) {
      return _calendarLtr24!!
    }
    _calendarLtr24 = fluentIcon(name = "Filled.CalendarLtr24", 24f) {
      materialPath {
          moveTo(21.0F, 8.5F)
          verticalLineToRelative(9.25F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(18.0F)
          close()
          moveTo(7.25F, 15.0F)
          curveTo(6.56F, 15.0F, 6.0F, 15.56F, 6.0F, 16.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(7.94F, 15.0F, 7.25F, 15.0F)
          close()
          moveTo(12.0F, 15.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(11.31F, 17.5F, 12.0F, 17.5F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(12.69F, 15.0F, 12.0F, 15.0F)
          close()
          moveToRelative(-4.75F, -4.5F)
          curveTo(6.56F, 10.5F, 6.0F, 11.06F, 6.0F, 11.75F)
          reflectiveCurveTo(6.56F, 13.0F, 7.25F, 13.0F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          close()
          moveToRelative(4.75F, 0.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(11.31F, 13.0F, 12.0F, 13.0F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(12.69F, 10.5F, 12.0F, 10.5F)
          close()
          moveToRelative(4.75F, 0.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(16.06F, 13.0F, 16.75F, 13.0F)
          reflectiveCurveTo(18.0F, 12.44F, 18.0F, 11.75F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          close()
          moveToRelative(1.0F, -7.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()        
      }
    }
    return _calendarLtr24!!
  }

private var _calendarLtr24: ImageVector? = null
