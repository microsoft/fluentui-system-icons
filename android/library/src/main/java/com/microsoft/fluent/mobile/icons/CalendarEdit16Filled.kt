package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarEdit16: ImageVector
  get() {
    if (_calendarEdit16 != null) {
      return _calendarEdit16!!
    }
    _calendarEdit16 = fluentIcon(name = "Filled.CalendarEdit16", 16f) {
      materialPath {
          moveTo(7.318F, 13.031F)
          curveToRelative(0.122F, -0.488F, 0.375F, -0.934F, 0.73F, -1.29F)
          lineToRelative(4.288F, -4.287F)
          curveToRelative(0.191F, -0.191F, 0.42F, -0.322F, 0.662F, -0.394F)
          curveToRelative(0.53F, -0.155F, 1.127F, -0.024F, 1.545F, 0.394F)
          curveToRelative(0.61F, 0.61F, 0.61F, 1.597F, 0.0F, 2.207F)
          lineToRelative(-4.288F, 4.287F)
          curveToRelative(-0.356F, 0.356F, -0.801F, 0.608F, -1.29F, 0.73F)
          lineToRelative(-1.21F, 0.303F)
          curveToRelative(-0.447F, 0.112F, -0.851F, -0.292F, -0.74F, -0.739F)
          lineToRelative(0.303F, -1.21F)
          close()
          moveTo(13.998F, 5.0F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.499F, -2.5F, -2.499F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(11.998F)
          close()
          moveToRelative(-1.0F, 1.036F)
          verticalLineTo(6.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.499F, 2.5F, 2.499F)
          horizontalLineToRelative(1.546F)
          lineToRelative(0.302F, -1.21F)
          curveToRelative(0.166F, -0.663F, 0.51F, -1.27F, 0.994F, -1.754F)
          lineToRelative(4.287F, -4.287F)
          curveTo(12.016F, 6.36F, 12.497F, 6.123F, 13.0F, 6.035F)
          close()        
      }
    }
    return _calendarEdit16!!
  }

private var _calendarEdit16: ImageVector? = null
