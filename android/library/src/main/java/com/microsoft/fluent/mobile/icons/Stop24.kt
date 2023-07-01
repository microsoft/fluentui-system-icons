package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Stop24: ImageVector
  get() {
    if (_stop24 != null) {
      return _stop24!!
    }
    _stop24 = fluentIcon(name = "Filled.Stop24", 24f) {
      materialPath {
          moveTo(4.75F, 3.0F)
          curveTo(3.784F, 3.0F, 3.0F, 3.784F, 3.0F, 4.75F)
          verticalLineToRelative(14.5F)
          curveTo(3.0F, 20.216F, 3.784F, 21.0F, 4.75F, 21.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(4.75F)
          curveTo(21.0F, 3.784F, 20.216F, 3.0F, 19.25F, 3.0F)
          horizontalLineTo(4.75F)
          close()        
      }
    }
    return _stop24!!
  }

private var _stop24: ImageVector? = null
