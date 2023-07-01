package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Spacebar24: ImageVector
  get() {
    if (_spacebar24 != null) {
      return _spacebar24!!
    }
    _spacebar24 = fluentIcon(name = "Regular.Spacebar24", 24f) {
      materialPath {
          moveTo(20.5F, 11.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.138F, -0.112F, 0.25F, -0.25F, 0.25F)
          horizontalLineTo(3.75F)
          curveToRelative(-0.138F, 0.0F, -0.25F, -0.112F, -0.25F, -0.25F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(2.0F, 10.586F, 2.0F, 11.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(20.5F, 10.586F, 20.5F, 11.0F)
          close()        
      }
    }
    return _spacebar24!!
  }

private var _spacebar24: ImageVector? = null
