package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Circle48: ImageVector
  get() {
    if (_circle48 != null) {
      return _circle48!!
    }
    _circle48 = fluentIcon(name = "Filled.Circle48", 48f) {
      materialPath {
          moveTo(44.0F, 24.0F)
          curveToRelative(0.0F, 11.046F, -8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          close()        
      }
    }
    return _circle48!!
  }

private var _circle48: ImageVector? = null
