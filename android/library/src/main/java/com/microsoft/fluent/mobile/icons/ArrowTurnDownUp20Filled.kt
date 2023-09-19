package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnDownUp20: ImageVector
  get() {
    if (_arrowTurnDownUp20 != null) {
      return _arrowTurnDownUp20!!
    }
    _arrowTurnDownUp20 = fluentIcon(name = "Filled.ArrowTurnDownUp20", 20f) {
      materialPath {
          moveTo(16.447F, 3.472F)
          curveToRelative(-0.078F, -0.195F, -0.233F, -0.349F, -0.43F, -0.423F)
          curveToRelative(-0.195F, -0.075F, -0.414F, -0.064F, -0.601F, 0.03F)
          lineToRelative(-5.001F, 2.5F)
          curveToRelative(-0.37F, 0.185F, -0.521F, 0.636F, -0.336F, 1.006F)
          reflectiveCurveToRelative(0.636F, 0.521F, 1.006F, 0.336F)
          lineToRelative(3.244F, -1.622F)
          lineToRelative(-4.32F, 9.818F)
          lineTo(5.44F, 4.455F)
          curveTo(5.276F, 4.074F, 4.835F, 3.897F, 4.455F, 4.06F)
          curveTo(4.074F, 4.224F, 3.898F, 4.665F, 4.06F, 5.045F)
          lineToRelative(4.796F, 11.192F)
          curveToRelative(0.43F, 1.005F, 1.853F, 1.012F, 2.293F, 0.011F)
          lineToRelative(4.606F, -10.466F)
          lineToRelative(1.298F, 3.246F)
          curveToRelative(0.153F, 0.385F, 0.59F, 0.572F, 0.974F, 0.418F)
          curveToRelative(0.385F, -0.153F, 0.572F, -0.59F, 0.418F, -0.974F)
          lineToRelative(-1.999F, -5.0F)
          close()        
      }
    }
    return _arrowTurnDownUp20!!
  }

private var _arrowTurnDownUp20: ImageVector? = null
