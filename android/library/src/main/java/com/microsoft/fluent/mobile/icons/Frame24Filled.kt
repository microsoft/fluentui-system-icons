package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Frame24: ImageVector
  get() {
    if (_frame24 != null) {
      return _frame24!!
    }
    _frame24 = fluentIcon(name = "Filled.Frame24", 24f) {
      materialPath {
          moveTo(5.25F, 2.0F)
          curveTo(5.664F, 2.0F, 6.0F, 2.336F, 6.0F, 2.75F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(2.75F)
          curveTo(18.0F, 2.336F, 18.336F, 2.0F, 18.75F, 2.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(1.75F)
          curveTo(21.664F, 4.5F, 22.0F, 4.836F, 22.0F, 5.25F)
          reflectiveCurveTo(21.664F, 6.0F, 21.25F, 6.0F)
          horizontalLineTo(19.5F)
          verticalLineToRelative(12.0F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(19.5F)
          verticalLineToRelative(1.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(18.0F, 21.664F, 18.0F, 21.25F)
          verticalLineTo(19.5F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(1.75F)
          curveTo(6.0F, 21.664F, 5.664F, 22.0F, 5.25F, 22.0F)
          reflectiveCurveTo(4.5F, 21.664F, 4.5F, 21.25F)
          verticalLineTo(19.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 19.5F, 2.0F, 19.164F, 2.0F, 18.75F)
          reflectiveCurveTo(2.336F, 18.0F, 2.75F, 18.0F)
          horizontalLineTo(4.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 6.0F, 2.0F, 5.664F, 2.0F, 5.25F)
          reflectiveCurveTo(2.336F, 4.5F, 2.75F, 4.5F)
          horizontalLineTo(4.5F)
          verticalLineTo(2.75F)
          curveTo(4.5F, 2.336F, 4.836F, 2.0F, 5.25F, 2.0F)
          close()        
      }
    }
    return _frame24!!
  }

private var _frame24: ImageVector? = null
