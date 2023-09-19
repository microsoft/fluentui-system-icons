package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pin48: ImageVector
  get() {
    if (_pin48 != null) {
      return _pin48!!
    }
    _pin48 = fluentIcon(name = "Filled.Pin48", 48f) {
      materialPath {
          moveTo(31.818F, 5.55F)
          lineTo(42.45F, 16.183F)
          curveToRelative(2.293F, 2.292F, 1.665F, 6.157F, -1.234F, 7.607F)
          lineTo(30.67F, 29.062F)
          curveToRelative(-0.292F, 0.147F, -0.516F, 0.401F, -0.622F, 0.71F)
          lineToRelative(-2.684F, 7.77F)
          curveToRelative(-0.664F, 1.92F, -3.108F, 2.483F, -4.544F, 1.047F)
          lineTo(17.0F, 32.769F)
          lineTo(7.768F, 42.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-1.767F)
          lineTo(15.232F, 31.0F)
          lineToRelative(-5.82F, -5.82F)
          curveToRelative(-1.437F, -1.436F, -0.874F, -3.88F, 1.046F, -4.544F)
          lineToRelative(7.77F, -2.684F)
          curveToRelative(0.309F, -0.107F, 0.564F, -0.33F, 0.71F, -0.623F)
          lineTo(24.21F, 6.785F)
          curveToRelative(1.45F, -2.9F, 5.315F, -3.527F, 7.608F, -1.235F)
          close()        
      }
    }
    return _pin48!!
  }

private var _pin48: ImageVector? = null
