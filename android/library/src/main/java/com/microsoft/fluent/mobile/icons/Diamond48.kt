package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Diamond48: ImageVector
  get() {
    if (_diamond48 != null) {
      return _diamond48!!
    }
    _diamond48 = fluentIcon(name = "Filled.Diamond48", 48f) {
      materialPath {
          moveTo(5.025F, 26.475F)
          curveToRelative(-1.367F, -1.367F, -1.367F, -3.583F, 0.0F, -4.95F)
          lineToRelative(16.5F, -16.5F)
          curveToRelative(1.367F, -1.367F, 3.583F, -1.367F, 4.95F, 0.0F)
          lineToRelative(16.5F, 16.5F)
          curveToRelative(1.366F, 1.367F, 1.366F, 3.583F, 0.0F, 4.95F)
          lineToRelative(-16.5F, 16.5F)
          curveToRelative(-1.367F, 1.366F, -3.583F, 1.366F, -4.95F, 0.0F)
          lineToRelative(-16.5F, -16.5F)
          close()        
      }
    }
    return _diamond48!!
  }

private var _diamond48: ImageVector? = null
