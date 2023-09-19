package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnUpDown20: ImageVector
  get() {
    if (_arrowTurnUpDown20 != null) {
      return _arrowTurnUpDown20!!
    }
    _arrowTurnUpDown20 = fluentIcon(name = "Filled.ArrowTurnUpDown20", 20f) {
      materialPath {
          moveTo(16.447F, 16.53F)
          curveToRelative(-0.078F, 0.194F, -0.233F, 0.347F, -0.43F, 0.422F)
          curveToRelative(-0.195F, 0.074F, -0.414F, 0.063F, -0.601F, -0.03F)
          lineToRelative(-5.001F, -2.5F)
          curveToRelative(-0.37F, -0.186F, -0.521F, -0.636F, -0.336F, -1.007F)
          curveToRelative(0.185F, -0.37F, 0.636F, -0.52F, 1.006F, -0.335F)
          lineToRelative(3.245F, 1.62F)
          lineToRelative(-4.32F, -9.818F)
          lineToRelative(-4.57F, 10.663F)
          curveToRelative(-0.163F, 0.38F, -0.604F, 0.557F, -0.984F, 0.394F)
          curveToRelative(-0.381F, -0.163F, -0.557F, -0.604F, -0.394F, -0.985F)
          lineToRelative(4.795F, -11.19F)
          curveToRelative(0.43F, -1.005F, 1.853F, -1.012F, 2.293F, -0.012F)
          lineToRelative(4.606F, 10.467F)
          lineToRelative(1.298F, -3.247F)
          curveToRelative(0.153F, -0.384F, 0.59F, -0.572F, 0.974F, -0.418F)
          curveToRelative(0.385F, 0.154F, 0.572F, 0.59F, 0.418F, 0.975F)
          lineToRelative(-1.999F, 5.0F)
          close()        
      }
    }
    return _arrowTurnUpDown20!!
  }

private var _arrowTurnUpDown20: ImageVector? = null
