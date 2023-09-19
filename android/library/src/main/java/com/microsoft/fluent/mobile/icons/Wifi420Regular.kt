package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Wifi420: ImageVector
  get() {
    if (_wifi420 != null) {
      return _wifi420!!
    }
    _wifi420 = fluentIcon(name = "Regular.Wifi420", 420f) {
      materialPath {
          moveTo(10.963F, 13.787F)
          curveToRelative(0.507F, 0.507F, 0.507F, 1.329F, 0.0F, 1.836F)
          curveToRelative(-0.507F, 0.507F, -1.329F, 0.507F, -1.836F, 0.0F)
          curveToRelative(-0.507F, -0.507F, -0.507F, -1.33F, 0.0F, -1.836F)
          curveToRelative(0.507F, -0.508F, 1.33F, -0.508F, 1.836F, 0.0F)
          close()        
      }
    }
    return _wifi420!!
  }

private var _wifi420: ImageVector? = null
