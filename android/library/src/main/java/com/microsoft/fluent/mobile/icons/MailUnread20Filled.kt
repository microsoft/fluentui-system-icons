package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailUnread20: ImageVector
  get() {
    if (_mailUnread20 != null) {
      return _mailUnread20!!
    }
    _mailUnread20 = fluentIcon(name = "Filled.MailUnread20", 20f) {
      materialPath {
          moveTo(17.5F, 6.0F)
          curveTo(18.88F, 6.0F, 20.0F, 4.88F, 20.0F, 3.5F)
          reflectiveCurveTo(18.88F, 1.0F, 17.5F, 1.0F)
          curveToRelative(-1.21F, 0.0F, -2.218F, 0.859F, -2.45F, 2.0F)
          lineToRelative(-0.011F, 0.058F)
          curveTo(15.013F, 3.2F, 15.0F, 3.349F, 15.0F, 3.5F)
          curveToRelative(0.0F, 1.146F, 0.77F, 2.112F, 1.822F, 2.407F)
          curveTo(17.038F, 5.967F, 17.265F, 6.0F, 17.5F, 6.0F)
          close()
          moveToRelative(-13.0F, -3.0F)
          horizontalLineToRelative(9.535F)
          curveTo(14.012F, 3.163F, 14.0F, 3.33F, 14.0F, 3.5F)
          curveToRelative(0.0F, 1.298F, 0.706F, 2.43F, 1.755F, 3.035F)
          lineTo(10.0F, 9.92F)
          lineTo(2.015F, 5.223F)
          curveTo(2.153F, 3.973F, 3.213F, 3.0F, 4.5F, 3.0F)
          close()
          moveToRelative(5.754F, 7.931F)
          lineToRelative(6.742F, -3.967F)
          curveTo(17.16F, 6.988F, 17.329F, 7.0F, 17.5F, 7.0F)
          curveToRelative(0.17F, 0.0F, 0.337F, -0.012F, 0.5F, -0.035F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.12F, 16.0F, 2.0F, 14.88F, 2.0F, 13.5F)
          verticalLineTo(6.373F)
          lineToRelative(7.747F, 4.558F)
          curveToRelative(0.156F, 0.092F, 0.35F, 0.092F, 0.507F, 0.0F)
          close()        
      }
    }
    return _mailUnread20!!
  }

private var _mailUnread20: ImageVector? = null
