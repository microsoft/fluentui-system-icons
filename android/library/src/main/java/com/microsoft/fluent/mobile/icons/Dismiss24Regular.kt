package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dismiss24: ImageVector
  get() {
    if (_dismiss24 != null) {
      return _dismiss24!!
    }
    _dismiss24 = fluentIcon(name = "Regular.Dismiss24", 24f) {
      materialPath {
          moveTo(4.397F, 4.554F)
          lineTo(4.47F, 4.47F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(5.53F, 4.47F)
          lineTo(12.0F, 10.939F)
          lineToRelative(6.47F, -6.47F)
          curveToRelative(0.293F, -0.292F, 0.767F, -0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.294F, 0.293F, 0.768F, 0.0F, 1.061F)
          lineTo(13.061F, 12.0F)
          lineToRelative(6.47F, 6.47F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.976F)
          lineTo(19.53F, 19.53F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(18.47F, 19.53F)
          lineTo(12.0F, 13.061F)
          lineToRelative(-6.47F, 6.47F)
          curveToRelative(-0.293F, 0.292F, -0.767F, 0.292F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.294F, -0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(10.939F, 12.0F)
          lineToRelative(-6.47F, -6.47F)
          curveTo(4.204F, 5.264F, 4.18F, 4.847F, 4.398F, 4.554F)
          lineTo(4.47F, 4.47F)
          lineTo(4.397F, 4.554F)
          close()        
      }
    }
    return _dismiss24!!
  }

private var _dismiss24: ImageVector? = null
