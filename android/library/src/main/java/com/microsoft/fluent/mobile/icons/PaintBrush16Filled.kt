package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaintBrush16: ImageVector
  get() {
    if (_paintBrush16 != null) {
      return _paintBrush16!!
    }
    _paintBrush16 = fluentIcon(name = "Filled.PaintBrush16", 16f) {
      materialPath {
          moveTo(8.0F, 1.002F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(9.0F, 3.778F, 9.0F, 3.502F)
          verticalLineToRelative(-2.5F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(3.494F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(1.002F)
          horizontalLineToRelative(1.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineTo(1.002F)
          horizontalLineTo(8.0F)
          close()
          moveTo(3.5F, 8.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 1.104F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(2.999F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _paintBrush16!!
  }

private var _paintBrush16: ImageVector? = null
