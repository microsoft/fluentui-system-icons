package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailEdit20: ImageVector
  get() {
    if (_mailEdit20 != null) {
      return _mailEdit20!!
    }
    _mailEdit20 = fluentIcon(name = "Filled.MailEdit20", 20f) {
      materialPath {
          moveTo(18.0F, 6.374F)
          verticalLineToRelative(2.76F)
          curveToRelative(-0.989F, -0.313F, -2.114F, -0.078F, -2.898F, 0.707F)
          lineToRelative(-4.83F, 4.83F)
          curveToRelative(-0.37F, 0.37F, -0.644F, 0.827F, -0.797F, 1.329F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 16.0F, 2.0F, 14.88F, 2.0F, 13.5F)
          verticalLineTo(6.374F)
          lineToRelative(7.747F, 4.558F)
          curveToRelative(0.156F, 0.092F, 0.35F, 0.092F, 0.507F, 0.0F)
          lineTo(18.0F, 6.374F)
          close()
          moveToRelative(-2.5F, -3.373F)
          curveToRelative(1.287F, 0.0F, 2.347F, 0.973F, 2.485F, 2.223F)
          lineTo(10.0F, 9.92F)
          lineTo(2.015F, 5.224F)
          curveTo(2.153F, 3.974F, 3.213F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(11.0F)
          close()
          moveToRelative(-4.52F, 12.376F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 1.914F, -0.73F, 2.644F, 0.0F)
          curveToRelative(0.73F, 0.731F, 0.73F, 1.915F, 0.0F, 2.646F)
          lineToRelative(-4.83F, 4.829F)
          curveToRelative(-0.281F, 0.282F, -0.634F, 0.481F, -1.02F, 0.578F)
          lineToRelative(-1.498F, 0.374F)
          curveToRelative(-0.651F, 0.163F, -1.242F, -0.427F, -1.079F, -1.078F)
          lineToRelative(0.375F, -1.498F)
          curveToRelative(0.096F, -0.386F, 0.296F, -0.74F, 0.578F, -1.02F)
          close()        
      }
    }
    return _mailEdit20!!
  }

private var _mailEdit20: ImageVector? = null
