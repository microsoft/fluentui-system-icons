package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextUnderlineCharacterU20: ImageVector
  get() {
    if (_textUnderlineCharacterU20 != null) {
      return _textUnderlineCharacterU20!!
    }
    _textUnderlineCharacterU20 = fluentIcon(name = "Filled.TextUnderlineCharacterU20", 20f) {
      materialPath {
          moveTo(7.0F, 3.75F)
          curveTo(7.0F, 3.336F, 6.664F, 3.0F, 6.25F, 3.0F)
          reflectiveCurveTo(5.5F, 3.336F, 5.5F, 3.75F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(3.75F)
          curveTo(14.5F, 3.336F, 14.164F, 3.0F, 13.75F, 3.0F)
          reflectiveCurveTo(13.0F, 3.336F, 13.0F, 3.75F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(3.75F)
          close()
          moveTo(5.75F, 15.5F)
          curveTo(5.336F, 15.5F, 5.0F, 15.836F, 5.0F, 16.25F)
          reflectiveCurveTo(5.336F, 17.0F, 5.75F, 17.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-8.5F)
          close()        
      }
    }
    return _textUnderlineCharacterU20!!
  }

private var _textUnderlineCharacterU20: ImageVector? = null
