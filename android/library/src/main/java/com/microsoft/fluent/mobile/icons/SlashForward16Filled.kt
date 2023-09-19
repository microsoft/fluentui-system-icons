package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlashForward16: ImageVector
  get() {
    if (_slashForward16 != null) {
      return _slashForward16!!
    }
    _slashForward16 = fluentIcon(name = "Filled.SlashForward16", 16f) {
      materialPath {
          moveTo(10.267F, 2.05F)
          curveToRelative(0.387F, 0.147F, 0.582F, 0.58F, 0.434F, 0.967F)
          lineToRelative(-4.0F, 10.5F)
          curveToRelative(-0.147F, 0.387F, -0.58F, 0.581F, -0.968F, 0.434F)
          curveToRelative(-0.387F, -0.148F, -0.581F, -0.58F, -0.434F, -0.968F)
          lineToRelative(4.0F, -10.5F)
          curveToRelative(0.148F, -0.387F, 0.581F, -0.581F, 0.968F, -0.434F)
          close()        
      }
    }
    return _slashForward16!!
  }

private var _slashForward16: ImageVector? = null
