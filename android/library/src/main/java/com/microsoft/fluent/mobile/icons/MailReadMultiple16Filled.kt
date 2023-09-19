package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailReadMultiple16: ImageVector
  get() {
    if (_mailReadMultiple16 != null) {
      return _mailReadMultiple16!!
    }
    _mailReadMultiple16 = fluentIcon(name = "Filled.MailReadMultiple16", 16f) {
      materialPath {
          moveTo(7.24F, 1.061F)
          curveToRelative(-0.15F, -0.081F, -0.33F, -0.081F, -0.48F, 0.0F)
          lineTo(1.7F, 3.821F)
          curveToRelative(-0.202F, 0.11F, -0.367F, 0.267F, -0.487F, 0.453F)
          lineTo(7.0F, 7.431F)
          lineToRelative(5.787F, -3.157F)
          curveToRelative(-0.12F, -0.186F, -0.285F, -0.343F, -0.487F, -0.452F)
          lineToRelative(-5.06F, -2.76F)
          close()
          moveTo(1.0F, 10.0F)
          verticalLineTo(5.297F)
          lineToRelative(5.76F, 3.142F)
          curveToRelative(0.15F, 0.081F, 0.33F, 0.081F, 0.48F, 0.0F)
          lineTo(13.0F, 5.297F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(2.268F, 3.0F)
          curveTo(3.613F, 13.598F, 4.26F, 14.0F, 5.0F, 14.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(3.268F)
          close()        
      }
    }
    return _mailReadMultiple16!!
  }

private var _mailReadMultiple16: ImageVector? = null
