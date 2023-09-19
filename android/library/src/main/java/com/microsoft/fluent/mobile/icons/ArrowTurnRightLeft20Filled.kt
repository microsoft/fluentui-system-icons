package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRightLeft20: ImageVector
  get() {
    if (_arrowTurnRightLeft20 != null) {
      return _arrowTurnRightLeft20!!
    }
    _arrowTurnRightLeft20 = fluentIcon(name = "Filled.ArrowTurnRightLeft20", 20f) {
      materialPath {
          moveTo(4.472F, 15.447F)
          curveToRelative(-0.195F, -0.078F, -0.349F, -0.233F, -0.423F, -0.43F)
          curveToRelative(-0.075F, -0.195F, -0.064F, -0.414F, 0.03F, -0.601F)
          lineToRelative(2.5F, -5.001F)
          curveToRelative(0.185F, -0.37F, 0.636F, -0.521F, 1.006F, -0.336F)
          reflectiveCurveToRelative(0.521F, 0.636F, 0.336F, 1.006F)
          lineTo(6.299F, 13.33F)
          lineToRelative(9.818F, -4.32F)
          lineTo(5.455F, 4.44F)
          curveTo(5.074F, 4.276F, 4.897F, 3.837F, 5.06F, 3.455F)
          curveTo(5.224F, 3.074F, 5.665F, 2.898F, 6.045F, 3.06F)
          lineToRelative(11.192F, 4.796F)
          curveToRelative(1.005F, 0.43F, 1.012F, 1.853F, 0.011F, 2.293F)
          lineTo(6.782F, 14.756F)
          lineToRelative(3.246F, 1.298F)
          curveToRelative(0.385F, 0.153F, 0.572F, 0.59F, 0.418F, 0.974F)
          curveToRelative(-0.153F, 0.385F, -0.59F, 0.572F, -0.974F, 0.418F)
          lineToRelative(-5.0F, -1.999F)
          close()        
      }
    }
    return _arrowTurnRightLeft20!!
  }

private var _arrowTurnRightLeft20: ImageVector? = null
