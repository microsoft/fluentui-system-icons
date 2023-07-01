package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Home16: ImageVector
  get() {
    if (_home16 != null) {
      return _home16!!
    }
    _home16 = fluentIcon(name = "Filled.Home16", 16f) {
      materialPath {
          moveTo(8.687F, 1.262F)
          curveToRelative(-0.385F, -0.365F, -0.988F, -0.365F, -1.374F, 0.0F)
          lineTo(2.47F, 5.84F)
          curveTo(2.17F, 6.124F, 2.0F, 6.519F, 2.0F, 6.931F)
          verticalLineToRelative(5.57F)
          curveTo(2.0F, 13.328F, 2.672F, 14.0F, 3.5F, 14.0F)
          horizontalLineTo(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -0.277F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.223F, 0.5F, 0.5F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(6.93F)
          curveToRelative(0.0F, -0.412F, -0.17F, -0.807F, -0.47F, -1.09F)
          lineTo(8.687F, 1.26F)
          close()        
      }
    }
    return _home16!!
  }

private var _home16: ImageVector? = null
