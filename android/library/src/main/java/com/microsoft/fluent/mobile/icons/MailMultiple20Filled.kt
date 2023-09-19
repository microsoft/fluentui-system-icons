package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailMultiple20: ImageVector
  get() {
    if (_mailMultiple20 != null) {
      return _mailMultiple20!!
    }
    _mailMultiple20 = fluentIcon(name = "Filled.MailMultiple20", 20f) {
      materialPath {
          moveTo(16.0F, 12.5F)
          verticalLineTo(6.373F)
          lineTo(9.254F, 9.931F)
          curveToRelative(-0.157F, 0.092F, -0.351F, 0.092F, -0.507F, 0.0F)
          lineTo(2.0F, 6.373F)
          verticalLineTo(12.5F)
          curveTo(2.0F, 13.88F, 3.12F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          close()
          moveToRelative(-0.015F, -7.277F)
          curveTo(15.847F, 3.973F, 14.787F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.213F, 3.0F, 2.153F, 3.973F, 2.015F, 5.223F)
          lineTo(9.0F, 8.92F)
          lineToRelative(6.985F, -3.697F)
          close()
          moveTo(6.5F, 17.0F)
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
