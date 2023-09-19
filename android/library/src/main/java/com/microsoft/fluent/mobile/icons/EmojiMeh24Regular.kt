package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EmojiMeh24: ImageVector
  get() {
    if (_emojiMeh24 != null) {
      return _emojiMeh24!!
    }
    _emojiMeh24 = fluentIcon(name = "Regular.EmojiMeh24", 24f) {
      materialPath {
          moveTo(9.0F, 8.751F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(9.69F, 11.25F, 9.0F, 11.25F)
          reflectiveCurveTo(7.752F, 10.69F, 7.752F, 10.0F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(15.69F, 11.25F, 15.0F, 11.25F)
          reflectiveCurveToRelative(-1.249F, -0.56F, -1.249F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          close()
          moveTo(8.25F, 15.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.164F, 15.0F, 15.75F, 15.0F)
          horizontalLineToRelative(-7.5F)
          close()
          moveTo(2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          close()
          moveToRelative(10.0F, -8.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          close()        
      }
    }
    return _emojiMeh24!!
  }

private var _emojiMeh24: ImageVector? = null
