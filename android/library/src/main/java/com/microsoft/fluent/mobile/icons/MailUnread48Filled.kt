package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailUnread48: ImageVector
  get() {
    if (_mailUnread48 != null) {
      return _mailUnread48!!
    }
    _mailUnread48 = fluentIcon(name = "Filled.MailUnread48", 48f) {
      materialPath {
          moveTo(41.0F, 16.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          curveToRelative(-2.071F, 0.0F, -3.848F, 1.26F, -4.607F, 3.054F)
          curveTo(36.14F, 9.652F, 36.0F, 10.31F, 36.0F, 11.0F)
          curveToRelative(0.0F, 2.226F, 1.455F, 4.113F, 3.467F, 4.76F)
          curveTo(39.95F, 15.917F, 40.465F, 16.0F, 41.0F, 16.0F)
          close()
          moveTo(10.25F, 9.0F)
          horizontalLineToRelative(23.002F)
          curveTo(33.087F, 9.64F, 33.0F, 10.31F, 33.0F, 11.0F)
          curveToRelative(0.0F, 2.676F, 1.313F, 5.044F, 3.331F, 6.497F)
          lineTo(24.0F, 24.325F)
          lineTo(5.018F, 13.814F)
          curveTo(5.24F, 11.118F, 7.498F, 9.0F, 10.25F, 9.0F)
          close()
          moveToRelative(14.352F, 18.347F)
          lineToRelative(15.394F, -8.41F)
          curveTo(40.325F, 18.98F, 40.66F, 19.0F, 41.0F, 19.0F)
          curveToRelative(0.69F, 0.0F, 1.36F, -0.087F, 2.0F, -0.252F)
          verticalLineTo(33.75F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(7.35F, 39.0F, 5.0F, 36.65F, 5.0F, 33.75F)
          verticalLineTo(17.296F)
          lineToRelative(18.398F, 10.051F)
          lineToRelative(0.127F, 0.061F)
          curveToRelative(0.348F, 0.143F, 0.744F, 0.123F, 1.077F, -0.06F)
          close()        
      }
    }
    return _mailUnread48!!
  }

private var _mailUnread48: ImageVector? = null
