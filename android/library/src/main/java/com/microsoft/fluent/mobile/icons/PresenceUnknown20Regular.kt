package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceUnknown20: ImageVector
  get() {
    if (_presenceUnknown20 != null) {
      return _presenceUnknown20!!
    }
    _presenceUnknown20 = fluentIcon(name = "Regular.PresenceUnknown20", 20f) {
      materialPath {
          moveTo(9.997F, 2.0F)
          curveTo(5.581F, 2.0F, 2.0F, 5.58F, 2.0F, 9.997F)
          reflectiveCurveToRelative(3.58F, 7.998F, 7.997F, 7.998F)
          reflectiveCurveToRelative(7.998F, -3.58F, 7.998F, -7.998F)
          curveTo(17.995F, 5.581F, 14.415F, 2.0F, 9.997F, 2.0F)
          close()
          moveTo(0.0F, 9.997F)
          curveTo(0.0F, 4.476F, 4.476F, 0.0F, 9.997F, 0.0F)
          curveToRelative(5.522F, 0.0F, 9.998F, 4.476F, 9.998F, 9.997F)
          curveToRelative(0.0F, 5.522F, -4.476F, 9.998F, -9.998F, 9.998F)
          curveTo(4.476F, 19.995F, 0.0F, 15.519F, 0.0F, 9.997F)
          close()        
      }
    }
    return _presenceUnknown20!!
  }

private var _presenceUnknown20: ImageVector? = null
