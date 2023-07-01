package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dismiss28: ImageVector
  get() {
    if (_dismiss28 != null) {
      return _dismiss28!!
    }
    _dismiss28 = fluentIcon(name = "Regular.Dismiss28", 28f) {
      materialPath {
          moveTo(22.47F, 4.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(15.06F, 14.0F)
          lineToRelative(8.47F, 8.47F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(14.0F, 15.06F)
          lineToRelative(-8.47F, 8.47F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(12.94F, 14.0F)
          lineTo(4.47F, 5.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(14.0F, 12.94F)
          lineToRelative(8.47F, -8.47F)
          close()        
      }
    }
    return _dismiss28!!
  }

private var _dismiss28: ImageVector? = null
