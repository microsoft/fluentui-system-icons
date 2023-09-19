package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EmojiMeh16: ImageVector
  get() {
    if (_emojiMeh16 != null) {
      return _emojiMeh16!!
    }
    _emojiMeh16 = fluentIcon(name = "Regular.EmojiMeh16", 16f) {
      materialPath {
          moveTo(7.0F, 7.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(5.5F, 7.414F, 5.5F, 7.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(7.0F, 6.586F, 7.0F, 7.0F)
          close()
          moveToRelative(2.75F, 0.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(9.0F, 6.586F, 9.0F, 7.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          close()
          moveTo(6.0F, 9.0F)
          curveTo(5.724F, 9.0F, 5.5F, 9.224F, 5.5F, 9.5F)
          reflectiveCurveTo(5.724F, 10.0F, 6.0F, 10.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(10.276F, 9.0F, 10.0F, 9.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(2.0F, -7.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _emojiMeh16!!
  }

private var _emojiMeh16: ImageVector? = null
