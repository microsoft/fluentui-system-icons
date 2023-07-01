package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailUnread16: ImageVector
  get() {
    if (_mailUnread16 != null) {
      return _mailUnread16!!
    }
    _mailUnread16 = fluentIcon(name = "Filled.MailUnread16", 16f) {
      materialPath {
          moveTo(13.64F, 5.396F)
          curveTo(14.43F, 5.129F, 15.0F, 4.38F, 15.0F, 3.5F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          curveToRelative(-0.932F, 0.0F, -1.715F, 0.637F, -1.937F, 1.5F)
          curveTo(11.022F, 3.16F, 11.0F, 3.327F, 11.0F, 3.5F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          curveToRelative(0.223F, 0.0F, 0.438F, -0.037F, 0.64F, -0.104F)
          close()
          moveTo(4.0F, 3.0F)
          horizontalLineToRelative(6.041F)
          curveTo(10.014F, 3.163F, 10.0F, 3.33F, 10.0F, 3.5F)
          curveToRelative(0.0F, 1.285F, 0.808F, 2.381F, 1.944F, 2.809F)
          lineTo(8.0F, 8.432F)
          lineToRelative(-6.0F, -3.23F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(10.0F, 3.337F)
          lineTo(8.237F, 9.44F)
          curveToRelative(-0.148F, 0.08F, -0.326F, 0.08F, -0.474F, 0.0F)
          lineTo(2.0F, 6.337F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.337F)
          close()        
      }
    }
    return _mailUnread16!!
  }

private var _mailUnread16: ImageVector? = null
