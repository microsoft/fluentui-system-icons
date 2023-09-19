package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarDay24: ImageVector
  get() {
    if (_calendarDay24 != null) {
      return _calendarDay24!!
    }
    _calendarDay24 = fluentIcon(name = "Regular.CalendarDay24", 24f) {
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
          moveToRelative(0.0F, 1.5F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          close()
          moveToRelative(-1.5F, 6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(7.336F, 17.0F, 7.0F, 16.664F, 7.0F, 16.25F)
          verticalLineToRelative(-4.5F)
          curveTo(7.0F, 11.336F, 7.336F, 11.0F, 7.75F, 11.0F)
          horizontalLineToRelative(8.5F)
          close()
          moveToRelative(-0.75F, 1.5F)
          horizontalLineToRelative(-7.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(7.0F)
          verticalLineToRelative(-3.0F)
          close()
          moveTo(7.75F, 7.25F)
          horizontalLineToRelative(8.5F)
          curveTo(16.664F, 7.25F, 17.0F, 7.586F, 17.0F, 8.0F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(16.25F, 8.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(7.336F, 8.75F, 7.0F, 8.414F, 7.0F, 8.0F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(7.75F, 7.25F)
          horizontalLineToRelative(8.5F)
          close()        
      }
    }
    return _calendarDay24!!
  }

private var _calendarDay24: ImageVector? = null
