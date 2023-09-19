package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PinOff48: ImageVector
  get() {
    if (_pinOff48 != null) {
      return _pinOff48!!
    }
    _pinOff48 = fluentIcon(name = "Filled.PinOff48", 48f) {
      materialPath {
          moveTo(29.524F, 31.292F)
          lineToRelative(12.092F, 12.092F)
          curveToRelative(0.488F, 0.489F, 1.28F, 0.489F, 1.768F, 0.0F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.767F)
          lineToRelative(-37.0F, -37.0F)
          curveToRelative(-0.488F, -0.489F, -1.28F, -0.489F, -1.768F, 0.0F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.767F)
          lineTo(16.71F, 18.477F)
          lineToRelative(-6.25F, 2.159F)
          curveToRelative(-1.92F, 0.663F, -2.484F, 3.108F, -1.047F, 4.544F)
          lineToRelative(5.82F, 5.82F)
          lineTo(6.0F, 40.233F)
          verticalLineTo(42.0F)
          horizontalLineToRelative(1.768F)
          lineTo(17.0F, 32.768F)
          lineToRelative(5.82F, 5.82F)
          curveToRelative(1.437F, 1.437F, 3.881F, 0.874F, 4.544F, -1.046F)
          lineToRelative(2.16F, -6.25F)
          close()
          moveToRelative(11.692F, -7.502F)
          lineToRelative(-8.082F, 4.041F)
          lineToRelative(-12.965F, -12.964F)
          lineToRelative(4.041F, -8.082F)
          curveToRelative(1.45F, -2.9F, 5.315F, -3.527F, 7.608F, -1.235F)
          lineTo(42.45F, 16.183F)
          curveToRelative(2.293F, 2.292F, 1.665F, 6.157F, -1.234F, 7.607F)
          close()        
      }
    }
    return _pinOff48!!
  }

private var _pinOff48: ImageVector? = null
