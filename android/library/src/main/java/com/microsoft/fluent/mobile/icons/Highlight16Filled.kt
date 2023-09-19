package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Highlight16: ImageVector
  get() {
    if (_highlight16 != null) {
      return _highlight16!!
    }
    _highlight16 = fluentIcon(name = "Filled.Highlight16", 16f) {
      materialPath {
          moveTo(3.0F, 1.0F)
          curveTo(2.448F, 1.0F, 2.0F, 1.448F, 2.0F, 2.0F)
          verticalLineToRelative(2.5F)
          curveTo(2.0F, 5.328F, 2.672F, 6.0F, 3.5F, 6.0F)
          curveTo(3.483F, 6.0F, 3.467F, 6.0F, 3.45F, 6.003F)
          horizontalLineToRelative(0.102F)
          curveTo(3.535F, 6.0F, 3.517F, 6.0F, 3.5F, 6.0F)
          horizontalLineToRelative(0.246F)
          verticalLineToRelative(0.003F)
          horizontalLineToRelative(8.545F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(0.21F)
          curveToRelative(-0.017F, 0.0F, -0.034F, 0.0F, -0.051F, 0.003F)
          horizontalLineToRelative(0.102F)
          lineTo(12.5F, 6.0F)
          horizontalLineToRelative(0.001F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(2.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(0.001F, 6.003F)
          curveTo(3.002F, 8.106F, 3.897F, 9.0F, 5.001F, 9.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.104F, 0.0F, 1.999F, -0.894F, 2.0F, -1.997F)
          horizontalLineToRelative(-10.0F)
          close()
          moveTo(5.003F, 14.5F)
          verticalLineTo(10.0F)
          horizontalLineTo(11.0F)
          lineToRelative(0.002F, 0.74F)
          curveToRelative(0.0F, 0.511F, -0.26F, 0.988F, -0.69F, 1.265F)
          lineToRelative(-4.54F, 2.916F)
          curveToRelative(-0.154F, 0.099F, -0.35F, 0.106F, -0.51F, 0.018F)
          curveToRelative(-0.16F, -0.088F, -0.26F, -0.256F, -0.26F, -0.439F)
          close()        
      }
    }
    return _highlight16!!
  }

private var _highlight16: ImageVector? = null
