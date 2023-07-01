package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TicketDiagonal24: ImageVector
  get() {
    if (_ticketDiagonal24 != null) {
      return _ticketDiagonal24!!
    }
    _ticketDiagonal24 = fluentIcon(name = "Filled.TicketDiagonal24", 24f) {
      materialPath {
          moveTo(15.59F, 2.53F)
          curveToRelative(-0.878F, -0.879F, -2.303F, -0.879F, -3.181F, 0.0F)
          lineTo(2.53F, 12.41F)
          curveToRelative(-0.879F, 0.878F, -0.879F, 2.303F, 0.0F, 3.182F)
          lineToRelative(1.172F, 1.171F)
          curveToRelative(0.51F, 0.511F, 1.227F, 0.42F, 1.66F, 0.162F)
          curveTo(5.548F, 16.814F, 5.765F, 16.75F, 6.0F, 16.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          curveToRelative(0.0F, 0.234F, -0.064F, 0.451F, -0.175F, 0.637F)
          curveToRelative(-0.257F, 0.433F, -0.349F, 1.15F, 0.162F, 1.66F)
          lineTo(8.41F, 21.47F)
          curveToRelative(0.878F, 0.88F, 2.303F, 0.88F, 3.182F, 0.0F)
          lineToRelative(9.878F, -9.878F)
          curveToRelative(0.88F, -0.879F, 0.88F, -2.303F, 0.0F, -3.182F)
          lineToRelative(-1.171F, -1.172F)
          curveToRelative(-0.51F, -0.51F, -1.228F, -0.42F, -1.661F, -0.162F)
          curveTo(18.45F, 7.186F, 18.234F, 7.25F, 18.0F, 7.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          curveToRelative(0.0F, -0.234F, 0.063F, -0.452F, 0.174F, -0.638F)
          curveToRelative(0.258F, -0.433F, 0.349F, -1.15F, -0.162F, -1.66F)
          lineTo(15.591F, 2.53F)
          close()        
      }
    }
    return _ticketDiagonal24!!
  }

private var _ticketDiagonal24: ImageVector? = null
