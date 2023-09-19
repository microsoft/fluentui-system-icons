package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextT20: ImageVector
  get() {
    if (_textT20 != null) {
      return _textT20!!
    }
    _textT20 = fluentIcon(name = "Filled.TextT20", 20f) {
      materialPath {
          moveTo(4.0F, 3.75F)
          curveTo(4.0F, 3.336F, 4.336F, 3.0F, 4.75F, 3.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(1.5F)
          curveTo(15.5F, 5.664F, 15.164F, 6.0F, 14.75F, 6.0F)
          reflectiveCurveTo(14.0F, 5.664F, 14.0F, 5.25F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(-3.5F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(12.164F, 17.0F, 11.75F, 17.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(7.336F, 17.0F, 7.0F, 16.664F, 7.0F, 16.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-11.0F)
          horizontalLineTo(5.5F)
          verticalLineToRelative(0.75F)
          curveTo(5.5F, 5.664F, 5.164F, 6.0F, 4.75F, 6.0F)
          reflectiveCurveTo(4.0F, 5.664F, 4.0F, 5.25F)
          verticalLineToRelative(-1.5F)
          close()        
      }
    }
    return _textT20!!
  }

private var _textT20: ImageVector? = null
