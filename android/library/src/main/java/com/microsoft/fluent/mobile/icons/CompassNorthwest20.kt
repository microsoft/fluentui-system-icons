package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CompassNorthwest20: ImageVector
  get() {
    if (_compassNorthwest20 != null) {
      return _compassNorthwest20!!
    }
    _compassNorthwest20 = fluentIcon(name = "Filled.CompassNorthwest20", 20f) {
      materialPath {
          moveTo(10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(0.51F, -10.127F)
          curveToRelative(0.74F, 0.295F, 1.333F, 0.872F, 1.647F, 1.605F)
          lineToRelative(1.6F, 3.731F)
          curveToRelative(0.148F, 0.346F, -0.202F, 0.696F, -0.548F, 0.548F)
          lineToRelative(-3.731F, -1.6F)
          curveToRelative(-0.733F, -0.314F, -1.31F, -0.906F, -1.606F, -1.647F)
          lineTo(6.484F, 7.025F)
          curveToRelative(-0.136F, -0.34F, 0.201F, -0.677F, 0.54F, -0.541F)
          lineToRelative(3.486F, 1.389F)
          close()        
      }
    }
    return _compassNorthwest20!!
  }

private var _compassNorthwest20: ImageVector? = null
