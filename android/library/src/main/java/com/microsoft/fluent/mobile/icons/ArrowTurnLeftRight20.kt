package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnLeftRight20: ImageVector
  get() {
    if (_arrowTurnLeftRight20 != null) {
      return _arrowTurnLeftRight20!!
    }
    _arrowTurnLeftRight20 = fluentIcon(name = "Regular.ArrowTurnLeftRight20", 20f) {
      materialPath {
          moveTo(15.996F, 14.566F)
          curveToRelative(-0.005F, 0.038F, -0.014F, 0.076F, -0.028F, 0.113F)
          curveToRelative(-0.05F, 0.13F, -0.152F, 0.234F, -0.282F, 0.286F)
          lineToRelative(-5.0F, 2.0F)
          curveToRelative(-0.256F, 0.102F, -0.547F, -0.023F, -0.65F, -0.28F)
          curveToRelative(-0.102F, -0.256F, 0.022F, -0.547F, 0.279F, -0.65F)
          lineToRelative(3.837F, -1.534F)
          lineToRelative(-11.524F, -4.59F)
          curveTo(1.8F, 9.583F, 1.784F, 8.417F, 2.603F, 8.065F)
          lineToRelative(11.7F, -5.023F)
          curveToRelative(0.254F, -0.11F, 0.548F, 0.008F, 0.657F, 0.262F)
          curveToRelative(0.109F, 0.254F, -0.009F, 0.548F, -0.262F, 0.657F)
          lineToRelative(-11.7F, 5.023F)
          lineToRelative(11.468F, 4.567F)
          lineToRelative(-1.913F, -3.826F)
          curveToRelative(-0.123F, -0.247F, -0.023F, -0.548F, 0.224F, -0.671F)
          curveToRelative(0.247F, -0.124F, 0.547F, -0.023F, 0.67F, 0.224F)
          lineToRelative(2.491F, 4.982F)
          curveToRelative(0.05F, 0.092F, 0.072F, 0.2F, 0.058F, 0.307F)
          close()        
      }
    }
    return _arrowTurnLeftRight20!!
  }

private var _arrowTurnLeftRight20: ImageVector? = null
