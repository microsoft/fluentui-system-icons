package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowClockwise20: ImageVector
  get() {
    if (_arrowClockwise20 != null) {
      return _arrowClockwise20!!
    }
    _arrowClockwise20 = fluentIcon(name = "Regular.ArrowClockwise20", 20f) {
      materialPath {
          moveTo(3.066F, 9.051F)
          curveToRelative(0.524F, -3.83F, 4.055F, -6.51F, 7.885F, -5.985F)
          curveToRelative(1.943F, 0.266F, 3.589F, 1.304F, 4.672F, 2.765F)
          lineTo(15.75F, 6.0F)
          horizontalLineTo(12.5F)
          curveTo(12.224F, 6.0F, 12.0F, 6.225F, 12.0F, 6.5F)
          reflectiveCurveTo(12.224F, 7.0F, 12.5F, 7.0F)
          horizontalLineToRelative(4.0F)
          curveTo(16.776F, 7.0F, 17.0F, 6.777F, 17.0F, 6.5F)
          verticalLineToRelative(-4.0F)
          curveTo(17.0F, 2.224F, 16.776F, 2.0F, 16.5F, 2.0F)
          reflectiveCurveTo(16.0F, 2.225F, 16.0F, 2.501F)
          verticalLineToRelative(2.207F)
          curveToRelative(-1.224F, -1.389F, -2.935F, -2.362F, -4.913F, -2.633F)
          curveToRelative(-4.378F, -0.6F, -8.412F, 2.463F, -9.012F, 6.84F)
          curveToRelative(-0.6F, 4.378F, 2.463F, 8.412F, 6.84F, 9.012F)
          curveToRelative(4.378F, 0.6F, 8.412F, -2.463F, 9.012F, -6.84F)
          curveToRelative(0.074F, -0.542F, 0.092F, -1.078F, 0.059F, -1.604F)
          curveToRelative(-0.018F, -0.276F, -0.256F, -0.485F, -0.531F, -0.467F)
          curveToRelative(-0.276F, 0.018F, -0.485F, 0.255F, -0.467F, 0.53F)
          curveToRelative(0.029F, 0.46F, 0.013F, 0.93F, -0.052F, 1.405F)
          curveToRelative(-0.524F, 3.83F, -4.055F, 6.51F, -7.885F, 5.985F)
          curveToRelative(-3.83F, -0.524F, -6.51F, -4.055F, -5.985F, -7.885F)
          close()        
      }
    }
    return _arrowClockwise20!!
  }

private var _arrowClockwise20: ImageVector? = null
