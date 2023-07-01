package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextUnderlineCharacterU16: ImageVector
  get() {
    if (_textUnderlineCharacterU16 != null) {
      return _textUnderlineCharacterU16!!
    }
    _textUnderlineCharacterU16 = fluentIcon(name = "Filled.TextUnderlineCharacterU16", 16f) {
      materialPath {
          moveTo(6.0F, 2.75F)
          curveTo(6.0F, 2.336F, 5.664F, 2.0F, 5.25F, 2.0F)
          reflectiveCurveTo(4.5F, 2.336F, 4.5F, 2.75F)
          verticalLineTo(7.5F)
          curveTo(4.5F, 9.433F, 6.067F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(2.75F)
          curveTo(11.5F, 2.336F, 11.164F, 2.0F, 10.75F, 2.0F)
          reflectiveCurveTo(10.0F, 2.336F, 10.0F, 2.75F)
          verticalLineTo(7.5F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(2.75F)
          close()
          moveTo(4.75F, 12.5F)
          curveTo(4.336F, 12.5F, 4.0F, 12.836F, 4.0F, 13.25F)
          reflectiveCurveTo(4.336F, 14.0F, 4.75F, 14.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _textUnderlineCharacterU16!!
  }

private var _textUnderlineCharacterU16: ImageVector? = null
