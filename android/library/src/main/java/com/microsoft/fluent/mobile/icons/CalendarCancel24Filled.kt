package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarCancel24: ImageVector
  get() {
    if (_calendarCancel24 != null) {
      return _calendarCancel24!!
    }
    _calendarCancel24 = fluentIcon(name = "Filled.CalendarCancel24", 24f) {
      materialPath {
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveTo(20.538F, 23.0F, 17.5F, 23.0F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveToRelative(-2.476F, 3.024F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(1.769F, 1.77F)
          lineToRelative(-1.767F, 1.766F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(1.767F, -1.767F)
          lineToRelative(1.77F, 1.769F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-1.769F, -1.77F)
          lineToRelative(1.771F, -1.77F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-1.771F, 1.77F)
          lineToRelative(-1.77F, -1.77F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
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
    return _calendarCancel24!!
  }

private var _calendarCancel24: ImageVector? = null
