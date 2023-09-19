package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextDescriptionLtr20: ImageVector
  get() {
    if (_textDescriptionLtr20 != null) {
      return _textDescriptionLtr20!!
    }
    _textDescriptionLtr20 = fluentIcon(name = "Filled.TextDescriptionLtr20", 20f) {
      materialPath {
          moveTo(2.75F, 4.5F)
          curveTo(2.336F, 4.5F, 2.0F, 4.836F, 2.0F, 5.25F)
          reflectiveCurveTo(2.336F, 6.0F, 2.75F, 6.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 6.0F, 18.0F, 5.664F, 18.0F, 5.25F)
          reflectiveCurveTo(17.664F, 4.5F, 17.25F, 4.5F)
          horizontalLineTo(2.75F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveTo(2.336F, 7.5F, 2.0F, 7.836F, 2.0F, 8.25F)
          reflectiveCurveTo(2.336F, 9.0F, 2.75F, 9.0F)
          horizontalLineToRelative(14.5F)
          curveTo(17.664F, 9.0F, 18.0F, 8.664F, 18.0F, 8.25F)
          reflectiveCurveTo(17.664F, 7.5F, 17.25F, 7.5F)
          horizontalLineTo(2.75F)
          close()
          moveTo(2.0F, 11.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(17.664F, 12.0F, 17.25F, 12.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 12.0F, 2.0F, 11.664F, 2.0F, 11.25F)
          close()
          moveToRelative(0.75F, 2.25F)
          curveTo(2.336F, 13.5F, 2.0F, 13.836F, 2.0F, 14.25F)
          reflectiveCurveTo(2.336F, 15.0F, 2.75F, 15.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _textDescriptionLtr20!!
  }

private var _textDescriptionLtr20: ImageVector? = null
