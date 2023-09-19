package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowLeft20: ImageVector
  get() {
    if (_arrowLeft20 != null) {
      return _arrowLeft20!!
    }
    _arrowLeft20 = fluentIcon(name = "Filled.ArrowLeft20", 20f) {
      materialPath {
          moveTo(8.73F, 16.795F)
          curveToRelative(0.302F, 0.285F, 0.776F, 0.271F, 1.061F, -0.03F)
          curveToRelative(0.285F, -0.3F, 0.271F, -0.775F, -0.03F, -1.06F)
          lineTo(4.522F, 10.75F)
          horizontalLineToRelative(12.724F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(4.52F)
          lineToRelative(5.241F, -4.957F)
          curveToRelative(0.301F, -0.285F, 0.315F, -0.76F, 0.03F, -1.06F)
          curveToRelative(-0.285F, -0.301F, -0.76F, -0.315F, -1.06F, -0.03F)
          lineToRelative(-6.418F, 6.07F)
          curveTo(2.147F, 9.43F, 2.047F, 9.63F, 2.013F, 9.839F)
          curveTo(2.004F, 9.89F, 1.997F, 9.945F, 1.997F, 10.0F)
          curveToRelative(0.0F, 0.058F, 0.007F, 0.114F, 0.019F, 0.168F)
          curveToRelative(0.035F, 0.206F, 0.134F, 0.402F, 0.298F, 0.558F)
          lineToRelative(6.418F, 6.07F)
          close()        
      }
    }
    return _arrowLeft20!!
  }

private var _arrowLeft20: ImageVector? = null
