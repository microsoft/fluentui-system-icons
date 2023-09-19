package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarMultiple28: ImageVector
  get() {
    if (_calendarMultiple28 != null) {
      return _calendarMultiple28!!
    }
    _calendarMultiple28 = fluentIcon(name = "Regular.CalendarMultiple28", 28f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(13.5F)
          curveTo(3.0F, 21.545F, 4.455F, 23.0F, 6.25F, 23.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(23.0F, 4.455F, 21.545F, 3.0F, 19.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveTo(4.5F, 6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-17.0F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(0.0F, 2.25F)
          horizontalLineToRelative(17.0F)
          verticalLineToRelative(11.25F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(8.5F)
          close()
          moveToRelative(4.247F, 17.0F)
          curveToRelative(-1.15F, 0.0F, -2.162F, -0.598F, -2.74F, -1.5F)
          horizontalLineToRelative(14.24F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineToRelative(-1.072F)
          lineTo(24.0F, 19.0F)
          verticalLineTo(6.013F)
          curveTo(24.9F, 6.59F, 25.497F, 7.6F, 25.497F, 8.75F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-11.5F)
          close()        
      }
    }
    return _calendarMultiple28!!
  }

private var _calendarMultiple28: ImageVector? = null
