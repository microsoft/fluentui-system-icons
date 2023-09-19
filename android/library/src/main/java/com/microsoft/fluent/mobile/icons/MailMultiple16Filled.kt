package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailMultiple16: ImageVector
  get() {
    if (_mailMultiple16 != null) {
      return _mailMultiple16!!
    }
    _mailMultiple16 = fluentIcon(name = "Filled.MailMultiple16", 16f) {
      materialPath {
          moveTo(1.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(0.201F)
          lineTo(7.0F, 7.432F)
          lineToRelative(-6.0F, -3.23F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(6.237F, 4.44F)
          lineTo(13.0F, 5.337F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.337F)
          lineTo(6.763F, 8.44F)
          curveToRelative(0.148F, 0.08F, 0.326F, 0.08F, 0.474F, 0.0F)
          close()
          moveTo(5.0F, 14.0F)
          curveToRelative(-0.74F, 0.0F, -1.387F, -0.402F, -1.732F, -1.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(4.268F)
          curveTo(14.598F, 4.613F, 15.0F, 5.26F, 15.0F, 6.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _mailMultiple16!!
  }

private var _mailMultiple16: ImageVector? = null
