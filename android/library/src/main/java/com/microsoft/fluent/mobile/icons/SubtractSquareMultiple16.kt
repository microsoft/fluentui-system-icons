package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SubtractSquareMultiple16: ImageVector
  get() {
    if (_subtractSquareMultiple16 != null) {
      return _subtractSquareMultiple16!!
    }
    _subtractSquareMultiple16 = fluentIcon(name = "Regular.SubtractSquareMultiple16", 16f) {
      materialPath {
          moveTo(4.5F, 6.5F)
          curveTo(4.224F, 6.5F, 4.0F, 6.724F, 4.0F, 7.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(5.0F)
          curveTo(9.776F, 7.5F, 10.0F, 7.276F, 10.0F, 7.0F)
          reflectiveCurveTo(9.776F, 6.5F, 9.5F, 6.5F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(2.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(3.448F, 3.0F, 3.0F, 3.448F, 3.0F, 4.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(9.0F, 7.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(3.268F)
          curveTo(3.613F, 13.598F, 4.26F, 14.0F, 5.0F, 14.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          verticalLineTo(10.5F)
          close()        
      }
    }
    return _subtractSquareMultiple16!!
  }

private var _subtractSquareMultiple16: ImageVector? = null
