package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CompassNorthwest28: ImageVector
  get() {
    if (_compassNorthwest28 != null) {
      return _compassNorthwest28!!
    }
    _compassNorthwest28 = fluentIcon(name = "Regular.CompassNorthwest28", 28f) {
      materialPath {
          moveTo(3.5F, 14.0F)
          curveTo(3.5F, 8.201F, 8.201F, 3.5F, 14.0F, 3.5F)
          reflectiveCurveTo(24.5F, 8.201F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 24.5F, 14.0F, 24.5F)
          reflectiveCurveTo(3.5F, 19.799F, 3.5F, 14.0F)
          close()
          moveTo(14.0F, 2.0F)
          curveTo(7.373F, 2.0F, 2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          close()
          moveTo(8.083F, 9.698F)
          curveToRelative(-0.388F, -1.01F, 0.604F, -2.003F, 1.615F, -1.615F)
          lineToRelative(4.995F, 1.92F)
          curveToRelative(1.52F, 0.583F, 2.72F, 1.784F, 3.305F, 3.304F)
          lineToRelative(1.919F, 4.995F)
          curveToRelative(0.388F, 1.01F, -0.605F, 2.003F, -1.615F, 1.615F)
          lineToRelative(-4.995F, -1.92F)
          curveToRelative(-1.52F, -0.583F, -2.72F, -1.784F, -3.305F, -3.304F)
          lineTo(8.083F, 9.698F)
          close()
          moveToRelative(1.602F, -0.013F)
          lineToRelative(1.717F, 4.47F)
          curveToRelative(0.432F, 1.123F, 1.32F, 2.011F, 2.443F, 2.443F)
          lineToRelative(4.47F, 1.717F)
          lineToRelative(-1.717F, -4.47F)
          curveToRelative(-0.432F, -1.123F, -1.32F, -2.01F, -2.443F, -2.443F)
          lineToRelative(-4.47F, -1.717F)
          close()        
      }
    }
    return _compassNorthwest28!!
  }

private var _compassNorthwest28: ImageVector? = null
