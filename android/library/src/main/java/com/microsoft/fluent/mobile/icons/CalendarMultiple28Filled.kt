package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarMultiple28: ImageVector
  get() {
    if (_calendarMultiple28 != null) {
      return _calendarMultiple28!!
    }
    _calendarMultiple28 = fluentIcon(name = "Filled.CalendarMultiple28", 28f) {
      materialPath {
          moveTo(6.008F, 24.0F)
          curveToRelative(0.578F, 0.902F, 1.589F, 1.5F, 2.74F, 1.5F)
          horizontalLineToRelative(11.5F)
          curveToRelative(2.899F, 0.0F, 5.25F, -2.35F, 5.25F, -5.25F)
          verticalLineTo(8.75F)
          curveToRelative(0.0F, -1.15F, -0.597F, -2.16F, -1.498F, -2.737F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, 0.06F, 0.0F, 0.119F, -0.003F, 0.178F)
          verticalLineToRelative(1.072F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.008F)
          close()
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(21.545F, 3.0F, 23.0F, 4.455F, 23.0F, 6.25F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.25F)
          close()
          moveTo(3.0F, 8.5F)
          verticalLineToRelative(11.25F)
          curveTo(3.0F, 21.545F, 4.455F, 23.0F, 6.25F, 23.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(8.5F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _calendarMultiple28!!
  }

private var _calendarMultiple28: ImageVector? = null
