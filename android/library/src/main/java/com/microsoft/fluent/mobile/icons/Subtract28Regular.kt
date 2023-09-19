package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Subtract28: ImageVector
  get() {
    if (_subtract28 != null) {
      return _subtract28!!
    }
    _subtract28 = fluentIcon(name = "Regular.Subtract28", 28f) {
      materialPath {
          moveTo(3.0F, 13.75F)
          curveTo(3.0F, 13.336F, 3.336F, 13.0F, 3.75F, 13.0F)
          horizontalLineToRelative(20.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 14.5F, 3.0F, 14.164F, 3.0F, 13.75F)
          close()        
      }
    }
    return _subtract28!!
  }

private var _subtract28: ImageVector? = null
