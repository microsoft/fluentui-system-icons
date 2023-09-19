package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ImageCircle20: ImageVector
  get() {
    if (_imageCircle20 != null) {
      return _imageCircle20!!
    }
    _imageCircle20 = fluentIcon(name = "Regular.ImageCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 1.755F, 0.646F, 3.359F, 1.712F, 4.587F)
          lineToRelative(4.236F, -4.168F)
          curveToRelative(0.584F, -0.575F, 1.52F, -0.575F, 2.104F, 0.0F)
          lineToRelative(4.236F, 4.168F)
          curveTo(16.354F, 13.36F, 17.0F, 11.755F, 17.0F, 10.0F)
          curveToRelative(0.0F, -3.866F, -3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveToRelative(0.0F, 14.0F)
          curveToRelative(1.751F, 0.0F, 3.352F, -0.643F, 4.58F, -1.706F)
          lineToRelative(-4.23F, -4.163F)
          curveToRelative(-0.194F, -0.191F, -0.506F, -0.191F, -0.7F, 0.0F)
          lineToRelative(-4.23F, 4.163F)
          curveTo(6.648F, 16.357F, 8.249F, 17.0F, 10.0F, 17.0F)
          close()
          moveToRelative(-8.0F, -7.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(11.0F, -2.5F)
          curveTo(13.0F, 7.224F, 12.776F, 7.0F, 12.5F, 7.0F)
          reflectiveCurveTo(12.0F, 7.224F, 12.0F, 7.5F)
          reflectiveCurveTo(12.224F, 8.0F, 12.5F, 8.0F)
          reflectiveCurveTo(13.0F, 7.776F, 13.0F, 7.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveTo(14.0F, 8.328F, 13.328F, 9.0F, 12.5F, 9.0F)
          reflectiveCurveTo(11.0F, 8.328F, 11.0F, 7.5F)
          reflectiveCurveTo(11.672F, 6.0F, 12.5F, 6.0F)
          reflectiveCurveTo(14.0F, 6.672F, 14.0F, 7.5F)
          close()        
      }
    }
    return _imageCircle20!!
  }

private var _imageCircle20: ImageVector? = null
