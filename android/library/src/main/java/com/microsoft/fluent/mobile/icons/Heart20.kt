package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Heart20: ImageVector
  get() {
    if (_heart20 != null) {
      return _heart20!!
    }
    _heart20 = fluentIcon(name = "Filled.Heart20", 20f) {
      materialPath {
          moveTo(9.388F, 4.29F)
          curveTo(7.693F, 2.577F, 4.95F, 2.569F, 3.261F, 4.274F)
          curveToRelative(-1.688F, 1.705F, -1.68F, 4.476F, 0.016F, 6.189F)
          lineToRelative(6.277F, 6.34F)
          curveToRelative(0.26F, 0.263F, 0.682F, 0.263F, 0.942F, 0.0F)
          lineToRelative(6.245F, -6.304F)
          curveToRelative(1.684F, -1.71F, 1.679F, -4.474F, -0.017F, -6.187F)
          curveToRelative(-1.699F, -1.715F, -4.443F, -1.724F, -6.135F, -0.015F)
          lineTo(9.993F, 4.9F)
          lineTo(9.388F, 4.29F)
          close()        
      }
    }
    return _heart20!!
  }

private var _heart20: ImageVector? = null
