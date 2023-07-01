package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CompassNorthwest16: ImageVector
  get() {
    if (_compassNorthwest16 != null) {
      return _compassNorthwest16!!
    }
    _compassNorthwest16 = fluentIcon(name = "Regular.CompassNorthwest16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(6.0F, -7.0F)
          curveTo(4.134F, 1.0F, 1.0F, 4.134F, 1.0F, 8.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveTo(5.13F, 6.478F)
          curveTo(4.683F, 5.612F, 5.613F, 4.682F, 6.48F, 5.13F)
          lineToRelative(1.908F, 0.99F)
          curveTo(9.027F, 6.45F, 9.55F, 6.971F, 9.882F, 7.61F)
          lineToRelative(1.0F, 1.922F)
          curveToRelative(0.451F, 0.867F, -0.482F, 1.8F, -1.349F, 1.349F)
          lineToRelative(-1.921F, -1.0F)
          curveTo(6.972F, 9.549F, 6.45F, 9.027F, 6.119F, 8.387F)
          lineTo(5.131F, 6.478F)
          close()
          moveToRelative(2.797F, 0.53F)
          lineTo(6.02F, 6.017F)
          lineToRelative(0.988F, 1.909F)
          curveToRelative(0.237F, 0.457F, 0.61F, 0.83F, 1.066F, 1.068F)
          lineToRelative(1.922F, 1.0F)
          lineToRelative(-1.0F, -1.922F)
          curveToRelative(-0.238F, -0.457F, -0.61F, -0.83F, -1.068F, -1.066F)
          close()        
      }
    }
    return _compassNorthwest16!!
  }

private var _compassNorthwest16: ImageVector? = null
