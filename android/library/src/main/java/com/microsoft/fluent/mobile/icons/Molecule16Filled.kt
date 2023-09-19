package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Molecule16: ImageVector
  get() {
    if (_molecule16 != null) {
      return _molecule16!!
    }
    _molecule16 = fluentIcon(name = "Filled.Molecule16", 16f) {
      materialPath {
          moveTo(11.0F, 8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          curveToRelative(0.0F, 0.464F, 0.105F, 0.903F, 0.293F, 1.295F)
          lineToRelative(-2.34F, 1.17F)
          curveTo(5.542F, 7.172F, 5.041F, 7.0F, 4.5F, 7.0F)
          curveTo(3.12F, 7.0F, 2.0F, 8.12F, 2.0F, 9.5F)
          reflectiveCurveTo(3.12F, 12.0F, 4.5F, 12.0F)
          curveToRelative(0.96F, 0.0F, 1.793F, -0.541F, 2.212F, -1.335F)
          lineToRelative(2.297F, 1.148F)
          curveTo(9.003F, 11.875F, 9.0F, 11.937F, 9.0F, 12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          curveToRelative(-0.684F, 0.0F, -1.288F, 0.343F, -1.648F, 0.867F)
          lineToRelative(-2.359F, -1.18F)
          curveTo(6.998F, 9.627F, 7.0F, 9.563F, 7.0F, 9.5F)
          curveToRelative(0.0F, -0.463F, -0.126F, -0.897F, -0.345F, -1.268F)
          lineTo(8.878F, 7.12F)
          curveTo(9.42F, 7.664F, 10.17F, 8.0F, 11.0F, 8.0F)
          close()        
      }
    }
    return _molecule16!!
  }

private var _molecule16: ImageVector? = null
