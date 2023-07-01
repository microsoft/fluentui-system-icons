package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnUpDown20: ImageVector
  get() {
    if (_arrowTurnUpDown20 != null) {
      return _arrowTurnUpDown20!!
    }
    _arrowTurnUpDown20 = fluentIcon(name = "Regular.ArrowTurnUpDown20", 20f) {
      materialPath {
          moveTo(15.566F, 16.996F)
          curveToRelative(0.038F, -0.005F, 0.076F, -0.014F, 0.113F, -0.028F)
          curveToRelative(0.13F, -0.05F, 0.234F, -0.152F, 0.286F, -0.282F)
          lineToRelative(2.0F, -5.0F)
          curveToRelative(0.102F, -0.256F, -0.023F, -0.547F, -0.28F, -0.65F)
          curveToRelative(-0.256F, -0.102F, -0.547F, 0.022F, -0.65F, 0.279F)
          lineToRelative(-1.534F, 3.837F)
          lineToRelative(-4.59F, -11.524F)
          curveTo(10.583F, 2.8F, 9.417F, 2.784F, 9.065F, 3.603F)
          lineToRelative(-5.023F, 11.7F)
          curveToRelative(-0.11F, 0.254F, 0.008F, 0.548F, 0.262F, 0.657F)
          curveToRelative(0.254F, 0.109F, 0.548F, -0.009F, 0.657F, -0.262F)
          lineToRelative(5.023F, -11.7F)
          lineToRelative(4.567F, 11.468F)
          lineToRelative(-3.826F, -1.913F)
          curveToRelative(-0.247F, -0.123F, -0.548F, -0.023F, -0.671F, 0.224F)
          curveToRelative(-0.124F, 0.247F, -0.023F, 0.547F, 0.224F, 0.67F)
          lineToRelative(4.982F, 2.491F)
          curveToRelative(0.092F, 0.05F, 0.2F, 0.072F, 0.307F, 0.058F)
          close()        
      }
    }
    return _arrowTurnUpDown20!!
  }

private var _arrowTurnUpDown20: ImageVector? = null
