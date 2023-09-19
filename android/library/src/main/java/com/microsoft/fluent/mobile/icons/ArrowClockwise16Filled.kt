package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowClockwise16: ImageVector
  get() {
    if (_arrowClockwise16 != null) {
      return _arrowClockwise16!!
    }
    _arrowClockwise16 = fluentIcon(name = "Filled.ArrowClockwise16", 16f) {
      materialPath {
          moveTo(3.5F, 8.0F)
          curveToRelative(0.0F, -2.485F, 2.015F, -4.5F, 4.5F, -4.5F)
          curveToRelative(1.072F, 0.0F, 2.056F, 0.374F, 2.829F, 1.0F)
          horizontalLineTo(9.75F)
          curveTo(9.336F, 4.5F, 9.0F, 4.836F, 9.0F, 5.25F)
          reflectiveCurveTo(9.336F, 6.0F, 9.75F, 6.0F)
          horizontalLineToRelative(2.5F)
          curveTo(12.664F, 6.0F, 13.0F, 5.664F, 13.0F, 5.25F)
          verticalLineToRelative(-2.5F)
          curveTo(13.0F, 2.336F, 12.664F, 2.0F, 12.25F, 2.0F)
          reflectiveCurveTo(11.5F, 2.336F, 11.5F, 2.75F)
          verticalLineToRelative(0.376F)
          curveTo(10.515F, 2.418F, 9.306F, 2.0F, 8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(12.5F, 7.586F, 12.5F, 8.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(3.5F, 10.485F, 3.5F, 8.0F)
          close()        
      }
    }
    return _arrowClockwise16!!
  }

private var _arrowClockwise16: ImageVector? = null
