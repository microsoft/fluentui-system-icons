package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Subtract48: ImageVector
  get() {
    if (_subtract48 != null) {
      return _subtract48!!
    }
    _subtract48 = fluentIcon(name = "Regular.Subtract48", 48f) {
      materialPath {
          moveTo(6.0F, 23.25F)
          curveTo(6.0F, 22.56F, 6.56F, 22.0F, 7.25F, 22.0F)
          horizontalLineToRelative(33.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(7.25F)
          curveTo(6.56F, 24.5F, 6.0F, 23.94F, 6.0F, 23.25F)
          close()        
      }
    }
    return _subtract48!!
  }

private var _subtract48: ImageVector? = null
