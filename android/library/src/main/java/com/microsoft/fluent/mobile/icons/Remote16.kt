package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Remote16: ImageVector
  get() {
    if (_remote16 != null) {
      return _remote16!!
    }
    _remote16 = fluentIcon(name = "Filled.Remote16", 16f) {
      materialPath {
          moveTo(13.796F, 3.264F)
          curveToRelative(0.284F, -0.302F, 0.27F, -0.776F, -0.032F, -1.06F)
          curveToRelative(-0.302F, -0.284F, -0.776F, -0.27F, -1.06F, 0.032F)
          lineToRelative(-4.0F, 4.25F)
          curveToRelative(-0.272F, 0.289F, -0.272F, 0.74F, 0.0F, 1.028F)
          lineToRelative(4.0F, 4.25F)
          curveToRelative(0.284F, 0.302F, 0.758F, 0.316F, 1.06F, 0.032F)
          curveToRelative(0.302F, -0.284F, 0.316F, -0.758F, 0.032F, -1.06F)
          lineTo(10.28F, 7.0F)
          lineToRelative(3.516F, -3.736F)
          close()
          moveToRelative(-10.5F, 0.972F)
          curveTo(3.012F, 3.934F, 2.538F, 3.92F, 2.236F, 4.204F)
          curveTo(1.934F, 4.488F, 1.92F, 4.962F, 2.204F, 5.264F)
          lineTo(5.72F, 9.0F)
          lineToRelative(-3.516F, 3.736F)
          curveToRelative(-0.284F, 0.302F, -0.27F, 0.776F, 0.032F, 1.06F)
          curveToRelative(0.302F, 0.284F, 0.776F, 0.27F, 1.06F, -0.032F)
          lineToRelative(4.0F, -4.25F)
          curveToRelative(0.272F, -0.289F, 0.272F, -0.74F, 0.0F, -1.028F)
          lineToRelative(-4.0F, -4.25F)
          close()        
      }
    }
    return _remote16!!
  }

private var _remote16: ImageVector? = null
