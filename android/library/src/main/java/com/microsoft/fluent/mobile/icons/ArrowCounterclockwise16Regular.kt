package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCounterclockwise16: ImageVector
  get() {
    if (_arrowCounterclockwise16 != null) {
      return _arrowCounterclockwise16!!
    }
    _arrowCounterclockwise16 = fluentIcon(name = "Regular.ArrowCounterclockwise16", 16f) {
      materialPath {
          moveTo(13.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          curveToRelative(-1.635F, 0.0F, -3.087F, 0.784F, -4.0F, 2.0F)
          horizontalLineToRelative(2.5F)
          curveTo(6.776F, 5.0F, 7.0F, 5.224F, 7.0F, 5.5F)
          reflectiveCurveTo(6.776F, 6.0F, 6.5F, 6.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.224F, 6.0F, 3.0F, 5.776F, 3.0F, 5.5F)
          verticalLineToRelative(-3.0F)
          curveTo(3.0F, 2.224F, 3.224F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(4.0F, 2.224F, 4.0F, 2.5F)
          verticalLineToRelative(1.028F)
          curveTo(5.061F, 2.578F, 6.463F, 2.0F, 8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveTo(3.0F, 7.724F, 3.0F, 8.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          close()        
      }
    }
    return _arrowCounterclockwise16!!
  }

private var _arrowCounterclockwise16: ImageVector? = null
