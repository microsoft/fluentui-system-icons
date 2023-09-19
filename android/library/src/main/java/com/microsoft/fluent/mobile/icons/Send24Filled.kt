package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Send24: ImageVector
  get() {
    if (_send24 != null) {
      return _send24!!
    }
    _send24 = fluentIcon(name = "Filled.Send24", 24f) {
      materialPath {
          moveTo(12.815F, 12.197F)
          lineToRelative(-7.532F, 1.255F)
          curveToRelative(-0.176F, 0.03F, -0.323F, 0.15F, -0.386F, 0.318F)
          lineTo(2.3F, 20.728F)
          curveToRelative(-0.248F, 0.64F, 0.421F, 1.25F, 1.035F, 0.942F)
          lineToRelative(18.0F, -9.0F)
          curveToRelative(0.553F, -0.276F, 0.553F, -1.065F, 0.0F, -1.341F)
          lineToRelative(-18.0F, -9.0F)
          curveTo(2.72F, 2.022F, 2.05F, 2.632F, 2.299F, 3.27F)
          lineToRelative(2.598F, 6.958F)
          curveToRelative(0.063F, 0.167F, 0.21F, 0.289F, 0.386F, 0.318F)
          lineToRelative(7.532F, 1.255F)
          curveToRelative(0.109F, 0.018F, 0.182F, 0.122F, 0.164F, 0.23F)
          curveToRelative(-0.014F, 0.085F, -0.08F, 0.15F, -0.164F, 0.165F)
          close()        
      }
    }
    return _send24!!
  }

private var _send24: ImageVector? = null
