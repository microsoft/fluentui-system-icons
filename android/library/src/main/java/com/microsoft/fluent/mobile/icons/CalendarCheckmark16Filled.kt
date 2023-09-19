package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarCheckmark16: ImageVector
  get() {
    if (_calendarCheckmark16 != null) {
      return _calendarCheckmark16!!
    }
    _calendarCheckmark16 = fluentIcon(name = "Filled.CalendarCheckmark16", 16f) {
      materialPath {
          moveTo(11.5F, 6.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(2.1F)
          curveTo(6.216F, 13.25F, 6.0F, 12.4F, 6.0F, 11.5F)
          curveTo(6.0F, 8.462F, 8.462F, 6.0F, 11.5F, 6.0F)
          close()
          moveTo(14.0F, 4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(4.5F)
          close()
          moveToRelative(2.0F, 7.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(7.0F, 13.985F, 7.0F, 11.5F)
          reflectiveCurveTo(9.015F, 7.0F, 11.5F, 7.0F)
          reflectiveCurveTo(16.0F, 9.015F, 16.0F, 11.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.5F, 12.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _calendarCheckmark16!!
  }

private var _calendarCheckmark16: ImageVector? = null
