package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailRead16: ImageVector
  get() {
    if (_mailRead16 != null) {
      return _mailRead16!!
    }
    _mailRead16 = fluentIcon(name = "Filled.MailRead16", 16f) {
      materialPath {
          moveTo(8.237F, 1.56F)
          curveToRelative(-0.148F, -0.08F, -0.326F, -0.08F, -0.474F, 0.0F)
          lineTo(1.789F, 4.777F)
          curveToRelative(-0.24F, 0.128F, -0.434F, 0.316F, -0.57F, 0.54F)
          lineTo(8.0F, 8.933F)
          lineToRelative(6.78F, -3.616F)
          curveToRelative(-0.135F, -0.224F, -0.33F, -0.412F, -0.569F, -0.54F)
          lineTo(8.237F, 1.56F)
          close()
          moveTo(15.0F, 6.333F)
          lineTo(8.235F, 9.941F)
          curveToRelative(-0.147F, 0.079F, -0.323F, 0.079F, -0.47F, 0.0F)
          lineTo(1.0F, 6.333F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.333F)
          close()        
      }
    }
    return _mailRead16!!
  }

private var _mailRead16: ImageVector? = null
