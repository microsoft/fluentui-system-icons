package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Spacebar20: ImageVector
  get() {
    if (_spacebar20 != null) {
      return _spacebar20!!
    }
    _spacebar20 = fluentIcon(name = "Filled.Spacebar20", 20f) {
      materialPath {
          moveTo(2.75F, 7.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(13.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(18.0F, 8.086F, 18.0F, 8.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.672F, 12.0F, 2.0F, 11.328F, 2.0F, 10.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()        
      }
    }
    return _spacebar20!!
  }

private var _spacebar20: ImageVector? = null
