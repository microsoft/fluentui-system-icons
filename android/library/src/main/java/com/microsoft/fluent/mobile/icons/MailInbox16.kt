package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailInbox16: ImageVector
  get() {
    if (_mailInbox16 != null) {
      return _mailInbox16!!
    }
    _mailInbox16 = fluentIcon(name = "Regular.MailInbox16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(13.0F, 8.0F)
          horizontalLineToRelative(-2.5F)
          lineToRelative(-0.09F, 0.008F)
          curveTo(10.177F, 8.05F, 10.0F, 8.255F, 10.0F, 8.5F)
          curveToRelative(0.0F, 0.052F, -0.008F, 0.162F, -0.032F, 0.308F)
          curveTo(9.927F, 9.055F, 9.853F, 9.301F, 9.74F, 9.526F)
          curveTo(9.432F, 10.144F, 8.897F, 10.5F, 8.0F, 10.5F)
          reflectiveCurveToRelative(-1.432F, -0.356F, -1.74F, -0.974F)
          curveToRelative(-0.113F, -0.225F, -0.187F, -0.47F, -0.228F, -0.718F)
          curveTo(6.008F, 8.662F, 6.0F, 8.552F, 6.0F, 8.5F)
          curveTo(6.0F, 8.224F, 5.776F, 8.0F, 5.5F, 8.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(8.0F)
          close()
          moveTo(3.0F, 9.0F)
          horizontalLineToRelative(2.044F)
          lineToRelative(0.035F, 0.174F)
          curveToRelative(0.057F, 0.252F, 0.149F, 0.524F, 0.286F, 0.8F)
          curveTo(5.838F, 10.919F, 6.71F, 11.5F, 8.0F, 11.5F)
          curveToRelative(1.29F, 0.0F, 2.162F, -0.581F, 2.635F, -1.526F)
          lineToRelative(0.095F, -0.206F)
          curveToRelative(0.086F, -0.205F, 0.148F, -0.405F, 0.19F, -0.594F)
          lineTo(10.956F, 9.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(9.0F)
          close()        
      }
    }
    return _mailInbox16!!
  }

private var _mailInbox16: ImageVector? = null
