package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRightLeft20: ImageVector
  get() {
    if (_arrowTurnRightLeft20 != null) {
      return _arrowTurnRightLeft20!!
    }
    _arrowTurnRightLeft20 = fluentIcon(name = "Regular.ArrowTurnRightLeft20", 20f) {
      materialPath {
          moveTo(4.004F, 14.566F)
          curveToRelative(0.005F, 0.038F, 0.015F, 0.076F, 0.029F, 0.113F)
          curveToRelative(0.05F, 0.13F, 0.152F, 0.234F, 0.281F, 0.286F)
          lineToRelative(5.0F, 2.0F)
          curveToRelative(0.257F, 0.102F, 0.548F, -0.023F, 0.65F, -0.28F)
          curveToRelative(0.103F, -0.256F, -0.022F, -0.547F, -0.278F, -0.65F)
          lineToRelative(-3.838F, -1.534F)
          lineToRelative(11.524F, -4.59F)
          curveToRelative(0.828F, -0.329F, 0.844F, -1.495F, 0.025F, -1.847F)
          lineTo(5.697F, 3.04F)
          curveTo(5.444F, 2.93F, 5.15F, 3.049F, 5.04F, 3.303F)
          curveTo(4.933F, 3.557F, 5.05F, 3.85F, 5.303F, 3.96F)
          lineToRelative(11.7F, 5.023F)
          lineTo(5.534F, 13.55F)
          lineToRelative(1.912F, -3.826F)
          curveTo(7.57F, 9.477F, 7.47F, 9.176F, 7.223F, 9.053F)
          curveTo(6.977F, 8.929F, 6.676F, 9.03F, 6.553F, 9.277F)
          lineToRelative(-2.49F, 4.982F)
          curveToRelative(-0.051F, 0.092F, -0.073F, 0.2F, -0.059F, 0.307F)
          close()        
      }
    }
    return _arrowTurnRightLeft20!!
  }

private var _arrowTurnRightLeft20: ImageVector? = null
