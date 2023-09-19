package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CompassNorthwest16: ImageVector
  get() {
    if (_compassNorthwest16 != null) {
      return _compassNorthwest16!!
    }
    _compassNorthwest16 = fluentIcon(name = "Filled.CompassNorthwest16", 16f) {
      materialPath {
          moveTo(8.0F, 15.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          close()
          moveToRelative(2.438F, -5.236F)
          curveToRelative(0.226F, 0.433F, -0.24F, 0.9F, -0.674F, 0.674F)
          lineToRelative(-1.922F, -1.0F)
          curveTo(7.294F, 9.153F, 6.848F, 8.706F, 6.563F, 8.157F)
          lineTo(5.574F, 6.248F)
          curveTo(5.35F, 5.815F, 5.815F, 5.35F, 6.248F, 5.574F)
          lineToRelative(1.91F, 0.99F)
          curveToRelative(0.548F, 0.283F, 0.995F, 0.73F, 1.28F, 1.278F)
          lineToRelative(1.0F, 1.922F)
          close()        
      }
    }
    return _compassNorthwest16!!
  }

private var _compassNorthwest16: ImageVector? = null
