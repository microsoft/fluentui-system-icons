package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Search48: ImageVector
  get() {
    if (_search48 != null) {
      return _search48!!
    }
    _search48 = fluentIcon(name = "Filled.Search48", 48f) {
      materialPath {
          moveTo(20.5F, 6.0F)
          curveTo(12.492F, 6.0F, 6.0F, 12.492F, 6.0F, 20.5F)
          reflectiveCurveTo(12.492F, 35.0F, 20.5F, 35.0F)
          curveToRelative(3.464F, 0.0F, 6.644F, -1.215F, 9.138F, -3.241F)
          lineToRelative(9.801F, 9.801F)
          curveToRelative(0.586F, 0.586F, 1.535F, 0.586F, 2.121F, 0.0F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.535F, 0.0F, -2.121F)
          lineToRelative(-9.8F, -9.801F)
          curveTo(33.784F, 27.144F, 35.0F, 23.964F, 35.0F, 20.5F)
          curveTo(35.0F, 12.492F, 28.508F, 6.0F, 20.5F, 6.0F)
          close()
          moveTo(9.0F, 20.5F)
          curveTo(9.0F, 14.149F, 14.149F, 9.0F, 20.5F, 9.0F)
          reflectiveCurveTo(32.0F, 14.149F, 32.0F, 20.5F)
          reflectiveCurveTo(26.851F, 32.0F, 20.5F, 32.0F)
          reflectiveCurveTo(9.0F, 26.851F, 9.0F, 20.5F)
          close()        
      }
    }
    return _search48!!
  }

private var _search48: ImageVector? = null
