package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EmojiSad24: ImageVector
  get() {
    if (_emojiSad24 != null) {
      return _emojiSad24!!
    }
    _emojiSad24 = fluentIcon(name = "Regular.EmojiSad24", 24f) {
      materialPath {
          moveTo(12.0F, 1.998F)
          curveToRelative(5.524F, 0.0F, 10.002F, 4.478F, 10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, -4.478F, 10.0F, -10.002F, 10.0F)
          curveToRelative(-5.524F, 0.001F, -10.002F, -4.477F, -10.002F, -10.0F)
          curveTo(1.998F, 6.476F, 6.476F, 1.998F, 12.0F, 1.998F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.695F, 0.0F, -8.502F, 3.806F, -8.502F, 8.502F)
          curveToRelative(0.0F, 4.695F, 3.807F, 8.501F, 8.502F, 8.501F)
          reflectiveCurveToRelative(8.502F, -3.806F, 8.502F, -8.501F)
          curveToRelative(0.0F, -4.696F, -3.807F, -8.502F, -8.502F, -8.502F)
          close()
          moveToRelative(0.0F, 10.0F)
          curveToRelative(1.631F, 0.0F, 3.16F, 0.654F, 4.281F, 1.795F)
          curveToRelative(0.29F, 0.295F, 0.286F, 0.77F, -0.01F, 1.06F)
          curveToRelative(-0.295F, 0.29F, -0.77F, 0.286F, -1.06F, -0.01F)
          curveToRelative(-0.841F, -0.856F, -1.986F, -1.346F, -3.21F, -1.346F)
          curveToRelative(-1.228F, 0.0F, -2.376F, 0.493F, -3.217F, 1.352F)
          curveToRelative(-0.29F, 0.296F, -0.765F, 0.301F, -1.061F, 0.011F)
          curveToRelative(-0.296F, -0.29F, -0.301F, -0.764F, -0.011F, -1.06F)
          curveToRelative(1.121F, -1.145F, 2.653F, -1.803F, 4.288F, -1.803F)
          close()
          moveTo(9.0F, 8.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(9.69F, 11.248F, 9.0F, 11.248F)
          reflectiveCurveToRelative(-1.249F, -0.56F, -1.249F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.249F, -1.25F, 1.249F)
          reflectiveCurveToRelative(-1.249F, -0.56F, -1.249F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.249F, 1.25F, -1.249F)
          close()        
      }
    }
    return _emojiSad24!!
  }

private var _emojiSad24: ImageVector? = null
