package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Autosum16: ImageVector
  get() {
    if (_autosum16 != null) {
      return _autosum16!!
    }
    _autosum16 = fluentIcon(name = "Filled.Autosum16", 16f) {
      materialPath {
          moveTo(2.06F, 1.956F)
          curveTo(2.178F, 1.679F, 2.45F, 1.5F, 2.75F, 1.5F)
          horizontalLineToRelative(9.5F)
          curveTo(12.664F, 1.5F, 13.0F, 1.836F, 13.0F, 2.25F)
          reflectiveCurveTo(12.664F, 3.0F, 12.25F, 3.0F)
          horizontalLineTo(4.51F)
          lineToRelative(3.915F, 4.08F)
          curveToRelative(0.273F, 0.284F, 0.28F, 0.73F, 0.015F, 1.023F)
          lineTo(4.445F, 12.5F)
          horizontalLineToRelative(7.805F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(12.664F, 14.0F, 12.25F, 14.0F)
          horizontalLineToRelative(-9.5F)
          curveToRelative(-0.297F, 0.0F, -0.566F, -0.175F, -0.686F, -0.447F)
          curveToRelative(-0.12F, -0.27F, -0.069F, -0.588F, 0.13F, -0.807F)
          lineToRelative(4.664F, -5.133F)
          lineToRelative(-4.65F, -4.844F)
          curveTo(2.002F, 2.553F, 1.943F, 2.232F, 2.06F, 1.956F)
          close()        
      }
    }
    return _autosum16!!
  }

private var _autosum16: ImageVector? = null
