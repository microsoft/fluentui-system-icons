package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pin28: ImageVector
  get() {
    if (_pin28 != null) {
      return _pin28!!
    }
    _pin28 = fluentIcon(name = "Filled.Pin28", 28f) {
      materialPath {
          moveTo(19.039F, 3.478F)
          curveToRelative(-1.59F, -1.59F, -4.274F, -1.124F, -5.236F, 0.907F)
          lineToRelative(-2.553F, 5.39F)
          curveToRelative(-0.192F, 0.406F, -0.534F, 0.723F, -0.953F, 0.884F)
          lineToRelative(-4.13F, 1.588F)
          curveToRelative(-1.182F, 0.455F, -1.505F, 1.976F, -0.61F, 2.871F)
          lineTo(8.69F, 18.25F)
          lineTo(3.0F, 23.94F)
          verticalLineTo(25.0F)
          horizontalLineToRelative(1.06F)
          lineToRelative(5.69F, -5.69F)
          lineToRelative(3.132F, 3.132F)
          curveToRelative(0.895F, 0.895F, 2.416F, 0.573F, 2.87F, -0.61F)
          lineToRelative(1.589F, -4.13F)
          curveToRelative(0.161F, -0.419F, 0.478F, -0.76F, 0.884F, -0.953F)
          lineToRelative(5.39F, -2.553F)
          curveToRelative(2.031F, -0.962F, 2.496F, -3.646F, 0.907F, -5.235F)
          lineToRelative(-5.483F, -5.483F)
          close()        
      }
    }
    return _pin28!!
  }

private var _pin28: ImageVector? = null
