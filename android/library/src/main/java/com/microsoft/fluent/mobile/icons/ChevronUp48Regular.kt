package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUp48: ImageVector
  get() {
    if (_chevronUp48 != null) {
      return _chevronUp48!!
    }
    _chevronUp48 = fluentIcon(name = "Regular.ChevronUp48", 48f) {
      materialPath {
          moveTo(39.634F, 31.884F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          lineTo(24.0F, 18.018F)
          lineTo(10.134F, 31.884F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(14.75F, -14.75F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(14.75F, 14.75F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          close()        
      }
    }
    return _chevronUp48!!
  }

private var _chevronUp48: ImageVector? = null
