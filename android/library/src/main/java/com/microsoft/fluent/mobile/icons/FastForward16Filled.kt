package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FastForward16: ImageVector
  get() {
    if (_fastForward16 != null) {
      return _fastForward16!!
    }
    _fastForward16 = fluentIcon(name = "Filled.FastForward16", 16f) {
      materialPath {
          moveTo(8.0F, 4.465F)
          curveTo(8.0F, 3.654F, 8.914F, 3.18F, 9.576F, 3.648F)
          lineToRelative(5.012F, 3.535F)
          curveToRelative(0.565F, 0.398F, 0.565F, 1.236F, 0.0F, 1.634F)
          lineToRelative(-5.012F, 3.536F)
          curveTo(8.914F, 12.82F, 8.0F, 12.346F, 8.0F, 11.536F)
          verticalLineTo(9.232F)
          lineToRelative(-4.424F, 3.12F)
          curveTo(2.914F, 12.82F, 2.0F, 12.347F, 2.0F, 11.537F)
          verticalLineTo(4.465F)
          curveTo(2.0F, 3.654F, 2.914F, 3.18F, 3.576F, 3.648F)
          lineTo(8.0F, 6.768F)
          verticalLineTo(4.465F)
          close()        
      }
    }
    return _fastForward16!!
  }

private var _fastForward16: ImageVector? = null
