package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Doctor28: ImageVector
  get() {
    if (_doctor28 != null) {
      return _doctor28!!
    }
    _doctor28 = fluentIcon(name = "Filled.Doctor28", 28f) {
      materialPath {
          moveTo(10.75F, 2.998F)
          curveTo(9.784F, 2.998F, 9.0F, 3.781F, 9.0F, 4.748F)
          verticalLineTo(9.0F)
          horizontalLineTo(4.75F)
          curveTo(3.784F, 9.0F, 3.0F, 9.784F, 3.0F, 10.75F)
          verticalLineToRelative(6.5F)
          curveTo(3.0F, 18.216F, 3.784F, 19.0F, 4.75F, 19.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(4.252F)
          curveToRelative(0.0F, 0.967F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.783F, 1.75F, -1.75F)
          verticalLineTo(19.0F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.783F, 1.75F, -1.75F)
          verticalLineToRelative(-6.5F)
          curveTo(25.0F, 9.784F, 24.216F, 9.0F, 23.25F, 9.0F)
          horizontalLineTo(19.0F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.967F, -0.784F, -1.751F, -1.75F, -1.751F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _doctor28!!
  }

private var _doctor28: ImageVector? = null
