package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarDay28: ImageVector
  get() {
    if (_calendarDay28 != null) {
      return _calendarDay28!!
    }
    _calendarDay28 = fluentIcon(name = "Filled.CalendarDay28", 28f) {
      materialPath {
          moveTo(21.75F, 3.0F)
          curveTo(23.545F, 3.0F, 25.0F, 4.455F, 25.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 25.0F, 3.0F, 23.545F, 3.0F, 21.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(15.5F)
          close()
          moveTo(19.0F, 12.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, 0.386F, -0.993F, 0.883F)
          lineTo(8.0F, 13.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.513F, 0.386F, 0.936F, 0.883F, 0.993F)
          lineTo(9.0F, 20.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.513F, 0.0F, 0.936F, -0.386F, 0.993F, -0.883F)
          lineTo(20.0F, 19.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.513F, -0.386F, -0.935F, -0.883F, -0.993F)
          lineTo(19.0F, 12.0F)
          close()
          moveToRelative(-0.5F, 1.5F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(19.0F, 8.0F)
          horizontalLineTo(9.0F)
          lineTo(8.898F, 8.007F)
          curveTo(8.532F, 8.057F, 8.25F, 8.37F, 8.25F, 8.75F)
          reflectiveCurveToRelative(0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(9.0F, 9.5F)
          horizontalLineToRelative(10.0F)
          lineToRelative(0.102F, -0.007F)
          curveToRelative(0.366F, -0.05F, 0.648F, -0.363F, 0.648F, -0.743F)
          reflectiveCurveToRelative(-0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(19.0F, 8.0F)
          close()        
      }
    }
    return _calendarDay28!!
  }

private var _calendarDay28: ImageVector? = null
