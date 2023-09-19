package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TicketHorizontal24: ImageVector
  get() {
    if (_ticketHorizontal24 != null) {
      return _ticketHorizontal24!!
    }
    _ticketHorizontal24 = fluentIcon(name = "Filled.TicketHorizontal24", 24f) {
      materialPath {
          moveTo(20.75F, 5.0F)
          curveTo(21.44F, 5.0F, 22.0F, 5.56F, 22.0F, 6.25F)
          verticalLineToRelative(2.259F)
          curveToRelative(0.0F, 0.393F, -0.304F, 0.72F, -0.697F, 0.748F)
          curveTo(19.87F, 9.358F, 18.75F, 10.555F, 18.75F, 12.0F)
          curveToRelative(0.0F, 1.445F, 1.12F, 2.642F, 2.553F, 2.743F)
          curveTo(21.696F, 14.771F, 22.0F, 15.097F, 22.0F, 15.491F)
          verticalLineToRelative(2.259F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 19.0F, 2.0F, 18.44F, 2.0F, 17.75F)
          verticalLineToRelative(-2.259F)
          curveToRelative(0.0F, -0.393F, 0.304F, -0.72F, 0.697F, -0.748F)
          curveTo(4.131F, 14.642F, 5.25F, 13.446F, 5.25F, 12.0F)
          reflectiveCurveTo(4.13F, 9.358F, 2.697F, 9.257F)
          curveTo(2.304F, 9.229F, 2.0F, 8.903F, 2.0F, 8.509F)
          verticalLineTo(6.25F)
          curveTo(2.0F, 5.56F, 2.56F, 5.0F, 3.25F, 5.0F)
          horizontalLineToRelative(17.5F)
          close()        
      }
    }
    return _ticketHorizontal24!!
  }

private var _ticketHorizontal24: ImageVector? = null
