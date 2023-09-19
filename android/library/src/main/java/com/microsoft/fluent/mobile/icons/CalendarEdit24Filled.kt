package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarEdit24: ImageVector
  get() {
    if (_calendarEdit24 != null) {
      return _calendarEdit24!!
    }
    _calendarEdit24 = fluentIcon(name = "Filled.CalendarEdit24", 24f) {
      materialPath {
          moveTo(11.52F, 19.575F)
          lineToRelative(-0.356F, 1.423F)
          horizontalLineTo(6.25F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.454F, -3.25F, -3.25F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(17.998F)
          verticalLineToRelative(2.512F)
          curveToRelative(-0.932F, -0.08F, -1.893F, 0.237F, -2.607F, 0.95F)
          lineToRelative(-5.902F, 5.902F)
          curveToRelative(-0.472F, 0.473F, -0.807F, 1.064F, -0.969F, 1.712F)
          close()
          moveTo(20.998F, 6.25F)
          curveToRelative(0.0F, -1.795F, -1.454F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(17.998F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(-1.9F, 6.419F)
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
