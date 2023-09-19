package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Doctor20: ImageVector
  get() {
    if (_doctor20 != null) {
      return _doctor20!!
    }
    _doctor20 = fluentIcon(name = "Filled.Doctor20", 20f) {
      materialPath {
          moveTo(8.5F, 3.0F)
          curveTo(7.672F, 3.0F, 7.0F, 3.672F, 7.0F, 4.5F)
          verticalLineToRelative(2.501F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.83F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.67F, 1.5F, -1.5F)
          verticalLineToRelative(-2.5F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(13.0F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _doctor20!!
  }

private var _doctor20: ImageVector? = null
