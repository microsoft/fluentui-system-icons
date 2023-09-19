package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlashForward20: ImageVector
  get() {
    if (_slashForward20 != null) {
      return _slashForward20!!
    }
    _slashForward20 = fluentIcon(name = "Filled.SlashForward20", 20f) {
      materialPath {
          moveTo(13.016F, 2.049F)
          curveToRelative(0.387F, 0.147F, 0.582F, 0.58F, 0.435F, 0.967F)
          lineToRelative(-5.5F, 14.5F)
          curveToRelative(-0.146F, 0.387F, -0.58F, 0.582F, -0.967F, 0.435F)
          curveToRelative(-0.387F, -0.147F, -0.582F, -0.58F, -0.435F, -0.967F)
          lineToRelative(5.5F, -14.5F)
          curveToRelative(0.147F, -0.387F, 0.58F, -0.582F, 0.967F, -0.435F)
          close()        
      }
    }
    return _slashForward20!!
  }

private var _slashForward20: ImageVector? = null
