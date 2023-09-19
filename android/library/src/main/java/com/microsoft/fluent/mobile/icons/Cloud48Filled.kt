package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cloud48: ImageVector
  get() {
    if (_cloud48 != null) {
      return _cloud48!!
    }
    _cloud48 = fluentIcon(name = "Filled.Cloud48", 48f) {
      materialPath {
          moveTo(24.0F, 10.0F)
          curveToRelative(-5.738F, 0.0F, -10.45F, 4.393F, -10.955F, 10.0F)
          horizontalLineTo(12.75F)
          curveTo(8.47F, 20.0F, 5.0F, 23.47F, 5.0F, 27.75F)
          curveToRelative(0.0F, 4.28F, 3.47F, 7.75F, 7.75F, 7.75F)
          horizontalLineToRelative(22.5F)
          curveToRelative(4.28F, 0.0F, 7.75F, -3.47F, 7.75F, -7.75F)
          curveToRelative(0.0F, -4.28F, -3.47F, -7.75F, -7.75F, -7.75F)
          horizontalLineToRelative(-0.295F)
          curveTo(34.45F, 14.393F, 29.738F, 10.0F, 24.0F, 10.0F)
          close()        
      }
    }
    return _cloud48!!
  }

private var _cloud48: ImageVector? = null
