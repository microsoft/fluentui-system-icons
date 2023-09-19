package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TicketDiagonal20: ImageVector
  get() {
    if (_ticketDiagonal20 != null) {
      return _ticketDiagonal20!!
    }
    _ticketDiagonal20 = fluentIcon(name = "Filled.TicketDiagonal20", 20f) {
      materialPath {
          moveTo(12.735F, 2.53F)
          curveToRelative(-0.683F, -0.683F, -1.791F, -0.683F, -2.475F, 0.0F)
          lineToRelative(-7.732F, 7.732F)
          curveToRelative(-0.683F, 0.684F, -0.683F, 1.792F, 0.0F, 2.475F)
          lineToRelative(0.775F, 0.775F)
          curveTo(3.71F, 13.92F, 4.29F, 13.85F, 4.65F, 13.652F)
          curveToRelative(0.177F, -0.097F, 0.38F, -0.152F, 0.6F, -0.152F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          curveToRelative(0.0F, 0.218F, -0.056F, 0.421F, -0.153F, 0.599F)
          curveToRelative(-0.197F, 0.36F, -0.267F, 0.939F, 0.14F, 1.346F)
          lineToRelative(0.774F, 0.774F)
          curveToRelative(0.684F, 0.684F, 1.792F, 0.684F, 2.475F, 0.0F)
          lineToRelative(7.733F, -7.732F)
          curveToRelative(0.683F, -0.683F, 0.683F, -1.791F, 0.0F, -2.475F)
          lineToRelative(-0.776F, -0.775F)
          curveToRelative(-0.406F, -0.406F, -0.985F, -0.337F, -1.345F, -0.14F)
          curveToRelative(-0.179F, 0.098F, -0.382F, 0.153F, -0.6F, 0.153F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          curveToRelative(0.0F, -0.218F, 0.055F, -0.422F, 0.152F, -0.599F)
          curveToRelative(0.197F, -0.36F, 0.267F, -0.94F, -0.14F, -1.346F)
          lineTo(12.736F, 2.53F)
          close()        
      }
    }
    return _ticketDiagonal20!!
  }

private var _ticketDiagonal20: ImageVector? = null
