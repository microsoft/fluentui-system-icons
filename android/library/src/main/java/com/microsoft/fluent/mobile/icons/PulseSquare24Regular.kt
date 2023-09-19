package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PulseSquare24: ImageVector
  get() {
    if (_pulseSquare24 != null) {
      return _pulseSquare24!!
    }
    _pulseSquare24 = fluentIcon(name = "Regular.PulseSquare24", 24f) {
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
          moveToRelative(0.0F, 1.5F)
          horizontalLineTo(5.25F)
          curveTo(4.836F, 4.5F, 4.5F, 4.836F, 4.5F, 5.25F)
          verticalLineToRelative(13.502F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(13.499F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.335F, 0.75F, -0.75F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveToRelative(-10.494F, 7.0F)
          lineToRelative(1.557F, -3.55F)
          curveToRelative(0.251F, -0.574F, 1.036F, -0.595F, 1.333F, -0.081F)
          lineToRelative(0.05F, 0.103F)
          lineToRelative(2.381F, 5.946F)
          lineToRelative(1.003F, -2.003F)
          curveToRelative(0.112F, -0.222F, 0.324F, -0.373F, 0.566F, -0.407F)
          lineTo(15.25F, 11.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.744F)
          lineTo(17.25F, 13.0F)
          horizontalLineToRelative(-1.537F)
          lineToRelative(-1.542F, 3.081F)
          curveToRelative(-0.273F, 0.545F, -1.03F, 0.546F, -1.319F, 0.044F)
          lineToRelative(-0.048F, -0.1F)
          lineToRelative(-2.337F, -5.835F)
          lineToRelative(-1.035F, 2.362F)
          curveToRelative(-0.104F, 0.238F, -0.324F, 0.403F, -0.577F, 0.44F)
          lineTo(8.745F, 13.0F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 13.0F, 6.0F, 12.665F, 6.0F, 12.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(6.75F, 11.5F)
          horizontalLineToRelative(1.505F)
          lineToRelative(1.557F, -3.55F)
          lineToRelative(-1.557F, 3.55F)
          close()        
      }
    }
    return _pulseSquare24!!
  }

private var _pulseSquare24: ImageVector? = null
