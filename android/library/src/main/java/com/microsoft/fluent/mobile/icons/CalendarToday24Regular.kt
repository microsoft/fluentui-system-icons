package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarToday24: ImageVector
  get() {
    if (_calendarToday24 != null) {
      return _calendarToday24!!
    }
    _calendarToday24 = fluentIcon(name = "Regular.CalendarToday24", 24f) {
      materialPath {
          moveTo(21.0F, 6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-1.5F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(15.0F)
          verticalLineToRelative(9.25F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-4.0F)
          verticalLineTo(21.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
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
          moveToRelative(7.0F, 7.25F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          close()
          moveToRelative(0.502F, 6.56F)
          curveToRelative(0.31F, 0.276F, 0.783F, 0.248F, 1.058F, -0.062F)
          curveToRelative(0.276F, -0.31F, 0.248F, -0.783F, -0.062F, -1.059F)
          lineToRelative(-2.25F, -2.0F)
          curveToRelative(-0.284F, -0.252F, -0.712F, -0.252F, -0.996F, 0.0F)
          lineToRelative(-2.25F, 2.0F)
          curveToRelative(-0.31F, 0.276F, -0.338F, 0.75F, -0.063F, 1.06F)
          curveToRelative(0.276F, 0.309F, 0.75F, 0.337F, 1.06F, 0.062F)
          lineToRelative(1.001F, -0.89F)
          verticalLineToRelative(3.829F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-3.83F)
          lineToRelative(1.002F, 0.89F)
          close()        
      }
    }
    return _calendarToday24!!
  }

private var _calendarToday24: ImageVector? = null
