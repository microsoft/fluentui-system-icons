package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextT24: ImageVector
  get() {
    if (_textT24 != null) {
      return _textT24!!
    }
    _textT24 = fluentIcon(name = "Regular.TextT24", 24f) {
      materialPath {
          moveTo(5.0F, 4.75F)
          curveTo(5.0F, 4.336F, 5.336F, 4.0F, 5.75F, 4.0F)
          horizontalLineToRelative(12.5F)
          curveTo(18.664F, 4.0F, 19.0F, 4.336F, 19.0F, 4.75F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(17.5F, 7.164F, 17.5F, 6.75F)
          verticalLineTo(5.5F)
          horizontalLineToRelative(-4.75F)
          verticalLineToRelative(13.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(14.664F, 20.0F, 14.25F, 20.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(9.336F, 20.0F, 9.0F, 19.664F, 9.0F, 19.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(-13.0F)
          horizontalLineTo(6.5F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(5.0F, 7.164F, 5.0F, 6.75F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _textT24!!
  }

private var _textT24: ImageVector? = null
