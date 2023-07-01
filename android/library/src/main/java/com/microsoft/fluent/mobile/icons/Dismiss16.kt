package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dismiss16: ImageVector
  get() {
    if (_dismiss16 != null) {
      return _dismiss16!!
    }
    _dismiss16 = fluentIcon(name = "Filled.Dismiss16", 16f) {
      materialPath {
          moveTo(2.397F, 2.554F)
          lineTo(2.47F, 2.47F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(3.53F, 2.47F)
          lineTo(8.0F, 6.939F)
          lineToRelative(4.47F, -4.47F)
          curveToRelative(0.293F, -0.292F, 0.767F, -0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.294F, 0.293F, 0.768F, 0.0F, 1.061F)
          lineTo(9.061F, 8.0F)
          lineToRelative(4.47F, 4.47F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.976F)
          lineTo(13.53F, 13.53F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(12.47F, 13.53F)
          lineTo(8.0F, 9.061F)
          lineToRelative(-4.47F, 4.47F)
          curveToRelative(-0.293F, 0.292F, -0.767F, 0.292F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.294F, -0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(6.939F, 8.0F)
          lineToRelative(-4.47F, -4.47F)
          curveTo(2.204F, 3.264F, 2.18F, 2.847F, 2.398F, 2.554F)
          lineTo(2.47F, 2.47F)
          lineTo(2.397F, 2.554F)
          close()        
      }
    }
    return _dismiss16!!
  }

private var _dismiss16: ImageVector? = null
