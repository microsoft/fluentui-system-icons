package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextUnderlineCharacterU24: ImageVector
  get() {
    if (_textUnderlineCharacterU24 != null) {
      return _textUnderlineCharacterU24!!
    }
    _textUnderlineCharacterU24 = fluentIcon(name = "Regular.TextUnderlineCharacterU24", 24f) {
      materialPath {
          moveTo(8.5F, 4.75F)
          curveTo(8.5F, 4.336F, 8.164F, 4.0F, 7.75F, 4.0F)
          reflectiveCurveTo(7.0F, 4.336F, 7.0F, 4.75F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineTo(4.75F)
          curveTo(17.0F, 4.336F, 16.664F, 4.0F, 16.25F, 4.0F)
          reflectiveCurveTo(15.5F, 4.336F, 15.5F, 4.75F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(8.5F, 13.933F, 8.5F, 12.0F)
          verticalLineTo(4.75F)
          close()
          moveTo(6.75F, 18.5F)
          curveTo(6.336F, 18.5F, 6.0F, 18.836F, 6.0F, 19.25F)
          reflectiveCurveTo(6.336F, 20.0F, 6.75F, 20.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(6.75F)
          close()        
      }
    }
    return _textUnderlineCharacterU24!!
  }

private var _textUnderlineCharacterU24: ImageVector? = null
