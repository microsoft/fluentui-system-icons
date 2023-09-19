package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextPositionLine24: ImageVector
  get() {
    if (_textPositionLine24 != null) {
      return _textPositionLine24!!
    }
    _textPositionLine24 = fluentIcon(name = "Regular.TextPositionLine24", 24f) {
      materialPath {
          moveTo(3.75F, 4.0F)
          curveTo(3.336F, 4.0F, 3.0F, 4.336F, 3.0F, 4.75F)
          reflectiveCurveTo(3.336F, 5.5F, 3.75F, 5.5F)
          horizontalLineToRelative(16.5F)
          curveTo(20.664F, 5.5F, 21.0F, 5.164F, 21.0F, 4.75F)
          reflectiveCurveTo(20.664F, 4.0F, 20.25F, 4.0F)
          horizontalLineTo(3.75F)
          close()
          moveTo(7.0F, 8.5F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(3.0F, 16.164F, 3.0F, 15.75F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.5F, 16.164F, 9.5F, 15.75F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          close()
          moveToRelative(6.75F, 6.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(13.336F, 16.0F, 13.75F, 16.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(-10.0F, 3.5F)
          curveTo(3.336F, 18.0F, 3.0F, 18.336F, 3.0F, 18.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(20.664F, 18.0F, 20.25F, 18.0F)
          horizontalLineTo(3.75F)
          close()        
      }
    }
    return _textPositionLine24!!
  }

private var _textPositionLine24: ImageVector? = null
