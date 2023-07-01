package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatEmpty20: ImageVector
  get() {
    if (_chatEmpty20 != null) {
      return _chatEmpty20!!
    }
    _chatEmpty20 = fluentIcon(name = "Regular.ChatEmpty20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          curveToRelative(-1.273F, 0.0F, -2.504F, -0.298F, -3.613F, -0.86F)
          lineToRelative(-0.121F, -0.065F)
          lineToRelative(-3.645F, 0.91F)
          curveToRelative(-0.31F, 0.078F, -0.595F, -0.148F, -0.62F, -0.441F)
          verticalLineToRelative(-0.082F)
          lineToRelative(0.014F, -0.083F)
          lineToRelative(0.91F, -3.644F)
          lineToRelative(-0.063F, -0.12F)
          curveToRelative(-0.455F, -0.896F, -0.738F, -1.873F, -0.83F, -2.887F)
          lineToRelative(-0.025F, -0.382F)
          lineTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 1.217F, 0.31F, 2.388F, 0.893F, 3.425F)
          curveToRelative(0.048F, 0.083F, 0.07F, 0.178F, 0.064F, 0.272F)
          lineToRelative(-0.014F, 0.094F)
          lineToRelative(-0.756F, 3.021F)
          lineToRelative(3.024F, -0.754F)
          curveToRelative(0.062F, -0.015F, 0.126F, -0.018F, 0.188F, -0.01F)
          lineToRelative(0.091F, 0.021F)
          lineToRelative(0.087F, 0.039F)
          curveTo(7.614F, 16.69F, 8.784F, 17.0F, 10.0F, 17.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()        
      }
    }
    return _chatEmpty20!!
  }

private var _chatEmpty20: ImageVector? = null
