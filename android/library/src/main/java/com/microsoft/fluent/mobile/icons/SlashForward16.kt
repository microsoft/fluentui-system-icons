package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlashForward16: ImageVector
  get() {
    if (_slashForward16 != null) {
      return _slashForward16!!
    }
    _slashForward16 = fluentIcon(name = "Regular.SlashForward16", 16f) {
      materialPath {
          moveTo(10.44F, 2.037F)
          curveToRelative(0.255F, 0.105F, 0.378F, 0.397F, 0.273F, 0.652F)
          lineToRelative(-4.5F, 11.0F)
          curveToRelative(-0.105F, 0.256F, -0.397F, 0.378F, -0.652F, 0.274F)
          curveToRelative(-0.256F, -0.105F, -0.378F, -0.397F, -0.274F, -0.652F)
          lineToRelative(4.5F, -11.0F)
          curveToRelative(0.105F, -0.256F, 0.397F, -0.378F, 0.652F, -0.274F)
          close()        
      }
    }
    return _slashForward16!!
  }

private var _slashForward16: ImageVector? = null
