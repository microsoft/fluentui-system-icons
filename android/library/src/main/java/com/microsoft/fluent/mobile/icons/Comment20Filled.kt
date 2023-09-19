package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Comment20: ImageVector
  get() {
    if (_comment20 != null) {
      return _comment20!!
    }
    _comment20 = fluentIcon(name = "Filled.Comment20", 20f) {
      materialPath {
          moveTo(6.799F, 17.803F)
          curveToRelative(-0.442F, 0.327F, -1.069F, 0.238F, -1.4F, -0.199F)
          curveToRelative(-0.13F, -0.17F, -0.199F, -0.378F, -0.199F, -0.59F)
          verticalLineToRelative(-2.172F)
          horizontalLineTo(4.6F)
          curveToRelative(-1.436F, 0.0F, -2.6F, -1.149F, -2.6F, -2.566F)
          verticalLineToRelative(-6.71F)
          curveTo(2.0F, 4.149F, 3.164F, 3.0F, 4.6F, 3.0F)
          horizontalLineToRelative(10.8F)
          curveTo(16.836F, 3.0F, 18.0F, 4.149F, 18.0F, 5.566F)
          verticalLineToRelative(6.71F)
          curveToRelative(0.0F, 1.418F, -1.164F, 2.566F, -2.6F, 2.566F)
          horizontalLineToRelative(-4.59F)
          lineToRelative(-4.011F, 2.961F)
          close()        
      }
    }
    return _comment20!!
  }

private var _comment20: ImageVector? = null
