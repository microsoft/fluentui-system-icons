package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlashForward12: ImageVector
  get() {
    if (_slashForward12 != null) {
      return _slashForward12!!
    }
    _slashForward12 = fluentIcon(name = "Regular.SlashForward12", 12f) {
      materialPath {
          moveTo(7.658F, 1.026F)
          curveToRelative(0.262F, 0.087F, 0.404F, 0.37F, 0.316F, 0.632F)
          lineToRelative(-3.0F, 9.0F)
          curveToRelative(-0.087F, 0.262F, -0.37F, 0.404F, -0.632F, 0.316F)
          curveToRelative(-0.262F, -0.087F, -0.403F, -0.37F, -0.316F, -0.632F)
          lineToRelative(3.0F, -9.0F)
          curveToRelative(0.087F, -0.262F, 0.37F, -0.404F, 0.632F, -0.316F)
          close()        
      }
    }
    return _slashForward12!!
  }

private var _slashForward12: ImageVector? = null
