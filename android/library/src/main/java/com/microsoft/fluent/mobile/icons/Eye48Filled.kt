package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Eye48: ImageVector
  get() {
    if (_eye48 != null) {
      return _eye48!!
    }
    _eye48 = fluentIcon(name = "Filled.Eye48", 48f) {
      materialPath {
          moveTo(41.56F, 26.13F)
          curveToRelative(0.17F, 0.53F, 0.66F, 0.87F, 1.19F, 0.87F)
          curveToRelative(0.13F, 0.0F, 0.25F, -0.02F, 0.38F, -0.06F)
          curveToRelative(0.65F, -0.21F, 1.02F, -0.91F, 0.81F, -1.57F)
          lineToRelative(-0.001F, -0.003F)
          curveTo(43.85F, 25.1F, 38.841F, 10.0F, 23.999F, 10.0F)
          curveTo(9.16F, 10.0F, 4.15F, 25.1F, 4.062F, 25.367F)
          lineTo(4.06F, 25.37F)
          curveToRelative(-0.21F, 0.66F, 0.15F, 1.36F, 0.81F, 1.57F)
          curveToRelative(0.66F, 0.21F, 1.36F, -0.15F, 1.57F, -0.81F)
          curveTo(6.62F, 25.57F, 10.95F, 12.5F, 24.0F, 12.5F)
          curveToRelative(13.05F, 0.0F, 17.38F, 13.07F, 17.56F, 13.63F)
          close()
          moveTo(24.0F, 36.0F)
          curveToRelative(4.97F, 0.0F, 9.0F, -4.03F, 9.0F, -9.0F)
          reflectiveCurveToRelative(-4.03F, -9.0F, -9.0F, -9.0F)
          reflectiveCurveToRelative(-9.0F, 4.03F, -9.0F, 9.0F)
          reflectiveCurveToRelative(4.03F, 9.0F, 9.0F, 9.0F)
          close()        
      }
    }
    return _eye48!!
  }

private var _eye48: ImageVector? = null
