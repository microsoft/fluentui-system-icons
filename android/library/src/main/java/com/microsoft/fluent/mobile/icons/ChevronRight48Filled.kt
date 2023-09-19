package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronRight48: ImageVector
  get() {
    if (_chevronRight48 != null) {
      return _chevronRight48!!
    }
    _chevronRight48 = fluentIcon(name = "Filled.ChevronRight48", 48f) {
      materialPath {
          moveTo(15.94F, 39.31F)
          curveToRelative(-0.586F, -0.585F, -0.586F, -1.535F, 0.0F, -2.12F)
          lineToRelative(13.439F, -13.44F)
          lineToRelative(-13.44F, -13.44F)
          curveToRelative(-0.585F, -0.585F, -0.585F, -1.535F, 0.0F, -2.12F)
          curveToRelative(0.586F, -0.586F, 1.536F, -0.586F, 2.122F, 0.0F)
          lineToRelative(14.5F, 14.5F)
          curveToRelative(0.585F, 0.585F, 0.585F, 1.535F, 0.0F, 2.12F)
          lineToRelative(-14.5F, 14.5F)
          curveToRelative(-0.586F, 0.586F, -1.536F, 0.586F, -2.122F, 0.0F)
          close()        
      }
    }
    return _chevronRight48!!
  }

private var _chevronRight48: ImageVector? = null
