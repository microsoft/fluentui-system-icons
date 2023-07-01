package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EmojiMeh24: ImageVector
  get() {
    if (_emojiMeh24 != null) {
      return _emojiMeh24!!
    }
    _emojiMeh24 = fluentIcon(name = "Filled.EmojiMeh24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(-1.75F, 8.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(7.752F, 10.69F, 7.752F, 10.0F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          reflectiveCurveToRelative(1.249F, 0.56F, 1.249F, 1.25F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.249F, -0.56F, -1.249F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          reflectiveCurveToRelative(1.249F, 0.56F, 1.249F, 1.25F)
          close()
          moveTo(7.5F, 15.75F)
          curveTo(7.5F, 15.336F, 7.836F, 15.0F, 8.25F, 15.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _emojiMeh24!!
  }

private var _emojiMeh24: ImageVector? = null
