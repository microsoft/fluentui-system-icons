package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCurveDownRight20: ImageVector
  get() {
    if (_arrowCurveDownRight20 != null) {
      return _arrowCurveDownRight20!!
    }
    _arrowCurveDownRight20 = fluentIcon(name = "Filled.ArrowCurveDownRight20", 20f) {
      materialPath {
          moveTo(6.614F, 3.143F)
          curveTo(6.26F, 2.93F, 6.144F, 2.47F, 6.357F, 2.114F)
          curveTo(6.57F, 1.76F, 7.03F, 1.644F, 7.386F, 1.857F)
          curveToRelative(1.347F, 0.808F, 2.34F, 1.785F, 2.98F, 3.135F)
          curveToRelative(0.63F, 1.33F, 0.884F, 2.955F, 0.884F, 5.008F)
          verticalLineToRelative(5.44F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.293F, -0.292F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.72F, 2.72F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.947F, -0.245F, -3.321F, -0.74F, -4.366F)
          curveToRelative(-0.486F, -1.026F, -1.243F, -1.799F, -2.396F, -2.49F)
          close()        
      }
    }
    return _arrowCurveDownRight20!!
  }

private var _arrowCurveDownRight20: ImageVector? = null
