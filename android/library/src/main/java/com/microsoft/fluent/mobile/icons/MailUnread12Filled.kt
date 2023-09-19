package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailUnread12: ImageVector
  get() {
    if (_mailUnread12 != null) {
      return _mailUnread12!!
    }
    _mailUnread12 = fluentIcon(name = "Filled.MailUnread12", 12f) {
      materialPath {
          moveTo(9.5F, 4.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.372F, 0.0F, -0.697F, 0.204F, -0.87F, 0.506F)
          lineTo(8.62F, 3.023F)
          curveTo(8.545F, 3.165F, 8.5F, 3.327F, 8.5F, 3.5F)
          curveToRelative(0.0F, 0.477F, 0.334F, 0.875F, 0.78F, 0.976F)
          curveTo(9.35F, 4.492F, 9.424F, 4.5F, 9.5F, 4.5F)
          close()
          moveTo(3.5F, 3.0F)
          horizontalLineToRelative(4.063F)
          curveTo(7.522F, 3.16F, 7.5F, 3.327F, 7.5F, 3.5F)
          curveToRelative(0.0F, 0.587F, 0.253F, 1.115F, 0.656F, 1.481F)
          lineTo(6.0F, 5.951F)
          lineTo(2.037F, 4.169F)
          curveTo(2.187F, 3.5F, 2.786F, 3.0F, 3.5F, 3.0F)
          close()
          moveToRelative(2.705F, 3.956F)
          lineToRelative(3.237F, -1.457F)
          lineTo(9.5F, 5.5F)
          curveToRelative(0.173F, 0.0F, 0.34F, -0.022F, 0.5F, -0.063F)
          verticalLineTo(7.5F)
          curveTo(10.0F, 8.328F, 9.328F, 9.0F, 8.5F, 9.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(2.672F, 9.0F, 2.0F, 8.328F, 2.0F, 7.5F)
          verticalLineTo(5.248F)
          lineToRelative(3.794F, 1.708F)
          curveToRelative(0.13F, 0.059F, 0.28F, 0.059F, 0.41F, 0.0F)
          close()        
      }
    }
    return _mailUnread12!!
  }

private var _mailUnread12: ImageVector? = null
