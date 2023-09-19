package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Copy16: ImageVector
  get() {
    if (_copy16 != null) {
      return _copy16!!
    }
    _copy16 = fluentIcon(name = "Filled.Copy16", 16f) {
      materialPath {
          moveTo(4.0F, 4.085F)
          verticalLineTo(10.5F)
          curveToRelative(0.0F, 1.325F, 1.032F, 2.41F, 2.336F, 2.495F)
          lineTo(6.5F, 13.0F)
          horizontalLineToRelative(4.414F)
          curveToRelative(-0.206F, 0.583F, -0.761F, 1.0F, -1.414F, 1.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -0.653F, 0.417F, -1.209F, 1.0F, -1.415F)
          close()
          moveTo(11.5F, 2.0F)
          curveTo(12.328F, 2.0F, 13.0F, 2.672F, 13.0F, 3.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.672F, 12.0F, 5.0F, 11.328F, 5.0F, 10.5F)
          verticalLineToRelative(-7.0F)
          curveTo(5.0F, 2.672F, 5.672F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(5.0F)
          close()        
      }
    }
    return _copy16!!
  }

private var _copy16: ImageVector? = null
