package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCounterclockwise16: ImageVector
  get() {
    if (_arrowCounterclockwise16 != null) {
      return _arrowCounterclockwise16!!
    }
    _arrowCounterclockwise16 = fluentIcon(name = "Filled.ArrowCounterclockwise16", 16f) {
      materialPath {
          moveTo(12.5F, 8.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          curveToRelative(-1.072F, 0.0F, -2.056F, 0.374F, -2.829F, 1.0F)
          horizontalLineTo(6.25F)
          curveTo(6.664F, 4.5F, 7.0F, 4.836F, 7.0F, 5.25F)
          reflectiveCurveTo(6.664F, 6.0F, 6.25F, 6.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(3.336F, 6.0F, 3.0F, 5.664F, 3.0F, 5.25F)
          verticalLineToRelative(-2.5F)
          curveTo(3.0F, 2.336F, 3.336F, 2.0F, 3.75F, 2.0F)
          reflectiveCurveTo(4.5F, 2.336F, 4.5F, 2.75F)
          verticalLineToRelative(0.376F)
          curveTo(5.485F, 2.418F, 6.694F, 2.0F, 8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(3.5F, 7.586F, 3.5F, 8.0F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          close()        
      }
    }
    return _arrowCounterclockwise16!!
  }

private var _arrowCounterclockwise16: ImageVector? = null
