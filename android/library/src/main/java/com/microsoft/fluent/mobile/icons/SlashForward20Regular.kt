package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlashForward20: ImageVector
  get() {
    if (_slashForward20 != null) {
      return _slashForward20!!
    }
    _slashForward20 = fluentIcon(name = "Regular.SlashForward20", 20f) {
      materialPath {
          moveTo(12.658F, 2.026F)
          curveToRelative(0.262F, 0.087F, 0.404F, 0.37F, 0.317F, 0.632F)
          lineToRelative(-5.0F, 15.0F)
          curveToRelative(-0.088F, 0.262F, -0.371F, 0.404F, -0.633F, 0.316F)
          curveToRelative(-0.262F, -0.087F, -0.403F, -0.37F, -0.316F, -0.632F)
          lineToRelative(5.0F, -15.0F)
          curveToRelative(0.087F, -0.262F, 0.37F, -0.404F, 0.632F, -0.316F)
          close()        
      }
    }
    return _slashForward20!!
  }

private var _slashForward20: ImageVector? = null
