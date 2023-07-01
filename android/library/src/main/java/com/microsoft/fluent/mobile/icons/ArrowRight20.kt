package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRight20: ImageVector
  get() {
    if (_arrowRight20 != null) {
      return _arrowRight20!!
    }
    _arrowRight20 = fluentIcon(name = "Filled.ArrowRight20", 20f) {
      materialPath {
          moveTo(11.265F, 3.205F)
          curveToRelative(-0.3F, -0.284F, -0.775F, -0.271F, -1.06F, 0.03F)
          curveToRelative(-0.284F, 0.3F, -0.271F, 0.775F, 0.03F, 1.06F)
          lineToRelative(5.239F, 4.955F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 9.25F, 2.0F, 9.586F, 2.0F, 10.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(12.726F)
          lineToRelative(-5.241F, 4.957F)
          curveToRelative(-0.301F, 0.285F, -0.314F, 0.76F, -0.03F, 1.06F)
          curveToRelative(0.285F, 0.301F, 0.76F, 0.315F, 1.06F, 0.03F)
          lineToRelative(6.418F, -6.07F)
          curveToRelative(0.166F, -0.157F, 0.266F, -0.357F, 0.3F, -0.566F)
          curveTo(17.994F, 10.11F, 18.0F, 10.055F, 18.0F, 10.0F)
          curveToRelative(0.0F, -0.058F, -0.006F, -0.114F, -0.019F, -0.168F)
          curveToRelative(-0.035F, -0.205F, -0.134F, -0.402F, -0.298F, -0.557F)
          lineToRelative(-6.418F, -6.07F)
          close()        
      }
    }
    return _arrowRight20!!
  }

private var _arrowRight20: ImageVector? = null
