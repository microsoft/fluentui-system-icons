package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnLeftRight20: ImageVector
  get() {
    if (_arrowTurnLeftRight20 != null) {
      return _arrowTurnLeftRight20!!
    }
    _arrowTurnLeftRight20 = fluentIcon(name = "Filled.ArrowTurnLeftRight20", 20f) {
      materialPath {
          moveTo(15.53F, 15.447F)
          curveToRelative(0.194F, -0.078F, 0.347F, -0.233F, 0.422F, -0.43F)
          curveToRelative(0.074F, -0.195F, 0.063F, -0.414F, -0.03F, -0.601F)
          lineToRelative(-2.5F, -5.001F)
          curveToRelative(-0.186F, -0.37F, -0.636F, -0.521F, -1.007F, -0.336F)
          curveToRelative(-0.37F, 0.185F, -0.52F, 0.636F, -0.335F, 1.006F)
          lineToRelative(1.62F, 3.245F)
          lineToRelative(-9.817F, -4.32F)
          lineToRelative(10.663F, -4.57F)
          curveToRelative(0.38F, -0.163F, 0.557F, -0.603F, 0.394F, -0.984F)
          curveToRelative(-0.163F, -0.381F, -0.604F, -0.557F, -0.985F, -0.394F)
          lineTo(2.764F, 7.857F)
          curveTo(1.759F, 8.287F, 1.752F, 9.71F, 2.752F, 10.15F)
          lineToRelative(10.467F, 4.606F)
          lineToRelative(-3.247F, 1.298F)
          curveToRelative(-0.384F, 0.153F, -0.572F, 0.59F, -0.418F, 0.974F)
          curveToRelative(0.154F, 0.385F, 0.59F, 0.572F, 0.975F, 0.418F)
          lineToRelative(5.0F, -1.999F)
          close()        
      }
    }
    return _arrowTurnLeftRight20!!
  }

private var _arrowTurnLeftRight20: ImageVector? = null
