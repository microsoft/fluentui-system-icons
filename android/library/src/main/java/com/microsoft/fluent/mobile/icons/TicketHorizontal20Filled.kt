package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TicketHorizontal20: ImageVector
  get() {
    if (_ticketHorizontal20 != null) {
      return _ticketHorizontal20!!
    }
    _ticketHorizontal20 = fluentIcon(name = "Filled.TicketHorizontal20", 20f) {
      materialPath {
          moveTo(18.0F, 6.0F)
          verticalLineToRelative(1.5F)
          curveTo(18.0F, 7.776F, 17.776F, 8.0F, 17.5F, 8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-1.5F)
          curveTo(2.0F, 12.224F, 2.224F, 12.0F, 2.5F, 12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          curveTo(2.224F, 8.0F, 2.0F, 7.776F, 2.0F, 7.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _ticketHorizontal20!!
  }

private var _ticketHorizontal20: ImageVector? = null
