package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarArrowRight24: ImageVector
  get() {
    if (_calendarArrowRight24 != null) {
      return _calendarArrowRight24!!
    }
    _calendarArrowRight24 = fluentIcon(name = "Regular.CalendarArrowRight24", 24f) {
      materialPath {
          moveTo(21.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.022F)
          curveToRelative(-0.297F, -0.463F, -0.536F, -0.966F, -0.709F, -1.5F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(15.0F)
          verticalLineToRelative(2.813F)
          curveToRelative(0.534F, 0.173F, 1.037F, 0.412F, 1.5F, 0.709F)
          verticalLineTo(6.0F)
          close()
          moveTo(6.0F, 4.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          close()
          moveToRelative(17.0F, 13.0F)
          curveToRelative(0.0F, -3.038F, -2.462F, -5.5F, -5.5F, -5.5F)
          reflectiveCurveTo(12.0F, 14.462F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, 5.5F, 5.5F, 5.5F)
          reflectiveCurveToRelative(5.5F, -2.462F, 5.5F, -5.5F)
          close()
          moveToRelative(-5.354F, -2.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(19.293F, 18.0F)
          horizontalLineTo(14.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(4.793F)
          lineToRelative(-1.647F, -1.646F)
          close()        
      }
    }
    return _calendarArrowRight24!!
  }

private var _calendarArrowRight24: ImageVector? = null
