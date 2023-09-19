package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailCopy20: ImageVector
  get() {
    if (_mailCopy20 != null) {
      return _mailCopy20!!
    }
    _mailCopy20 = fluentIcon(name = "Filled.MailCopy20", 20f) {
      materialPath {
          moveTo(4.0F, 12.5F)
          verticalLineTo(6.373F)
          lineToRelative(6.746F, 3.558F)
          curveToRelative(0.157F, 0.092F, 0.351F, 0.092F, 0.507F, 0.0F)
          lineTo(18.0F, 6.373F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.12F, 15.0F, 4.0F, 13.88F, 4.0F, 12.5F)
          close()
          moveToRelative(0.015F, -7.277F)
          curveTo(4.153F, 3.973F, 5.213F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.287F, 0.0F, 2.347F, 0.973F, 2.485F, 2.223F)
          lineTo(11.0F, 8.92F)
          lineTo(4.015F, 5.223F)
          close()
          moveTo(13.5F, 17.0F)
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
