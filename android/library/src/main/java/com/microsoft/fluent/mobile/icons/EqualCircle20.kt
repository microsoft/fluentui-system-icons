package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EqualCircle20: ImageVector
  get() {
    if (_equalCircle20 != null) {
      return _equalCircle20!!
    }
    _equalCircle20 = fluentIcon(name = "Filled.EqualCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(3.5F, 7.0F)
          curveTo(13.776F, 9.0F, 14.0F, 8.776F, 14.0F, 8.5F)
          reflectiveCurveTo(13.776F, 8.0F, 13.5F, 8.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 8.0F, 6.0F, 8.224F, 6.0F, 8.5F)
          reflectiveCurveTo(6.224F, 9.0F, 6.5F, 9.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 11.0F, 13.5F, 11.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 11.0F, 6.0F, 11.224F, 6.0F, 11.5F)
          reflectiveCurveTo(6.224F, 12.0F, 6.5F, 12.0F)
          horizontalLineToRelative(7.0F)
          close()        
      }
    }
    return _equalCircle20!!
  }

private var _equalCircle20: ImageVector? = null
