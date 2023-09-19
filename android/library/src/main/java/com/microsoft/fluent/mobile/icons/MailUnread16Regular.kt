package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailUnread16: ImageVector
  get() {
    if (_mailUnread16 != null) {
      return _mailUnread16!!
    }
    _mailUnread16 = fluentIcon(name = "Regular.MailUnread16", 16f) {
      materialPath {
          moveTo(14.0F, 5.232F)
          curveToRelative(0.598F, -0.345F, 1.0F, -0.992F, 1.0F, -1.732F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          curveToRelative(-0.932F, 0.0F, -1.715F, 0.637F, -1.937F, 1.5F)
          curveTo(11.022F, 3.16F, 11.0F, 3.327F, 11.0F, 3.5F)
          reflectiveCurveToRelative(0.022F, 0.34F, 0.063F, 0.5F)
          curveTo(11.285F, 4.863F, 12.068F, 5.5F, 13.0F, 5.5F)
          curveToRelative(0.364F, 0.0F, 0.706F, -0.097F, 1.0F, -0.268F)
          close()
          moveTo(4.0F, 3.0F)
          horizontalLineToRelative(6.041F)
          curveTo(10.014F, 3.163F, 10.0F, 3.33F, 10.0F, 3.5F)
          curveToRelative(0.0F, 0.17F, 0.014F, 0.337F, 0.041F, 0.5F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 4.0F, 3.0F, 4.448F, 3.0F, 5.0F)
          verticalLineToRelative(0.74F)
          lineToRelative(5.0F, 2.692F)
          lineToRelative(3.944F, -2.123F)
          curveTo(12.272F, 6.432F, 12.628F, 6.5F, 13.0F, 6.5F)
          curveToRelative(0.35F, 0.0F, 0.687F, -0.06F, 1.0F, -0.17F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveTo(3.0F, 6.875F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.876F)
          lineTo(8.237F, 9.44F)
          curveToRelative(-0.148F, 0.08F, -0.326F, 0.08F, -0.474F, 0.0F)
          lineTo(3.0F, 6.876F)
          close()        
      }
    }
    return _mailUnread16!!
  }

private var _mailUnread16: ImageVector? = null
