package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PulseSquare24: ImageVector
  get() {
    if (_pulseSquare24 != null) {
      return _pulseSquare24!!
    }
    _pulseSquare24 = fluentIcon(name = "Filled.PulseSquare24", 24f) {
      materialPath {
          moveTo(18.749F, 3.0F)
          curveToRelative(1.242F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(13.502F)
          curveToRelative(0.0F, 1.243F, -1.008F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(5.25F)
          curveTo(3.0F, 4.007F, 4.007F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(13.499F)
          close()
          moveTo(9.812F, 7.95F)
          lineTo(8.255F, 11.5F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 11.5F, 6.0F, 11.836F, 6.0F, 12.25F)
          curveTo(6.0F, 12.665F, 6.336F, 13.0F, 6.75F, 13.0F)
          horizontalLineToRelative(1.995F)
          curveToRelative(0.298F, 0.0F, 0.568F, -0.176F, 0.687F, -0.448F)
          lineToRelative(1.035F, -2.362F)
          lineToRelative(2.337F, 5.834F)
          curveToRelative(0.24F, 0.6F, 1.077F, 0.636F, 1.367F, 0.057F)
          lineToRelative(1.542F, -3.08F)
          horizontalLineToRelative(1.537F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.415F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.284F, 0.0F, -0.543F, 0.16F, -0.67F, 0.414F)
          lineToRelative(-1.004F, 2.003F)
          lineToRelative(-2.381F, -5.946F)
          curveToRelative(-0.247F, -0.618F, -1.116F, -0.632F, -1.383F, -0.023F)
          close()        
      }
    }
    return _pulseSquare24!!
  }

private var _pulseSquare24: ImageVector? = null
