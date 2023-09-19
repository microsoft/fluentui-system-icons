package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EmojiSad24: ImageVector
  get() {
    if (_emojiSad24 != null) {
      return _emojiSad24!!
    }
    _emojiSad24 = fluentIcon(name = "Filled.EmojiSad24", 24f) {
      materialPath {
          moveTo(12.0F, 1.998F)
          curveToRelative(5.524F, 0.0F, 10.002F, 4.478F, 10.002F, 10.002F)
          curveToRelative(0.0F, 5.523F, -4.478F, 10.0F, -10.002F, 10.0F)
          curveToRelative(-5.524F, 0.001F, -10.002F, -4.477F, -10.002F, -10.0F)
          curveTo(1.998F, 6.476F, 6.476F, 1.998F, 12.0F, 1.998F)
          close()
          moveToRelative(0.0F, 11.5F)
          curveToRelative(-1.635F, 0.0F, -3.167F, 0.657F, -4.288F, 1.802F)
          curveToRelative(-0.29F, 0.296F, -0.285F, 0.77F, 0.011F, 1.06F)
          curveToRelative(0.296F, 0.29F, 0.77F, 0.285F, 1.06F, -0.01F)
          curveToRelative(0.842F, -0.86F, 1.99F, -1.353F, 3.217F, -1.353F)
          curveToRelative(1.225F, 0.0F, 2.37F, 0.49F, 3.211F, 1.347F)
          curveToRelative(0.29F, 0.295F, 0.765F, 0.3F, 1.06F, 0.01F)
          curveToRelative(0.296F, -0.291F, 0.3F, -0.766F, 0.01F, -1.061F)
          curveToRelative(-1.12F, -1.141F, -2.65F, -1.796F, -4.28F, -1.796F)
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
    return _emojiSad24!!
  }

private var _emojiSad24: ImageVector? = null
