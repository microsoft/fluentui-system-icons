package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailTemplate16: ImageVector
  get() {
    if (_mailTemplate16 != null) {
      return _mailTemplate16!!
    }
    _mailTemplate16 = fluentIcon(name = "Filled.MailTemplate16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(6.0F)
          curveTo(2.0F, 11.88F, 3.12F, 13.0F, 4.5F, 13.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(9.5F)
          curveTo(5.0F, 8.12F, 6.12F, 7.0F, 7.5F, 7.0F)
          horizontalLineTo(13.0F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.12F, 11.88F, 2.0F, 10.5F, 2.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveTo(4.5F, 4.224F, 4.724F, 4.0F, 5.0F, 4.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.276F, 5.0F, 10.0F, 5.0F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 5.0F, 4.5F, 4.776F, 4.5F, 4.5F)
          close()
          moveToRelative(1.502F, 4.929F)
          curveTo(6.039F, 8.633F, 6.695F, 8.0F, 7.5F, 8.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.805F, 0.0F, 1.461F, 0.633F, 1.498F, 1.429F)
          lineTo(10.5F, 11.928F)
          lineToRelative(-4.498F, -2.5F)
          close()
          moveToRelative(4.74F, 3.508F)
          lineTo(15.0F, 10.572F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(6.672F, 15.0F, 6.0F, 14.328F, 6.0F, 13.5F)
          verticalLineToRelative(-2.928F)
          lineToRelative(4.257F, 2.365F)
          curveToRelative(0.151F, 0.084F, 0.335F, 0.084F, 0.486F, 0.0F)
          close()        
      }
    }
    return _mailTemplate16!!
  }

private var _mailTemplate16: ImageVector? = null
