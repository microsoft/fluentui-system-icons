package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CompassNorthwest24: ImageVector
  get() {
    if (_compassNorthwest24 != null) {
      return _compassNorthwest24!!
    }
    _compassNorthwest24 = fluentIcon(name = "Filled.CompassNorthwest24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(0.458F, -12.614F)
          curveToRelative(0.987F, 0.393F, 1.777F, 1.163F, 2.196F, 2.14F)
          lineToRelative(1.854F, 4.325F)
          curveToRelative(0.177F, 0.415F, -0.242F, 0.835F, -0.657F, 0.657F)
          lineToRelative(-4.325F, -1.854F)
          curveToRelative(-0.977F, -0.419F, -1.747F, -1.209F, -2.14F, -2.196F)
          lineTo(7.78F, 8.43F)
          curveTo(7.618F, 8.022F, 8.022F, 7.618F, 8.43F, 7.78F)
          lineToRelative(4.028F, 1.606F)
          close()        
      }
    }
    return _compassNorthwest24!!
  }

private var _compassNorthwest24: ImageVector? = null
