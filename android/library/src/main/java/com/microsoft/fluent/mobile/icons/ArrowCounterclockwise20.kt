package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCounterclockwise20: ImageVector
  get() {
    if (_arrowCounterclockwise20 != null) {
      return _arrowCounterclockwise20!!
    }
    _arrowCounterclockwise20 = fluentIcon(name = "Regular.ArrowCounterclockwise20", 20f) {
      materialPath {
          moveTo(16.934F, 9.051F)
          curveToRelative(-0.524F, -3.83F, -4.055F, -6.51F, -7.885F, -5.985F)
          curveTo(7.106F, 3.332F, 5.46F, 4.37F, 4.377F, 5.83F)
          lineTo(4.25F, 6.0F)
          horizontalLineTo(7.5F)
          curveTo(7.776F, 6.0F, 8.0F, 6.225F, 8.0F, 6.5F)
          reflectiveCurveTo(7.776F, 7.0F, 7.5F, 7.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(3.224F, 7.0F, 3.0F, 6.777F, 3.0F, 6.5F)
          verticalLineToRelative(-4.0F)
          curveTo(3.0F, 2.224F, 3.224F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(4.0F, 2.225F, 4.0F, 2.501F)
          verticalLineToRelative(2.207F)
          curveTo(5.224F, 3.32F, 6.935F, 2.346F, 8.913F, 2.075F)
          curveToRelative(4.378F, -0.6F, 8.412F, 2.463F, 9.012F, 6.84F)
          curveToRelative(0.6F, 4.378F, -2.463F, 8.412F, -6.84F, 9.012F)
          curveToRelative(-4.378F, 0.6F, -8.412F, -2.463F, -9.012F, -6.84F)
          curveToRelative(-0.074F, -0.542F, -0.092F, -1.078F, -0.059F, -1.604F)
          curveToRelative(0.018F, -0.276F, 0.256F, -0.485F, 0.531F, -0.467F)
          curveToRelative(0.276F, 0.018F, 0.485F, 0.255F, 0.467F, 0.53F)
          curveToRelative(-0.03F, 0.46F, -0.013F, 0.93F, 0.052F, 1.405F)
          curveToRelative(0.524F, 3.83F, 4.055F, 6.51F, 7.885F, 5.985F)
          curveToRelative(3.83F, -0.524F, 6.51F, -4.055F, 5.985F, -7.885F)
          close()        
      }
    }
    return _arrowCounterclockwise20!!
  }

private var _arrowCounterclockwise20: ImageVector? = null
