package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Wifi320: ImageVector
  get() {
    if (_wifi320 != null) {
      return _wifi320!!
    }
    _wifi320 = fluentIcon(name = "Regular.Wifi320", 320f) {
      materialPath {
          moveTo(12.888F, 11.854F)
          curveToRelative(0.354F, 0.354F, 0.646F, 0.79F, 0.849F, 1.254F)
          curveToRelative(0.11F, 0.253F, -0.004F, 0.548F, -0.257F, 0.659F)
          curveToRelative(-0.253F, 0.11F, -0.548F, -0.005F, -0.659F, -0.258F)
          curveToRelative(-0.154F, -0.352F, -0.377F, -0.684F, -0.64F, -0.948F)
          curveToRelative(-1.185F, -1.184F, -3.105F, -1.184F, -4.29F, 0.0F)
          curveToRelative(-0.263F, 0.263F, -0.476F, 0.582F, -0.631F, 0.938F)
          curveToRelative(-0.11F, 0.253F, -0.406F, 0.368F, -0.659F, 0.257F)
          curveToRelative(-0.253F, -0.11F, -0.368F, -0.405F, -0.257F, -0.658F)
          curveToRelative(0.204F, -0.467F, 0.486F, -0.89F, 0.84F, -1.244F)
          curveToRelative(1.575F, -1.575F, 4.128F, -1.575F, 5.704F, 0.0F)
          close()
          moveToRelative(-1.925F, 1.933F)
          curveToRelative(0.507F, 0.507F, 0.507F, 1.329F, 0.0F, 1.836F)
          curveToRelative(-0.507F, 0.507F, -1.33F, 0.507F, -1.836F, 0.0F)
          curveToRelative(-0.507F, -0.507F, -0.507F, -1.33F, 0.0F, -1.836F)
          curveToRelative(0.507F, -0.507F, 1.329F, -0.507F, 1.836F, 0.0F)
          close()        
      }
    }
    return _wifi320!!
  }

private var _wifi320: ImageVector? = null
