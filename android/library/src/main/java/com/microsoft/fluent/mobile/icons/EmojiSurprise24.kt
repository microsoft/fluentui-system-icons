package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EmojiSurprise24: ImageVector
  get() {
    if (_emojiSurprise24 != null) {
      return _emojiSurprise24!!
    }
    _emojiSurprise24 = fluentIcon(name = "Filled.EmojiSurprise24", 24f) {
      materialPath {
          moveTo(12.0F, 2.004F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveToRelative(-10.0F, -4.477F, -10.0F, -10.0F)
          reflectiveCurveToRelative(4.477F, -10.0F, 10.0F, -10.0F)
          close()
          moveToRelative(0.0F, 10.995F)
          curveToRelative(-1.243F, 0.0F, -2.25F, 1.008F, -2.25F, 2.25F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          reflectiveCurveToRelative(2.25F, -1.007F, 2.25F, -2.25F)
          curveToRelative(0.0F, -1.242F, -1.007F, -2.25F, -2.25F, -2.25F)
          close()
          moveTo(9.0F, 8.75F)
          curveToRelative(-0.69F, 0.0F, -1.249F, 0.56F, -1.249F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.249F, 1.25F, 1.249F)
          reflectiveCurveToRelative(1.249F, -0.56F, 1.249F, -1.25F)
          reflectiveCurveTo(9.69F, 8.75F, 9.0F, 8.75F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(-0.69F, 0.0F, -1.249F, 0.56F, -1.249F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.249F, 1.25F, 1.249F)
          reflectiveCurveToRelative(1.249F, -0.56F, 1.249F, -1.25F)
          reflectiveCurveTo(15.69F, 8.75F, 15.0F, 8.75F)
          close()        
      }
    }
    return _emojiSurprise24!!
  }

private var _emojiSurprise24: ImageVector? = null
