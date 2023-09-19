package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaintBrush20: ImageVector
  get() {
    if (_paintBrush20 != null) {
      return _paintBrush20!!
    }
    _paintBrush20 = fluentIcon(name = "Filled.PaintBrush20", 20f) {
      materialPath {
          moveTo(10.0F, 4.499F)
          verticalLineToRelative(-2.5F)
          horizontalLineTo(5.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(6.5F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(2.5F)
          curveTo(15.0F, 2.224F, 14.776F, 2.0F, 14.5F, 2.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(3.502F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(12.0F, 5.777F, 12.0F, 5.501F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(2.5F)
          curveTo(11.0F, 4.776F, 10.776F, 5.0F, 10.5F, 5.0F)
          reflectiveCurveTo(10.0F, 4.775F, 10.0F, 4.499F)
          close()
          moveToRelative(5.0F, 5.5F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(1.004F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(3.498F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.498F)
          horizontalLineTo(13.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(10.0F)
          close()        
      }
    }
    return _paintBrush20!!
  }

private var _paintBrush20: ImageVector? = null
