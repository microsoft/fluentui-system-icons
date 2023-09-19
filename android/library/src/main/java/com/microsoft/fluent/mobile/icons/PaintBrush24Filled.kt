package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaintBrush24: ImageVector
  get() {
    if (_paintBrush24 != null) {
      return _paintBrush24!!
    }
    _paintBrush24 = fluentIcon(name = "Filled.PaintBrush24", 24f) {
      materialPath {
          moveTo(12.5F, 2.0F)
          verticalLineToRelative(3.252F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(14.0F, 5.665F, 14.0F, 5.252F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(4.251F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(1.75F)
          curveTo(18.665F, 2.0F, 19.0F, 2.336F, 19.0F, 2.75F)
          verticalLineTo(11.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(2.75F)
          curveTo(5.0F, 2.336F, 5.336F, 2.0F, 5.75F, 2.0F)
          horizontalLineToRelative(6.75F)
          close()
          moveTo(5.0F, 12.5F)
          verticalLineToRelative(1.752F)
          curveToRelative(0.0F, 1.243F, 1.008F, 2.25F, 2.25F, 2.25F)
          horizontalLineTo(10.0F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          curveToRelative(1.104F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-3.498F)
          horizontalLineToRelative(2.75F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(12.5F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _paintBrush24!!
  }

private var _paintBrush24: ImageVector? = null
