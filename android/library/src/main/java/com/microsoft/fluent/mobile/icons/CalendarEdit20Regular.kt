package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarEdit20: ImageVector
  get() {
    if (_calendarEdit20 != null) {
      return _calendarEdit20!!
    }
    _calendarEdit20 = fluentIcon(name = "Regular.CalendarEdit20", 20f) {
      materialPath {
          moveTo(14.499F, 3.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(3.502F)
          curveToRelative(-0.342F, 0.016F, -0.681F, 0.092F, -1.0F, 0.229F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-12.0F)
          verticalLineToRelative(7.499F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(3.975F)
          curveToRelative(-0.016F, 0.05F, -0.03F, 0.103F, -0.043F, 0.155F)
          lineTo(9.22F, 16.999F)
          horizontalLineTo(5.5F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(8.999F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 4.0F, 4.0F, 4.67F, 4.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(5.5F)
          curveTo(16.0F, 4.671F, 15.328F, 4.0F, 14.5F, 4.0F)
          close()
          moveToRelative(-3.52F, 11.376F)
          lineToRelative(4.829F, -4.83F)
          curveToRelative(0.73F, -0.73F, 1.914F, -0.73F, 2.644F, 0.0F)
          curveToRelative(0.73F, 0.731F, 0.73F, 1.915F, 0.0F, 2.646F)
          lineToRelative(-4.829F, 4.828F)
          curveToRelative(-0.281F, 0.282F, -0.634F, 0.482F, -1.02F, 0.578F)
          lineToRelative(-1.498F, 0.375F)
          curveToRelative(-0.651F, 0.163F, -1.241F, -0.427F, -1.078F, -1.079F)
          lineToRelative(0.374F, -1.498F)
          curveToRelative(0.097F, -0.386F, 0.296F, -0.739F, 0.578F, -1.02F)
          close()        
      }
    }
    return _calendarEdit20!!
  }

private var _calendarEdit20: ImageVector? = null
