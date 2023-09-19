package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatEmpty28: ImageVector
  get() {
    if (_chatEmpty28 != null) {
      return _chatEmpty28!!
    }
    _chatEmpty28 = fluentIcon(name = "Regular.ChatEmpty28", 28f) {
      materialPath {
          moveTo(14.0F, 3.5F)
          curveTo(8.201F, 3.5F, 3.5F, 8.201F, 3.5F, 14.0F)
          curveToRelative(0.0F, 1.884F, 0.496F, 3.65F, 1.363F, 5.178F)
          curveToRelative(0.1F, 0.175F, 0.124F, 0.382F, 0.07F, 0.575F)
          lineToRelative(-1.318F, 4.634F)
          lineToRelative(4.634F, -1.318F)
          curveToRelative(0.194F, -0.055F, 0.401F, -0.03F, 0.576F, 0.07F)
          curveTo(10.352F, 24.004F, 12.117F, 24.5F, 14.0F, 24.5F)
          curveToRelative(5.799F, 0.0F, 10.5F, -4.701F, 10.5F, -10.5F)
          reflectiveCurveTo(19.799F, 3.5F, 14.0F, 3.5F)
          close()
          moveTo(2.0F, 14.0F)
          curveTo(2.0F, 7.373F, 7.373F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          curveToRelative(-2.036F, 0.0F, -3.955F, -0.508F, -5.637F, -1.404F)
          lineToRelative(-4.77F, 1.357F)
          curveTo(2.651F, 26.22F, 1.781F, 25.35F, 2.05F, 24.409F)
          lineToRelative(1.356F, -4.77F)
          curveTo(2.508F, 17.959F, 2.0F, 16.038F, 2.0F, 14.0F)
          close()        
      }
    }
    return _chatEmpty28!!
  }

private var _chatEmpty28: ImageVector? = null
