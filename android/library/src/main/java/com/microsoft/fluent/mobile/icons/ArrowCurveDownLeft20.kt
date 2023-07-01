package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCurveDownLeft20: ImageVector
  get() {
    if (_arrowCurveDownLeft20 != null) {
      return _arrowCurveDownLeft20!!
    }
    _arrowCurveDownLeft20 = fluentIcon(name = "Filled.ArrowCurveDownLeft20", 20f) {
      materialPath {
          moveTo(13.386F, 3.143F)
          curveToRelative(0.355F, -0.213F, 0.47F, -0.674F, 0.257F, -1.029F)
          curveToRelative(-0.213F, -0.355F, -0.674F, -0.47F, -1.029F, -0.257F)
          curveToRelative(-1.347F, 0.808F, -2.34F, 1.785F, -2.98F, 3.135F)
          curveTo(9.005F, 6.322F, 8.75F, 7.947F, 8.75F, 10.0F)
          verticalLineToRelative(5.44F)
          lineToRelative(-2.72F, -2.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.72F, 2.72F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.947F, 0.245F, -3.321F, 0.74F, -4.366F)
          curveToRelative(0.486F, -1.026F, 1.243F, -1.799F, 2.396F, -2.49F)
          close()        
      }
    }
    return _arrowCurveDownLeft20!!
  }

private var _arrowCurveDownLeft20: ImageVector? = null
