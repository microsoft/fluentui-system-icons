package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceUnknown10: ImageVector
  get() {
    if (_presenceUnknown10 != null) {
      return _presenceUnknown10!!
    }
    _presenceUnknown10 = fluentIcon(name = "Regular.PresenceUnknown10", 10f) {
      materialPath {
          moveTo(4.999F, 1.0F)
          curveTo(2.79F, 1.0F, 1.0F, 2.79F, 1.0F, 4.999F)
          curveToRelative(0.0F, 2.208F, 1.79F, 3.998F, 3.999F, 3.998F)
          curveToRelative(2.208F, 0.0F, 3.998F, -1.79F, 3.998F, -3.998F)
          curveTo(8.997F, 2.79F, 7.207F, 1.0F, 5.0F, 1.0F)
          close()
          moveTo(0.0F, 4.999F)
          curveTo(0.0F, 2.238F, 2.238F, 0.0F, 4.999F, 0.0F)
          curveToRelative(2.76F, 0.0F, 4.998F, 2.238F, 4.998F, 4.999F)
          curveToRelative(0.0F, 2.76F, -2.238F, 4.998F, -4.998F, 4.998F)
          curveTo(2.238F, 9.997F, 0.0F, 7.76F, 0.0F, 5.0F)
          close()        
      }
    }
    return _presenceUnknown10!!
  }

private var _presenceUnknown10: ImageVector? = null
