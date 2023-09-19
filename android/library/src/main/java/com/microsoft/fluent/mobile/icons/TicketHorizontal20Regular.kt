package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TicketHorizontal20: ImageVector
  get() {
    if (_ticketHorizontal20 != null) {
      return _ticketHorizontal20!!
    }
    _ticketHorizontal20 = fluentIcon(name = "Regular.TicketHorizontal20", 20f) {
      materialPath {
          moveTo(16.5F, 5.0F)
          curveTo(17.328F, 5.0F, 18.0F, 5.672F, 18.0F, 6.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveToRelative(0.672F, 1.5F, 1.5F, 1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.672F, 15.0F, 2.0F, 14.328F, 2.0F, 13.5F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(3.328F, 8.5F, 2.5F, 8.5F)
          curveTo(2.224F, 8.5F, 2.0F, 8.276F, 2.0F, 8.0F)
          verticalLineTo(6.5F)
          curveTo(2.0F, 5.672F, 2.672F, 5.0F, 3.5F, 5.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveTo(17.0F, 6.5F)
          curveTo(17.0F, 6.224F, 16.776F, 6.0F, 16.5F, 6.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 6.0F, 3.0F, 6.224F, 3.0F, 6.5F)
          verticalLineToRelative(1.05F)
          curveTo(4.141F, 7.782F, 5.0F, 8.79F, 5.0F, 10.0F)
          curveToRelative(0.0F, 1.21F, -0.859F, 2.218F, -2.0F, 2.45F)
          verticalLineToRelative(1.05F)
          curveTo(3.0F, 13.776F, 3.224F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-1.05F)
          curveToRelative(-1.141F, -0.232F, -2.0F, -1.24F, -2.0F, -2.45F)
          curveToRelative(0.0F, -1.152F, 0.779F, -2.122F, 1.839F, -2.412F)
          lineTo(17.0F, 7.55F)
          verticalLineTo(6.5F)
          close()        
      }
    }
    return _ticketHorizontal20!!
  }

private var _ticketHorizontal20: ImageVector? = null
