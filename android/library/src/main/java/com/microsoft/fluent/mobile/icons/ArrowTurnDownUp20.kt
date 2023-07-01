package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnDownUp20: ImageVector
  get() {
    if (_arrowTurnDownUp20 != null) {
      return _arrowTurnDownUp20!!
    }
    _arrowTurnDownUp20 = fluentIcon(name = "Regular.ArrowTurnDownUp20", 20f) {
      materialPath {
          moveTo(15.566F, 3.004F)
          curveToRelative(0.038F, 0.005F, 0.076F, 0.015F, 0.113F, 0.029F)
          curveToRelative(0.13F, 0.05F, 0.234F, 0.152F, 0.286F, 0.281F)
          lineToRelative(2.0F, 5.0F)
          curveToRelative(0.102F, 0.257F, -0.023F, 0.548F, -0.28F, 0.65F)
          curveToRelative(-0.256F, 0.103F, -0.547F, -0.022F, -0.65F, -0.278F)
          lineToRelative(-1.534F, -3.838F)
          lineToRelative(-4.59F, 11.524F)
          curveToRelative(-0.329F, 0.828F, -1.495F, 0.844F, -1.847F, 0.025F)
          lineTo(4.04F, 4.697F)
          curveTo(3.93F, 4.444F, 4.049F, 4.15F, 4.303F, 4.04F)
          curveTo(4.557F, 3.932F, 4.85F, 4.05F, 4.96F, 4.303F)
          lineToRelative(5.023F, 11.7F)
          lineTo(14.55F, 4.534F)
          lineToRelative(-3.826F, 1.912F)
          curveToRelative(-0.247F, 0.124F, -0.548F, 0.024F, -0.671F, -0.223F)
          curveToRelative(-0.124F, -0.247F, -0.023F, -0.548F, 0.224F, -0.671F)
          lineToRelative(4.982F, -2.49F)
          curveToRelative(0.092F, -0.051F, 0.2F, -0.073F, 0.307F, -0.059F)
          close()        
      }
    }
    return _arrowTurnDownUp20!!
  }

private var _arrowTurnDownUp20: ImageVector? = null
