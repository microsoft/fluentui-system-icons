package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailCopy20: ImageVector
  get() {
    if (_mailCopy20 != null) {
      return _mailCopy20!!
    }
    _mailCopy20 = fluentIcon(name = "Regular.MailCopy20", 20f) {
      materialPath {
          moveTo(4.0F, 5.5F)
          curveTo(4.0F, 4.12F, 5.12F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(16.88F, 3.0F, 18.0F, 4.12F, 18.0F, 5.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.12F, 15.0F, 4.0F, 13.88F, 4.0F, 12.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(6.746F, 4.431F)
          lineTo(5.0F, 6.961F)
          verticalLineTo(12.5F)
          curveTo(5.0F, 13.328F, 5.672F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(6.963F)
          lineToRelative(-5.746F, 2.968F)
          lineToRelative(-0.082F, 0.038F)
          curveToRelative(-0.139F, 0.052F, -0.295F, 0.039F, -0.426F, -0.038F)
          close()
          moveTo(15.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.672F, 4.0F, 5.0F, 4.672F, 5.0F, 5.5F)
          verticalLineToRelative(0.301F)
          lineToRelative(6.0F, 3.119F)
          lineToRelative(6.0F, -3.118F)
          verticalLineTo(5.5F)
          curveTo(17.0F, 4.672F, 16.328F, 4.0F, 15.5F, 4.0F)
          close()
          moveToRelative(-2.0F, 13.0F)
          curveToRelative(0.818F, 0.0F, 1.544F, -0.393F, 2.0F, -1.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.567F, 16.0F, 3.0F, 14.433F, 3.0F, 12.5F)
          verticalLineToRelative(-7.0F)
          curveToRelative(-0.607F, 0.456F, -1.0F, 1.182F, -1.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 14.985F, 4.015F, 17.0F, 6.5F, 17.0F)
          horizontalLineToRelative(7.0F)
          close()        
      }
    }
    return _mailCopy20!!
  }

private var _mailCopy20: ImageVector? = null
