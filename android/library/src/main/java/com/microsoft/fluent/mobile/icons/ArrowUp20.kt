package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUp20: ImageVector
  get() {
    if (_arrowUp20 != null) {
      return _arrowUp20!!
    }
    _arrowUp20 = fluentIcon(name = "Filled.ArrowUp20", 20f) {
      materialPath {
          moveTo(3.201F, 8.735F)
          curveToRelative(-0.284F, 0.3F, -0.271F, 0.775F, 0.03F, 1.06F)
          curveToRelative(0.3F, 0.284F, 0.775F, 0.271F, 1.06F, -0.03F)
          lineToRelative(4.955F, -5.239F)
          verticalLineTo(17.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.524F)
          lineToRelative(4.957F, 5.241F)
          curveToRelative(0.285F, 0.301F, 0.76F, 0.314F, 1.06F, 0.03F)
          curveToRelative(0.301F, -0.285F, 0.315F, -0.76F, 0.03F, -1.06F)
          lineToRelative(-6.07F, -6.418F)
          curveToRelative(-0.157F, -0.166F, -0.357F, -0.266F, -0.566F, -0.3F)
          curveTo(10.106F, 2.006F, 10.053F, 2.0F, 9.998F, 2.0F)
          curveToRelative(-0.061F, 0.0F, -0.117F, 0.006F, -0.17F, 0.019F)
          curveTo(9.623F, 2.054F, 9.426F, 2.153F, 9.27F, 2.317F)
          lineTo(3.2F, 8.735F)
          close()        
      }
    }
    return _arrowUp20!!
  }

private var _arrowUp20: ImageVector? = null
