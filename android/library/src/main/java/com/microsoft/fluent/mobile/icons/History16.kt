package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.History16: ImageVector
  get() {
    if (_history16 != null) {
      return _history16!!
    }
    _history16 = fluentIcon(name = "Filled.History16", 16f) {
      materialPath {
          moveTo(8.0F, 3.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          reflectiveCurveToRelative(-2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(3.5F, 10.485F, 3.5F, 8.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(2.0F, 7.586F, 2.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          curveTo(6.694F, 2.0F, 5.485F, 2.418F, 4.5F, 3.126F)
          verticalLineTo(2.75F)
          curveTo(4.5F, 2.336F, 4.164F, 2.0F, 3.75F, 2.0F)
          reflectiveCurveTo(3.0F, 2.336F, 3.0F, 2.75F)
          verticalLineToRelative(2.5F)
          curveTo(3.0F, 5.664F, 3.336F, 6.0F, 3.75F, 6.0F)
          horizontalLineToRelative(1.5F)
          curveTo(5.664F, 6.0F, 6.0F, 5.664F, 6.0F, 5.25F)
          reflectiveCurveTo(5.664F, 4.5F, 5.25F, 4.5F)
          horizontalLineTo(5.171F)
          curveToRelative(0.773F, -0.626F, 1.757F, -1.0F, 2.829F, -1.0F)
          close()
          moveToRelative(0.5F, 2.25F)
          curveTo(8.5F, 5.336F, 8.164F, 5.0F, 7.75F, 5.0F)
          reflectiveCurveTo(7.0F, 5.336F, 7.0F, 5.75F)
          verticalLineToRelative(2.5F)
          curveTo(7.0F, 8.664F, 7.336F, 9.0F, 7.75F, 9.0F)
          horizontalLineToRelative(1.5F)
          curveTo(9.664F, 9.0F, 10.0F, 8.664F, 10.0F, 8.25F)
          reflectiveCurveTo(9.664F, 7.5F, 9.25F, 7.5F)
          horizontalLineTo(8.5F)
          verticalLineTo(5.75F)
          close()        
      }
    }
    return _history16!!
  }

private var _history16: ImageVector? = null
