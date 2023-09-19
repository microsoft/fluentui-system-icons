package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarCheckmark28: ImageVector
  get() {
    if (_calendarCheckmark28 != null) {
      return _calendarCheckmark28!!
    }
    _calendarCheckmark28 = fluentIcon(name = "Filled.CalendarCheckmark28", 28f) {
      materialPath {
          moveTo(25.0F, 9.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(-1.253F, -0.942F, -2.812F, -1.5F, -4.5F, -1.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 1.688F, 0.558F, 3.247F, 1.5F, 4.5F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 25.0F, 3.0F, 23.545F, 3.0F, 21.75F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(22.0F)
          close()
          moveTo(21.75F, 3.0F)
          curveTo(23.545F, 3.0F, 25.0F, 4.455F, 25.0F, 6.25F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(15.5F)
          close()
          moveTo(27.0F, 20.5F)
          curveToRelative(0.0F, 3.59F, -2.91F, 6.5F, -6.5F, 6.5F)
          reflectiveCurveTo(14.0F, 24.09F, 14.0F, 20.5F)
          reflectiveCurveToRelative(2.91F, -6.5F, 6.5F, -6.5F)
          reflectiveCurveToRelative(6.5F, 2.91F, 6.5F, 6.5F)
          close()
          moveToRelative(-2.646F, -2.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(19.0F, 22.293F)
          lineToRelative(-1.646F, -1.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _calendarCheckmark28!!
  }

private var _calendarCheckmark28: ImageVector? = null
