package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EmojiSad16: ImageVector
  get() {
    if (_emojiSad16 != null) {
      return _emojiSad16!!
    }
    _emojiSad16 = fluentIcon(name = "Filled.EmojiSad16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveTo(6.25F, 7.5F)
          curveTo(6.664F, 7.5F, 7.0F, 7.164F, 7.0F, 6.75F)
          reflectiveCurveTo(6.664F, 6.0F, 6.25F, 6.0F)
          reflectiveCurveTo(5.5F, 6.336F, 5.5F, 6.75F)
          reflectiveCurveTo(5.836F, 7.5F, 6.25F, 7.5F)
          close()
          moveToRelative(3.5F, 0.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.164F, 6.0F, 9.75F, 6.0F)
          reflectiveCurveTo(9.0F, 6.336F, 9.0F, 6.75F)
          reflectiveCurveTo(9.336F, 7.5F, 9.75F, 7.5F)
          close()
          moveToRelative(0.118F, 3.322F)
          curveToRelative(0.178F, 0.212F, 0.493F, 0.238F, 0.704F, 0.06F)
          curveToRelative(0.212F, -0.178F, 0.238F, -0.493F, 0.06F, -0.704F)
          curveToRelative(-1.325F, -1.57F, -3.94F, -1.57F, -5.264F, 0.0F)
          curveToRelative(-0.178F, 0.21F, -0.152F, 0.526F, 0.06F, 0.704F)
          curveToRelative(0.21F, 0.178F, 0.526F, 0.152F, 0.704F, -0.06F)
          curveToRelative(0.925F, -1.096F, 2.81F, -1.096F, 3.736F, 0.0F)
          close()        
      }
    }
    return _emojiSad16!!
  }

private var _emojiSad16: ImageVector? = null
