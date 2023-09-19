package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarMonth24: ImageVector
  get() {
    if (_calendarMonth24 != null) {
      return _calendarMonth24!!
    }
    _calendarMonth24 = fluentIcon(name = "Filled.CalendarMonth24", 24f) {
      materialPath {
          moveTo(17.75F, 3.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveToRelative(-10.0F, 10.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(7.06F, 16.0F, 7.75F, 16.0F)
          reflectiveCurveTo(9.0F, 15.44F, 9.0F, 14.75F)
          reflectiveCurveTo(8.44F, 13.5F, 7.75F, 13.5F)
          close()
          moveToRelative(4.25F, 0.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(11.31F, 16.0F, 12.0F, 16.0F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(12.69F, 13.5F, 12.0F, 13.5F)
          close()
          moveToRelative(-4.25F, -5.0F)
          curveTo(7.06F, 8.5F, 6.5F, 9.06F, 6.5F, 9.75F)
          reflectiveCurveTo(7.06F, 11.0F, 7.75F, 11.0F)
          reflectiveCurveTo(9.0F, 10.44F, 9.0F, 9.75F)
          reflectiveCurveTo(8.44F, 8.5F, 7.75F, 8.5F)
          close()
          moveToRelative(4.25F, 0.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(11.31F, 11.0F, 12.0F, 11.0F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(12.69F, 8.5F, 12.0F, 8.5F)
          close()
          moveToRelative(4.25F, 0.0F)
          curveTo(15.56F, 8.5F, 15.0F, 9.06F, 15.0F, 9.75F)
          reflectiveCurveTo(15.56F, 11.0F, 16.25F, 11.0F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          close()        
      }
    }
    return _calendarMonth24!!
  }

private var _calendarMonth24: ImageVector? = null
