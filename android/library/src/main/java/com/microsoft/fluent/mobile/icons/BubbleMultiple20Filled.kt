package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BubbleMultiple20: ImageVector
  get() {
    if (_bubbleMultiple20 != null) {
      return _bubbleMultiple20!!
    }
    _bubbleMultiple20 = fluentIcon(name = "Filled.BubbleMultiple20", 20f) {
      materialPath {
          moveTo(19.0F, 4.5F)
          curveTo(19.0F, 6.433F, 17.433F, 8.0F, 15.5F, 8.0F)
          reflectiveCurveTo(12.0F, 6.433F, 12.0F, 4.5F)
          reflectiveCurveTo(13.567F, 1.0F, 15.5F, 1.0F)
          reflectiveCurveTo(19.0F, 2.567F, 19.0F, 4.5F)
          close()
          moveTo(9.172F, 15.595F)
          curveTo(9.632F, 16.992F, 10.947F, 18.0F, 12.497F, 18.0F)
          curveToRelative(1.934F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          curveToRelative(0.0F, -1.793F, -1.347F, -3.271F, -3.085F, -3.476F)
          curveToRelative(-0.36F, 2.095F, -1.808F, 3.819F, -3.74F, 4.57F)
          close()
          moveTo(12.0F, 10.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()
          moveTo(7.029F, 7.505F)
          curveToRelative(-0.092F, 0.26F, 0.044F, 0.546F, 0.304F, 0.638F)
          curveToRelative(0.71F, 0.251F, 1.274F, 0.814F, 1.525F, 1.524F)
          curveToRelative(0.092F, 0.26F, 0.377F, 0.397F, 0.638F, 0.305F)
          curveToRelative(0.26F, -0.093F, 0.396F, -0.378F, 0.304F, -0.639F)
          curveTo(9.448F, 8.34F, 8.661F, 7.552F, 7.667F, 7.2F)
          curveTo(7.407F, 7.108F, 7.12F, 7.245F, 7.029F, 7.505F)
          close()        
      }
    }
    return _bubbleMultiple20!!
  }

private var _bubbleMultiple20: ImageVector? = null
