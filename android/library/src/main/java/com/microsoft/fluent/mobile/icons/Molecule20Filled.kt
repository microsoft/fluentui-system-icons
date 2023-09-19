package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Molecule20: ImageVector
  get() {
    if (_molecule20 != null) {
      return _molecule20!!
    }
    _molecule20 = fluentIcon(name = "Filled.Molecule20", 20f) {
      materialPath {
          moveTo(17.0F, 6.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          curveToRelative(-1.387F, 0.0F, -2.609F, -0.706F, -3.326F, -1.778F)
          lineTo(8.006F, 9.056F)
          curveTo(8.62F, 9.687F, 9.0F, 10.55F, 9.0F, 11.5F)
          curveToRelative(0.0F, 0.372F, -0.058F, 0.73F, -0.166F, 1.067F)
          lineToRelative(2.7F, 1.388F)
          curveTo(11.992F, 13.374F, 12.702F, 13.0F, 13.5F, 13.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveTo(14.88F, 18.0F, 13.5F, 18.0F)
          reflectiveCurveTo(11.0F, 16.88F, 11.0F, 15.5F)
          curveToRelative(0.0F, -0.225F, 0.03F, -0.443F, 0.086F, -0.65F)
          lineToRelative(-2.69F, -1.384F)
          curveTo(7.766F, 14.392F, 6.704F, 15.0F, 5.5F, 15.0F)
          curveTo(3.567F, 15.0F, 2.0F, 13.433F, 2.0F, 11.5F)
          reflectiveCurveTo(3.567F, 8.0F, 5.5F, 8.0F)
          curveToRelative(0.578F, 0.0F, 1.124F, 0.14F, 1.605F, 0.389F)
          lineToRelative(2.12F, -1.06F)
          curveTo(9.08F, 6.911F, 9.0F, 6.465F, 9.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()        
      }
    }
    return _molecule20!!
  }

private var _molecule20: ImageVector? = null
