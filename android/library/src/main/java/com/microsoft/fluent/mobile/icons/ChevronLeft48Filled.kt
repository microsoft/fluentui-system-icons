package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronLeft48: ImageVector
  get() {
    if (_chevronLeft48 != null) {
      return _chevronLeft48!!
    }
    _chevronLeft48 = fluentIcon(name = "Filled.ChevronLeft48", 48f) {
      materialPath {
          moveTo(32.06F, 8.19F)
          curveToRelative(0.586F, 0.585F, 0.586F, 1.535F, 0.0F, 2.12F)
          lineTo(18.622F, 23.75F)
          lineToRelative(13.44F, 13.44F)
          curveToRelative(0.585F, 0.585F, 0.585F, 1.535F, 0.0F, 2.12F)
          curveToRelative(-0.586F, 0.586F, -1.536F, 0.586F, -2.122F, 0.0F)
          lineToRelative(-14.5F, -14.5F)
          curveToRelative(-0.585F, -0.585F, -0.585F, -1.535F, 0.0F, -2.12F)
          lineToRelative(14.5F, -14.5F)
          curveToRelative(0.586F, -0.586F, 1.536F, -0.586F, 2.122F, 0.0F)
          close()        
      }
    }
    return _chevronLeft48!!
  }

private var _chevronLeft48: ImageVector? = null
