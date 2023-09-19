package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Text16: ImageVector
  get() {
    if (_text16 != null) {
      return _text16!!
    }
    _text16 = fluentIcon(name = "Filled.Text16", 16f) {
      materialPath {
          moveTo(2.5F, 2.75F)
          curveTo(2.5F, 2.336F, 2.836F, 2.0F, 3.25F, 2.0F)
          horizontalLineToRelative(9.0F)
          curveTo(12.664F, 2.0F, 13.0F, 2.336F, 13.0F, 2.75F)
          verticalLineToRelative(1.5F)
          curveTo(13.0F, 4.664F, 12.664F, 5.0F, 12.25F, 5.0F)
          reflectiveCurveTo(11.5F, 4.664F, 11.5F, 4.25F)
          verticalLineTo(3.5F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(9.0F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(10.164F, 14.0F, 9.75F, 14.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(5.336F, 14.0F, 5.0F, 13.664F, 5.0F, 13.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-9.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(0.75F)
          curveTo(4.0F, 4.664F, 3.664F, 5.0F, 3.25F, 5.0F)
          reflectiveCurveTo(2.5F, 4.664F, 2.5F, 4.25F)
          verticalLineToRelative(-1.5F)
          close()        
      }
    }
    return _text16!!
  }

private var _text16: ImageVector? = null
