package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SlashForward24: ImageVector
  get() {
    if (_slashForward24 != null) {
      return _slashForward24!!
    }
    _slashForward24 = fluentIcon(name = "Filled.SlashForward24", 24f) {
      materialPath {
          moveTo(15.316F, 2.051F)
          curveToRelative(0.524F, 0.175F, 0.808F, 0.741F, 0.633F, 1.265F)
          lineToRelative(-6.0F, 18.0F)
          curveToRelative(-0.175F, 0.524F, -0.741F, 0.807F, -1.265F, 0.633F)
          curveToRelative(-0.524F, -0.175F, -0.807F, -0.741F, -0.632F, -1.265F)
          lineToRelative(6.0F, -18.0F)
          curveToRelative(0.174F, -0.524F, 0.74F, -0.807F, 1.264F, -0.633F)
          close()        
      }
    }
    return _slashForward24!!
  }

private var _slashForward24: ImageVector? = null
