package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowForward16: ImageVector
  get() {
    if (_arrowForward16 != null) {
      return _arrowForward16!!
    }
    _arrowForward16 = fluentIcon(name = "Filled.ArrowForward16", 16f) {
      materialPath {
          moveTo(11.69F, 8.0F)
          lineToRelative(-2.256F, 2.256F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.266F, 0.266F, 0.683F, 0.29F, 0.977F, 0.073F)
          lineToRelative(0.084F, -0.073F)
          lineToRelative(3.535F, -3.535F)
          lineTo(14.1F, 7.7F)
          lineToRelative(0.04F, -0.058F)
          lineToRelative(0.05F, -0.095F)
          lineToRelative(0.032F, -0.091F)
          lineToRelative(0.016F, -0.068F)
          lineToRelative(0.01F, -0.062F)
          lineToRelative(0.003F, -0.094F)
          lineToRelative(-0.004F, -0.059F)
          lineTo(14.23F, 7.08F)
          lineToRelative(-0.03F, -0.1F)
          lineToRelative(-0.046F, -0.098F)
          lineToRelative(-0.035F, -0.055F)
          curveToRelative(-0.026F, -0.038F, -0.055F, -0.074F, -0.089F, -0.107F)
          lineToRelative(0.07F, 0.079F)
          curveToRelative(-0.022F, -0.029F, -0.045F, -0.054F, -0.07F, -0.079F)
          lineToRelative(-3.535F, -3.535F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          curveTo(9.167F, 3.45F, 9.143F, 3.866F, 9.36F, 4.16F)
          lineToRelative(0.073F, 0.084F)
          lineTo(11.69F, 6.5F)
          horizontalLineTo(8.0F)
          curveToRelative(-3.652F, 0.0F, -6.133F, 2.077F, -6.246F, 5.037F)
          lineTo(1.75F, 11.75F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.335F, 0.75F, -0.75F)
          curveToRelative(0.0F, -2.129F, 1.692F, -3.658F, 4.492F, -3.746F)
          lineTo(8.0F, 8.0F)
          horizontalLineToRelative(3.69F)
          close()        
      }
    }
    return _arrowForward16!!
  }

private var _arrowForward16: ImageVector? = null
