package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Add28: ImageVector
  get() {
    if (_add28 != null) {
      return _add28!!
    }
    _add28 = fluentIcon(name = "Filled.Add28", 28f) {
      materialPath {
          moveTo(24.0F, 13.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.553F, -0.447F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.553F, 0.0F, -1.0F, 0.447F, -1.0F, 1.0F)
          verticalLineToRelative(9.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.553F, 0.0F, -1.0F, 0.447F, -1.0F, 1.0F)
          curveToRelative(0.0F, 0.553F, 0.447F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(9.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.553F, 0.447F, 1.0F, 1.0F, 1.0F)
          curveToRelative(0.553F, 0.0F, 1.0F, -0.447F, 1.0F, -1.0F)
          verticalLineToRelative(-9.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.553F, 0.0F, 1.0F, -0.447F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.553F, -0.447F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _add28!!
  }

private var _add28: ImageVector? = null
