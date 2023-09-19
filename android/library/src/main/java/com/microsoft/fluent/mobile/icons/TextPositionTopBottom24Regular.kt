package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextPositionTopBottom24: ImageVector
  get() {
    if (_textPositionTopBottom24 != null) {
      return _textPositionTopBottom24!!
    }
    _textPositionTopBottom24 = fluentIcon(name = "Regular.TextPositionTopBottom24", 24f) {
      materialPath {
          moveTo(3.0F, 4.75F)
          curveTo(3.0F, 4.336F, 3.336F, 4.0F, 3.75F, 4.0F)
          horizontalLineToRelative(16.5F)
          curveTo(20.664F, 4.0F, 21.0F, 4.336F, 21.0F, 4.75F)
          reflectiveCurveTo(20.664F, 5.5F, 20.25F, 5.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 5.5F, 3.0F, 5.164F, 3.0F, 4.75F)
          close()
          moveToRelative(0.0F, 14.0F)
          curveTo(3.0F, 18.336F, 3.336F, 18.0F, 3.75F, 18.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 19.5F, 3.0F, 19.164F, 3.0F, 18.75F)
          close()
          moveTo(9.5F, 11.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(16.0F, 16.164F, 16.0F, 15.75F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveToRelative(-4.0F, 1.79F, -4.0F, 4.0F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(11.0F)
          close()        
      }
    }
    return _textPositionTopBottom24!!
  }

private var _textPositionTopBottom24: ImageVector? = null
