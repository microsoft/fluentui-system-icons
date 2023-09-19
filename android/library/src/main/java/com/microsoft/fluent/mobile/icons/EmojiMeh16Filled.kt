package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EmojiMeh16: ImageVector
  get() {
    if (_emojiMeh16 != null) {
      return _emojiMeh16!!
    }
    _emojiMeh16 = fluentIcon(name = "Filled.EmojiMeh16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveToRelative(-6.0F, 2.686F, -6.0F, 6.0F)
          close()
          moveToRelative(5.0F, -1.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(5.5F, 7.414F, 5.5F, 7.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(7.0F, 6.586F, 7.0F, 7.0F)
          close()
          moveToRelative(3.5F, 0.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.0F, 7.414F, 9.0F, 7.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(10.5F, 6.586F, 10.5F, 7.0F)
          close()
          moveTo(6.0F, 9.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.276F, 10.0F, 10.0F, 10.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(5.724F, 9.0F, 6.0F, 9.0F)
          close()        
      }
    }
    return _emojiMeh16!!
  }

private var _emojiMeh16: ImageVector? = null
