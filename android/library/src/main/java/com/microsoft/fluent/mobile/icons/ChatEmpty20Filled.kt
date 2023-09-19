package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatEmpty20: ImageVector
  get() {
    if (_chatEmpty20 != null) {
      return _chatEmpty20!!
    }
    _chatEmpty20 = fluentIcon(name = "Filled.ChatEmpty20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, -3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          lineToRelative(0.007F, 0.346F)
          lineToRelative(0.026F, 0.382F)
          curveToRelative(0.091F, 1.014F, 0.374F, 1.99F, 0.829F, 2.887F)
          lineToRelative(0.063F, 0.12F)
          lineToRelative(-0.91F, 3.644F)
          lineTo(2.0F, 17.462F)
          verticalLineToRelative(0.082F)
          curveToRelative(0.025F, 0.293F, 0.31F, 0.518F, 0.62F, 0.441F)
          lineToRelative(3.645F, -0.91F)
          lineToRelative(0.12F, 0.064F)
          curveTo(7.497F, 17.702F, 8.727F, 18.0F, 10.0F, 18.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          close()        
      }
    }
    return _chatEmpty20!!
  }

private var _chatEmpty20: ImageVector? = null
