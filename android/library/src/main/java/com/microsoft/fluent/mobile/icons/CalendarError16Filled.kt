package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarError16: ImageVector
  get() {
    if (_calendarError16 != null) {
      return _calendarError16!!
    }
    _calendarError16 = fluentIcon(name = "Filled.CalendarError16", 16f) {
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
          moveTo(11.5F, 9.0F)
          curveTo(11.224F, 9.0F, 11.0F, 9.224F, 11.0F, 9.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          curveTo(12.0F, 9.224F, 11.776F, 9.0F, 11.5F, 9.0F)
          close()
          moveToRelative(0.0F, 5.125F)
          curveToRelative(0.345F, 0.0F, 0.625F, -0.28F, 0.625F, -0.625F)
          reflectiveCurveToRelative(-0.28F, -0.625F, -0.625F, -0.625F)
          reflectiveCurveToRelative(-0.625F, 0.28F, -0.625F, 0.625F)
          reflectiveCurveToRelative(0.28F, 0.625F, 0.625F, 0.625F)
          close()        
      }
    }
    return _calendarError16!!
  }

private var _calendarError16: ImageVector? = null
