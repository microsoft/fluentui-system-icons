package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CompassNorthwest24: ImageVector
  get() {
    if (_compassNorthwest24 != null) {
      return _compassNorthwest24!!
    }
    _compassNorthwest24 = fluentIcon(name = "Regular.CompassNorthwest24", 24f) {
      materialPath {
          moveTo(3.5F, 12.0F)
          curveToRelative(0.0F, -4.694F, 3.806F, -8.5F, 8.5F, -8.5F)
          reflectiveCurveToRelative(8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          close()
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveTo(7.083F, 8.708F)
          curveToRelative(-0.406F, -1.02F, 0.605F, -2.03F, 1.624F, -1.624F)
          lineToRelative(4.029F, 1.605F)
          curveToRelative(1.172F, 0.467F, 2.11F, 1.381F, 2.607F, 2.541F)
          lineToRelative(1.854F, 4.326F)
          curveToRelative(0.444F, 1.037F, -0.604F, 2.086F, -1.641F, 1.641F)
          lineToRelative(-4.326F, -1.854F)
          curveToRelative(-1.16F, -0.497F, -2.074F, -1.435F, -2.541F, -2.607F)
          lineTo(7.083F, 8.708F)
          close()
          moveToRelative(1.61F, -0.016F)
          lineToRelative(1.39F, 3.489F)
          curveToRelative(0.319F, 0.802F, 0.944F, 1.444F, 1.738F, 1.784F)
          lineToRelative(3.751F, 1.607F)
          lineToRelative(-1.608F, -3.75F)
          curveToRelative(-0.34F, -0.794F, -0.982F, -1.42F, -1.784F, -1.74F)
          lineToRelative(-3.488F, -1.39F)
          close()        
      }
    }
    return _compassNorthwest24!!
  }

private var _compassNorthwest24: ImageVector? = null
