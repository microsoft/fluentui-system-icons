package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pause24: ImageVector
  get() {
    if (_pause24 != null) {
      return _pause24!!
    }
    _pause24 = fluentIcon(name = "Filled.Pause24", 24f) {
      materialPath {
          moveTo(5.746F, 3.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.966F, -0.783F, -1.75F, -1.75F, -1.75F)
          horizontalLineToRelative(-3.5F)
          close()
          moveToRelative(9.0F, 0.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.966F, -0.783F, -1.75F, -1.75F, -1.75F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _pause24!!
  }

private var _pause24: ImageVector? = null
