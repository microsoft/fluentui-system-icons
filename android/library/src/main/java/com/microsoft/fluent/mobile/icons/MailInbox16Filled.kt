package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailInbox16: ImageVector
  get() {
    if (_mailInbox16 != null) {
      return _mailInbox16!!
    }
    _mailInbox16 = fluentIcon(name = "Filled.MailInbox16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(13.0F, 8.0F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(2.5F)
          curveTo(5.776F, 8.0F, 6.0F, 8.224F, 6.0F, 8.5F)
          curveToRelative(0.0F, 0.052F, 0.008F, 0.162F, 0.032F, 0.308F)
          curveToRelative(0.041F, 0.247F, 0.115F, 0.493F, 0.228F, 0.718F)
          curveTo(6.568F, 10.144F, 7.103F, 10.5F, 8.0F, 10.5F)
          reflectiveCurveToRelative(1.432F, -0.356F, 1.74F, -0.974F)
          curveToRelative(0.113F, -0.225F, 0.187F, -0.47F, 0.228F, -0.718F)
          curveTo(9.992F, 8.662F, 10.0F, 8.552F, 10.0F, 8.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(10.5F, 8.0F)
          horizontalLineTo(13.0F)
          close()        
      }
    }
    return _mailInbox16!!
  }

private var _mailInbox16: ImageVector? = null
