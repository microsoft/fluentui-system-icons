package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronRight48: ImageVector
  get() {
    if (_chevronRight48 != null) {
      return _chevronRight48!!
    }
    _chevronRight48 = fluentIcon(name = "Regular.ChevronRight48", 48f) {
      materialPath {
          moveTo(16.116F, 39.634F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          lineTo(29.982F, 24.0F)
          lineTo(16.116F, 10.134F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(14.75F, 14.75F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-14.75F, 14.75F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          close()        
      }
    }
    return _chevronRight48!!
  }

private var _chevronRight48: ImageVector? = null
