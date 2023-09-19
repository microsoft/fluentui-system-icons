package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDown20: ImageVector
  get() {
    if (_arrowDown20 != null) {
      return _arrowDown20!!
    }
    _arrowDown20 = fluentIcon(name = "Filled.ArrowDown20", 20f) {
      materialPath {
          moveTo(16.792F, 11.265F)
          curveToRelative(0.285F, -0.3F, 0.272F, -0.775F, -0.03F, -1.06F)
          curveToRelative(-0.3F, -0.284F, -0.775F, -0.271F, -1.06F, 0.03F)
          lineToRelative(-4.955F, 5.239F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.414F, -0.335F, -0.75F, -0.75F, -0.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(12.726F)
          lineTo(4.29F, 10.235F)
          curveToRelative(-0.285F, -0.301F, -0.76F, -0.314F, -1.06F, -0.03F)
          curveToRelative(-0.301F, 0.285F, -0.314F, 0.76F, -0.03F, 1.06F)
          lineToRelative(6.07F, 6.418F)
          curveToRelative(0.157F, 0.166F, 0.357F, 0.266F, 0.566F, 0.3F)
          curveTo(9.888F, 17.994F, 9.942F, 18.0F, 9.997F, 18.0F)
          curveToRelative(0.058F, 0.0F, 0.114F, -0.006F, 0.168F, -0.019F)
          curveToRelative(0.206F, -0.035F, 0.403F, -0.134F, 0.558F, -0.298F)
          lineToRelative(6.07F, -6.418F)
          close()        
      }
    }
    return _arrowDown20!!
  }

private var _arrowDown20: ImageVector? = null
