package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDown48: ImageVector
  get() {
    if (_chevronDown48 != null) {
      return _chevronDown48!!
    }
    _chevronDown48 = fluentIcon(name = "Regular.ChevronDown48", 48f) {
      materialPath {
          moveTo(8.366F, 16.116F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(14.75F, 14.75F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          lineToRelative(14.75F, -14.75F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(-1.28F, -0.488F, -1.768F, 0.0F)
          lineTo(24.0F, 29.982F)
          lineTo(10.134F, 16.116F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          close()        
      }
    }
    return _chevronDown48!!
  }

private var _chevronDown48: ImageVector? = null
