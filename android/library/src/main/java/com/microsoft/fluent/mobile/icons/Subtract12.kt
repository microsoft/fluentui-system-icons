package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Subtract12: ImageVector
  get() {
    if (_subtract12 != null) {
      return _subtract12!!
    }
    _subtract12 = fluentIcon(name = "Regular.Subtract12", 12f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(7.0F)
          curveTo(9.776F, 5.5F, 10.0F, 5.724F, 10.0F, 6.0F)
          reflectiveCurveTo(9.776F, 6.5F, 9.5F, 6.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(2.224F, 6.5F, 2.0F, 6.276F, 2.0F, 6.0F)
          close()        
      }
    }
    return _subtract12!!
  }

private var _subtract12: ImageVector? = null
