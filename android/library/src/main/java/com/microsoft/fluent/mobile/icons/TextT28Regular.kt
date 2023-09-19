package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextT28: ImageVector
  get() {
    if (_textT28 != null) {
      return _textT28!!
    }
    _textT28 = fluentIcon(name = "Regular.TextT28", 28f) {
      materialPath {
          moveTo(5.0F, 4.75F)
          curveTo(5.0F, 4.336F, 5.336F, 4.0F, 5.75F, 4.0F)
          horizontalLineToRelative(16.5F)
          curveTo(22.664F, 4.0F, 23.0F, 4.336F, 23.0F, 4.75F)
          verticalLineToRelative(3.5F)
          curveTo(23.0F, 8.664F, 22.664F, 9.0F, 22.25F, 9.0F)
          reflectiveCurveTo(21.5F, 8.664F, 21.5F, 8.25F)
          verticalLineTo(5.5F)
          horizontalLineToRelative(-6.75F)
          verticalLineToRelative(17.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(16.664F, 24.0F, 16.25F, 24.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(11.336F, 24.0F, 11.0F, 23.664F, 11.0F, 23.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(-17.0F)
          horizontalLineTo(6.5F)
          verticalLineToRelative(2.75F)
          curveTo(6.5F, 8.664F, 6.164F, 9.0F, 5.75F, 9.0F)
          reflectiveCurveTo(5.0F, 8.664F, 5.0F, 8.25F)
          verticalLineToRelative(-3.5F)
          close()        
      }
    }
    return _textT28!!
  }

private var _textT28: ImageVector? = null
