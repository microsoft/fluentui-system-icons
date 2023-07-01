package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlashForward24: ImageVector
  get() {
    if (_slashForward24 != null) {
      return _slashForward24!!
    }
    _slashForward24 = fluentIcon(name = "Regular.SlashForward24", 24f) {
      materialPath {
          moveTo(15.499F, 2.042F)
          curveTo(15.889F, 2.18F, 16.095F, 2.608F, 15.958F, 3.0F)
          lineToRelative(-6.5F, 18.5F)
          curveToRelative(-0.138F, 0.39F, -0.566F, 0.596F, -0.956F, 0.459F)
          curveTo(8.11F, 21.82F, 7.905F, 21.392F, 8.042F, 21.0F)
          lineToRelative(6.5F, -18.5F)
          curveToRelative(0.138F, -0.39F, 0.566F, -0.596F, 0.957F, -0.459F)
          close()        
      }
    }
    return _slashForward24!!
  }

private var _slashForward24: ImageVector? = null
