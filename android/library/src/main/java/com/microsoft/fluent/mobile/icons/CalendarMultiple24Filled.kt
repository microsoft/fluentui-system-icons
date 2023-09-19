package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarMultiple24: ImageVector
  get() {
    if (_calendarMultiple24 != null) {
      return _calendarMultiple24!!
    }
    _calendarMultiple24 = fluentIcon(name = "Filled.CalendarMultiple24", 24f) {
      materialPath {
          moveTo(19.994F, 5.007F)
          lineToRelative(0.004F, 0.121F)
          lineTo(20.0F, 5.25F)
          verticalLineToRelative(11.1F)
          curveToRelative(0.0F, 2.016F, -1.634F, 3.65F, -3.65F, 3.65F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.082F, 0.0F, -0.163F, -0.002F, -0.243F, -0.007F)
          curveTo(5.583F, 20.9F, 6.597F, 21.5F, 7.75F, 21.5F)
          horizontalLineToRelative(8.6F)
          curveToRelative(2.844F, 0.0F, 5.15F, -2.306F, 5.15F, -5.15F)
          verticalLineToRelative(-8.6F)
          curveToRelative(0.0F, -1.153F, -0.6F, -2.166F, -1.506F, -2.743F)
          close()
          moveTo(2.0F, 7.5F)
          verticalLineToRelative(8.25F)
          curveTo(2.0F, 17.545F, 3.455F, 19.0F, 5.25F, 19.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(7.5F)
          horizontalLineTo(2.0F)
          close()
          moveTo(5.25F, 2.0F)
          curveTo(3.455F, 2.0F, 2.0F, 3.455F, 2.0F, 5.25F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(17.0F)
          verticalLineTo(5.25F)
          curveTo(19.0F, 3.455F, 17.545F, 2.0F, 15.75F, 2.0F)
          horizontalLineTo(5.25F)
          close()        
      }
    }
    return _calendarMultiple24!!
  }

private var _calendarMultiple24: ImageVector? = null
