package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarPerson16: ImageVector
  get() {
    if (_calendarPerson16 != null) {
      return _calendarPerson16!!
    }
    _calendarPerson16 = fluentIcon(name = "Filled.CalendarPerson16", 16f) {
      materialPath {
          moveTo(7.367F, 14.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(7.264F)
          curveTo(8.789F, 6.53F, 8.5F, 7.232F, 8.5F, 8.0F)
          curveToRelative(0.0F, 0.773F, 0.293F, 1.478F, 0.773F, 2.01F)
          curveTo(7.999F, 10.125F, 7.0F, 11.196F, 7.0F, 12.5F)
          curveToRelative(0.0F, 0.512F, 0.118F, 1.027F, 0.367F, 1.5F)
          close()
          moveTo(14.0F, 5.0F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(12.0F)
          close()
          moveToRelative(-0.5F, 3.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(8.0F, 13.75F, 8.0F, 12.5F)
          curveTo(8.0F, 11.672F, 8.672F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _calendarPerson16!!
  }

private var _calendarPerson16: ImageVector? = null
