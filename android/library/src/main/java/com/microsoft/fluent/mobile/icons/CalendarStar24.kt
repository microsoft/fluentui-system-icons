package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarStar24: ImageVector
  get() {
    if (_calendarStar24 != null) {
      return _calendarStar24!!
    }
    _calendarStar24 = fluentIcon(name = "Filled.CalendarStar24", 24f) {
      materialPath {
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveTo(20.538F, 23.0F, 17.5F, 23.0F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveTo(21.0F, 8.5F)
          lineToRelative(0.001F, 3.523F)
          curveTo(19.991F, 11.375F, 18.79F, 11.0F, 17.5F, 11.0F)
          curveToRelative(-3.59F, 0.0F, -6.5F, 2.91F, -6.5F, 6.5F)
          curveToRelative(0.0F, 1.29F, 0.375F, 2.49F, 1.023F, 3.501F)
          lineTo(6.25F, 21.0F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(18.0F)
          close()
          moveToRelative(-4.016F, 5.546F)
          lineToRelative(-0.04F, 0.098F)
          lineToRelative(-0.556F, 1.787F)
          horizontalLineToRelative(-1.803F)
          curveToRelative(-0.532F, 0.0F, -0.772F, 0.668F, -0.417F, 1.036F)
          lineToRelative(0.074F, 0.065F)
          lineToRelative(1.458F, 1.105F)
          lineToRelative(-0.557F, 1.787F)
          curveToRelative(-0.165F, 0.53F, 0.375F, 0.975F, 0.821F, 0.73F)
          lineToRelative(0.078F, -0.05F)
          lineTo(17.5F, 19.5F)
          lineToRelative(1.458F, 1.104F)
          curveToRelative(0.433F, 0.328F, 1.006F, -0.07F, 0.92F, -0.588F)
          lineToRelative(-0.021F, -0.092F)
          lineToRelative(-0.557F, -1.787F)
          lineToRelative(1.458F, -1.105F)
          curveToRelative(0.43F, -0.326F, 0.248F, -1.014F, -0.247F, -1.093F)
          lineToRelative(-0.096F, -0.008F)
          horizontalLineToRelative(-1.803F)
          lineToRelative(-0.557F, -1.787F)
          curveToRelative(-0.163F, -0.526F, -0.843F, -0.559F, -1.071F, -0.098F)
          close()
          moveTo(17.75F, 3.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()        
      }
    }
    return _calendarStar24!!
  }

private var _calendarStar24: ImageVector? = null
