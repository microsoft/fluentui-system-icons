package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailInbox20: ImageVector
  get() {
    if (_mailInbox20 != null) {
      return _mailInbox20!!
    }
    _mailInbox20 = fluentIcon(name = "Filled.MailInbox20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(1.0F, 4.0F)
          horizontalLineToRelative(3.5F)
          curveTo(7.776F, 10.0F, 8.0F, 10.223F, 8.0F, 10.5F)
          verticalLineToRelative(0.011F)
          lineToRelative(0.004F, 0.06F)
          curveToRelative(0.004F, 0.056F, 0.012F, 0.138F, 0.028F, 0.237F)
          curveToRelative(0.034F, 0.202F, 0.1F, 0.463F, 0.228F, 0.718F)
          curveToRelative(0.126F, 0.254F, 0.308F, 0.492F, 0.572F, 0.667F)
          curveTo(9.092F, 12.367F, 9.462F, 12.5F, 10.0F, 12.5F)
          curveToRelative(0.537F, 0.0F, 0.907F, -0.133F, 1.168F, -0.307F)
          curveToRelative(0.264F, -0.175F, 0.446F, -0.413F, 0.572F, -0.667F)
          curveToRelative(0.128F, -0.255F, 0.194F, -0.516F, 0.228F, -0.718F)
          curveToRelative(0.016F, -0.1F, 0.024F, -0.181F, 0.028F, -0.236F)
          lineTo(12.0F, 10.512F)
          verticalLineToRelative(-0.015F)
          curveTo(12.001F, 10.223F, 12.225F, 10.0F, 12.5F, 10.0F)
          horizontalLineTo(16.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          curveTo(4.895F, 4.0F, 4.0F, 4.895F, 4.0F, 6.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(4.0F, 0.5F)
          verticalLineToRelative(-0.002F)
          close()        
      }
    }
    return _mailInbox20!!
  }

private var _mailInbox20: ImageVector? = null
