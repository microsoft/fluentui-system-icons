package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMaximize32: ImageVector
  get() {
    if (_arrowMaximize32 != null) {
      return _arrowMaximize32!!
    }
    _arrowMaximize32 = fluentIcon(name = "Regular.ArrowMaximize32", 32f) {
      materialPath {
          moveTo(28.0F, 3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.414F)
          lineTo(6.414F, 27.0F)
          horizontalLineTo(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.43F, 0.0F, -0.796F, -0.27F, -0.938F, -0.651F)
          curveToRelative(-0.01F, -0.027F, -0.019F, -0.055F, -0.026F, -0.083F)
          curveTo(3.012F, 28.18F, 3.0F, 28.092F, 3.0F, 28.0F)
          verticalLineTo(18.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(7.586F)
          lineTo(25.586F, 5.0F)
          horizontalLineTo(18.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          close()        
      }
    }
    return _arrowMaximize32!!
  }

private var _arrowMaximize32: ImageVector? = null
