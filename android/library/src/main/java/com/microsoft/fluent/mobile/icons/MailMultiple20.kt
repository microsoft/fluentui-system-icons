package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailMultiple20: ImageVector
  get() {
    if (_mailMultiple20 != null) {
      return _mailMultiple20!!
    }
    _mailMultiple20 = fluentIcon(name = "Regular.MailMultiple20", 20f) {
      materialPath {
          moveTo(16.0F, 5.5F)
          curveTo(16.0F, 4.12F, 14.88F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.12F, 3.0F, 2.0F, 4.12F, 2.0F, 5.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 13.88F, 3.12F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(9.254F, 9.931F)
          lineTo(15.0F, 6.961F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.672F, 14.0F, 3.0F, 13.328F, 3.0F, 12.5F)
          verticalLineTo(6.963F)
          lineToRelative(5.746F, 2.968F)
          lineToRelative(0.082F, 0.038F)
          curveToRelative(0.139F, 0.052F, 0.295F, 0.039F, 0.426F, -0.038F)
          close()
          moveTo(4.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(14.328F, 4.0F, 15.0F, 4.672F, 15.0F, 5.5F)
          verticalLineToRelative(0.301F)
          lineTo(9.0F, 8.92F)
          lineTo(3.0F, 5.802F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.672F, 3.672F, 4.0F, 4.5F, 4.0F)
          close()
          moveToRelative(2.0F, 13.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.607F, 0.456F, 1.0F, 1.182F, 1.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _mailMultiple20!!
  }

private var _mailMultiple20: ImageVector? = null
