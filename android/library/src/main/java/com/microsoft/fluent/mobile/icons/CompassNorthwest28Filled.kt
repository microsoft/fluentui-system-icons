package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CompassNorthwest28: ImageVector
  get() {
    if (_compassNorthwest28 != null) {
      return _compassNorthwest28!!
    }
    _compassNorthwest28 = fluentIcon(name = "Filled.CompassNorthwest28", 28f) {
      materialPath {
          moveTo(14.0F, 26.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          close()
          moveToRelative(-0.424F, -8.702F)
          curveToRelative(-1.322F, -0.508F, -2.366F, -1.552F, -2.874F, -2.874F)
          lineTo(8.783F, 9.43F)
          curveTo(8.628F, 9.025F, 9.025F, 8.628F, 9.429F, 8.784F)
          lineToRelative(4.995F, 1.918F)
          curveToRelative(1.321F, 0.508F, 2.366F, 1.553F, 2.874F, 2.874F)
          lineToRelative(1.919F, 4.995F)
          curveToRelative(0.155F, 0.404F, -0.242F, 0.801F, -0.646F, 0.646F)
          lineToRelative(-4.995F, -1.919F)
          close()        
      }
    }
    return _compassNorthwest28!!
  }

private var _compassNorthwest28: ImageVector? = null
