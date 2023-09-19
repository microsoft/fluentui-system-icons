package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextPositionTopBottom20: ImageVector
  get() {
    if (_textPositionTopBottom20 != null) {
      return _textPositionTopBottom20!!
    }
    _textPositionTopBottom20 = fluentIcon(name = "Regular.TextPositionTopBottom20", 20f) {
      materialPath {
          moveTo(3.0F, 3.5F)
          curveTo(3.0F, 3.224F, 3.224F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 3.0F, 17.0F, 3.224F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 4.0F, 16.5F, 4.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 4.0F, 3.0F, 3.776F, 3.0F, 3.5F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveTo(3.0F, 15.224F, 3.224F, 15.0F, 3.5F, 15.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 16.0F, 16.5F, 16.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 16.0F, 3.0F, 15.776F, 3.0F, 15.5F)
          close()
          moveToRelative(4.5F, -7.0F)
          curveTo(7.5F, 7.12F, 8.62F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          curveTo(13.5F, 6.567F, 11.933F, 5.0F, 10.0F, 5.0F)
          reflectiveCurveTo(6.5F, 6.567F, 6.5F, 8.5F)
          verticalLineToRelative(5.0F)
          curveTo(6.5F, 13.776F, 6.724F, 14.0F, 7.0F, 14.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          close()        
      }
    }
    return _textPositionTopBottom20!!
  }

private var _textPositionTopBottom20: ImageVector? = null
