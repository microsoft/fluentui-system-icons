package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Attach20: ImageVector
  get() {
    if (_attach20 != null) {
      return _attach20!!
    }
    _attach20 = fluentIcon(name = "Filled.Attach20", 20f) {
      materialPath {
          moveTo(5.28F, 10.609F)
          lineToRelative(5.304F, -5.303F)
          curveToRelative(1.074F, -1.075F, 2.815F, -1.075F, 3.889F, 0.0F)
          curveToRelative(1.074F, 1.073F, 1.074F, 2.815F, 0.0F, 3.888F)
          lineToRelative(-6.364F, 6.364F)
          curveToRelative(-0.488F, 0.489F, -1.28F, 0.489F, -1.768F, 0.0F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.767F)
          lineToRelative(5.657F, -5.657F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.294F, -0.768F, -0.294F, -1.06F, 0.0F)
          lineTo(5.28F, 12.73F)
          curveToRelative(-1.074F, 1.074F, -1.074F, 2.815F, 0.0F, 3.89F)
          curveToRelative(1.074F, 1.073F, 2.815F, 1.073F, 3.89F, 0.0F)
          lineToRelative(6.363F, -6.365F)
          curveToRelative(1.66F, -1.66F, 1.66F, -4.35F, 0.0F, -6.01F)
          curveToRelative(-1.66F, -1.66F, -4.35F, -1.66F, -6.01F, 0.0F)
          lineTo(4.22F, 9.548F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.294F, 0.767F, 0.294F, 1.06F, 0.0F)
          close()        
      }
    }
    return _attach20!!
  }

private var _attach20: ImageVector? = null
