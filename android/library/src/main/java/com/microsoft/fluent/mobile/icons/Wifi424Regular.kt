package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Wifi424: ImageVector
  get() {
    if (_wifi424 != null) {
      return _wifi424!!
    }
    _wifi424 = fluentIcon(name = "Regular.Wifi424", 424f) {
      materialPath {
          moveTo(10.94F, 18.561F)
          curveToRelative(0.585F, 0.586F, 1.535F, 0.586F, 2.121F, 0.0F)
          curveToRelative(0.586F, -0.586F, 0.586F, -1.536F, 0.0F, -2.122F)
          curveToRelative(-0.586F, -0.585F, -1.536F, -0.585F, -2.122F, 0.0F)
          curveToRelative(-0.585F, 0.586F, -0.585F, 1.536F, 0.0F, 2.122F)
          close()        
      }
    }
    return _wifi424!!
  }

private var _wifi424: ImageVector? = null
