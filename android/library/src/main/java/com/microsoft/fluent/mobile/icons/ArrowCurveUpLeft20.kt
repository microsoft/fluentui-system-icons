package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCurveUpLeft20: ImageVector
  get() {
    if (_arrowCurveUpLeft20 != null) {
      return _arrowCurveUpLeft20!!
    }
    _arrowCurveUpLeft20 = fluentIcon(name = "Filled.ArrowCurveUpLeft20", 20f) {
      materialPath {
          moveTo(6.03F, 7.03F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.72F, -2.72F)
          verticalLineToRelative(5.44F)
          curveToRelative(0.0F, 1.947F, 0.245F, 3.321F, 0.74F, 4.366F)
          curveToRelative(0.486F, 1.026F, 1.243F, 1.8F, 2.396F, 2.49F)
          curveToRelative(0.355F, 0.214F, 0.47F, 0.675F, 0.257F, 1.03F)
          curveToRelative(-0.213F, 0.355F, -0.674F, 0.47F, -1.029F, 0.257F)
          curveToRelative(-1.347F, -0.808F, -2.34F, -1.785F, -2.98F, -3.134F)
          curveToRelative(-0.63F, -1.33F, -0.884F, -2.956F, -0.884F, -5.009F)
          verticalLineTo(4.31F)
          lineTo(6.03F, 7.03F)
          close()        
      }
    }
    return _arrowCurveUpLeft20!!
  }

private var _arrowCurveUpLeft20: ImageVector? = null
