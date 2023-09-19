package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EmojiSadSlight20: ImageVector
  get() {
    if (_emojiSadSlight20 != null) {
      return _emojiSadSlight20!!
    }
    _emojiSadSlight20 = fluentIcon(name = "Filled.EmojiSadSlight20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveTo(8.5F, 8.5F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(4.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.303F, 4.5F)
          horizontalLineTo(13.6F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(13.876F, 13.0F, 13.6F, 13.0F)
          horizontalLineToRelative(-0.797F)
          curveToRelative(-1.077F, 0.0F, -2.13F, 0.319F, -3.026F, 0.916F)
          curveToRelative(-0.23F, 0.153F, -0.54F, 0.091F, -0.693F, -0.139F)
          curveToRelative(-0.153F, -0.23F, -0.091F, -0.54F, 0.139F, -0.693F)
          curveToRelative(1.06F, -0.707F, 2.306F, -1.084F, 3.58F, -1.084F)
          close()        
      }
    }
    return _emojiSadSlight20!!
  }

private var _emojiSadSlight20: ImageVector? = null
