package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SubtractSquareMultiple20: ImageVector
  get() {
    if (_subtractSquareMultiple20 != null) {
      return _subtractSquareMultiple20!!
    }
    _subtractSquareMultiple20 = fluentIcon(name = "Filled.SubtractSquareMultiple20", 20f) {
      materialPath {
          moveTo(16.0F, 5.268F)
          curveTo(16.598F, 5.613F, 17.0F, 6.26F, 17.0F, 7.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.74F, 0.0F, -1.387F, -0.402F, -1.732F, -1.0F)
          horizontalLineTo(13.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.268F)
          close()
          moveTo(15.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(-3.0F, 4.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(6.224F, 9.5F, 6.0F, 9.276F, 6.0F, 9.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(5.0F)
          curveTo(11.776F, 8.5F, 12.0F, 8.724F, 12.0F, 9.0F)
          close()        
      }
    }
    return _subtractSquareMultiple20!!
  }

private var _subtractSquareMultiple20: ImageVector? = null
