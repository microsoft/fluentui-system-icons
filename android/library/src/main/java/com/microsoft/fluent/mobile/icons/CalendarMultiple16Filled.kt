package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarMultiple16: ImageVector
  get() {
    if (_calendarMultiple16 != null) {
      return _calendarMultiple16!!
    }
    _calendarMultiple16 = fluentIcon(name = "Filled.CalendarMultiple16", 16f) {
      materialPath {
          moveTo(2.05F, 4.0F)
          curveTo(2.282F, 2.859F, 3.29F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.21F, 0.0F, 2.218F, 0.859F, 2.45F, 2.0F)
          horizontalLineToRelative(-9.9F)
          close()
          moveTo(2.0F, 5.0F)
          verticalLineToRelative(4.5F)
          curveTo(2.0F, 10.88F, 3.12F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(4.5F, 9.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          horizontalLineToRelative(5.25F)
          curveTo(11.545F, 13.0F, 13.0F, 11.545F, 13.0F, 9.75F)
          verticalLineTo(4.5F)
          curveToRelative(0.607F, 0.456F, 1.0F, 1.182F, 1.0F, 2.0F)
          verticalLineToRelative(3.25F)
          curveTo(14.0F, 12.097F, 12.097F, 14.0F, 9.75F, 14.0F)
          horizontalLineTo(6.5F)
          close()        
      }
    }
    return _calendarMultiple16!!
  }

private var _calendarMultiple16: ImageVector? = null
