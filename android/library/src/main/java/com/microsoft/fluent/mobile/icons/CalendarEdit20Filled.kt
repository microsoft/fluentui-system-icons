package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarEdit20: ImageVector
  get() {
    if (_calendarEdit20 != null) {
      return _calendarEdit20!!
    }
    _calendarEdit20 = fluentIcon(name = "Filled.CalendarEdit20", 20f) {
      materialPath {
          moveTo(16.998F, 7.0F)
          verticalLineToRelative(2.002F)
          curveToRelative(-0.69F, 0.032F, -1.37F, 0.311F, -1.897F, 0.838F)
          lineToRelative(-4.83F, 4.829F)
          curveToRelative(-0.409F, 0.41F, -0.7F, 0.923F, -0.84F, 1.485F)
          lineTo(9.22F, 16.999F)
          horizontalLineTo(5.5F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          verticalLineToRelative(-7.5F)
          horizontalLineToRelative(13.998F)
          close()
          moveToRelative(-2.5F, -4.0F)
          curveToRelative(1.381F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(8.999F)
          close()
          moveToRelative(-3.52F, 12.376F)
          lineToRelative(4.83F, -4.83F)
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
