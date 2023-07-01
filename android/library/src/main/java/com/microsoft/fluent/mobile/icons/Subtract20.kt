package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Subtract20: ImageVector
  get() {
    if (_subtract20 != null) {
      return _subtract20!!
    }
    _subtract20 = fluentIcon(name = "Regular.Subtract20", 20f) {
      materialPath {
          moveTo(3.0F, 10.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 10.5F, 3.0F, 10.276F, 3.0F, 10.0F)
          close()        
      }
    }
    return _subtract20!!
  }

private var _subtract20: ImageVector? = null
