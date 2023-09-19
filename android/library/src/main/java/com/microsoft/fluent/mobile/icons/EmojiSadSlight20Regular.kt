package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EmojiSadSlight20: ImageVector
  get() {
    if (_emojiSadSlight20 != null) {
      return _emojiSadSlight20!!
    }
    _emojiSadSlight20 = fluentIcon(name = "Regular.EmojiSadSlight20", 20f) {
      materialPath {
          moveTo(8.5F, 8.5F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(4.0F, 1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()
          moveToRelative(0.303F, 2.5F)
          curveToRelative(-1.274F, 0.0F, -2.52F, 0.377F, -3.58F, 1.084F)
          curveToRelative(-0.23F, 0.153F, -0.292F, 0.464F, -0.139F, 0.693F)
          curveToRelative(0.153F, 0.23F, 0.464F, 0.292F, 0.693F, 0.139F)
          curveTo(10.673F, 13.319F, 11.726F, 13.0F, 12.803F, 13.0F)
          horizontalLineTo(13.6F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.876F, 12.0F, 13.6F, 12.0F)
          horizontalLineToRelative(-0.797F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(8.0F, -7.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()        
      }
    }
    return _emojiSadSlight20!!
  }

private var _emojiSadSlight20: ImageVector? = null
