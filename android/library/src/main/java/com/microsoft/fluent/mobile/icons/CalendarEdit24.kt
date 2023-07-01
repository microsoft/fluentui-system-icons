package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarEdit24: ImageVector
  get() {
    if (_calendarEdit24 != null) {
      return _calendarEdit24!!
    }
    _calendarEdit24 = fluentIcon(name = "Regular.CalendarEdit24", 24f) {
      materialPath {
          moveTo(20.998F, 6.25F)
          curveToRelative(0.0F, -1.795F, -1.454F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.499F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(4.914F)
          lineToRelative(0.356F, -1.424F)
          lineToRelative(0.02F, -0.076F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.967F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-9.25F)
          horizontalLineToRelative(14.998F)
          verticalLineToRelative(2.733F)
          curveToRelative(0.48F, -0.19F, 0.994F, -0.264F, 1.5F, -0.22F)
          verticalLineTo(6.25F)
          close()
          moveTo(6.25F, 4.5F)
          horizontalLineToRelative(11.499F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.783F, 1.75F, 1.75F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.967F, 0.784F, -1.75F, 1.75F, -1.75F)
          close()
          moveToRelative(12.848F, 8.169F)
          lineToRelative(-5.901F, 5.901F)
          curveToRelative(-0.345F, 0.345F, -0.589F, 0.776F, -0.707F, 1.248F)
          lineToRelative(-0.457F, 1.83F)
          curveToRelative(-0.2F, 0.797F, 0.522F, 1.518F, 1.318F, 1.319F)
          lineToRelative(1.83F, -0.458F)
          curveToRelative(0.472F, -0.118F, 0.904F, -0.362F, 1.248F, -0.706F)
          lineTo(22.33F, 15.9F)
          curveToRelative(0.892F, -0.893F, 0.892F, -2.34F, 0.0F, -3.232F)
          curveToRelative(-0.893F, -0.893F, -2.34F, -0.893F, -3.233F, 0.0F)
          close()        
      }
    }
    return _calendarEdit24!!
  }

private var _calendarEdit24: ImageVector? = null
