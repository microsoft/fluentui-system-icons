package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dismiss48: ImageVector
  get() {
    if (_dismiss48 != null) {
      return _dismiss48!!
    }
    _dismiss48 = fluentIcon(name = "Filled.Dismiss48", 48f) {
      materialPath {
          moveTo(8.56F, 6.44F)
          curveToRelative(-0.585F, -0.587F, -1.535F, -0.587F, -2.12F, 0.0F)
          curveToRelative(-0.587F, 0.585F, -0.587F, 1.535F, 0.0F, 2.12F)
          lineTo(21.878F, 24.0F)
          lineTo(6.439F, 39.44F)
          curveToRelative(-0.585F, 0.585F, -0.585F, 1.535F, 0.0F, 2.12F)
          curveToRelative(0.587F, 0.586F, 1.536F, 0.586F, 2.122F, 0.0F)
          lineTo(24.0F, 26.121F)
          lineTo(39.439F, 41.56F)
          curveToRelative(0.585F, 0.586F, 1.535F, 0.586F, 2.12F, 0.0F)
          curveToRelative(0.587F, -0.586F, 0.587F, -1.536F, 0.0F, -2.121F)
          lineTo(26.122F, 24.0F)
          lineToRelative(15.44F, -15.439F)
          curveToRelative(0.585F, -0.586F, 0.585F, -1.535F, 0.0F, -2.121F)
          curveToRelative(-0.587F, -0.586F, -1.536F, -0.586F, -2.122F, 0.0F)
          lineTo(24.0F, 21.879F)
          lineTo(8.56F, 6.439F)
          close()        
      }
    }
    return _dismiss48!!
  }

private var _dismiss48: ImageVector? = null
