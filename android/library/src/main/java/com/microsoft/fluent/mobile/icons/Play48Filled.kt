package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Play48: ImageVector
  get() {
    if (_play48 != null) {
      return _play48!!
    }
    _play48 = fluentIcon(name = "Filled.Play48", 48f) {
      materialPath {
          moveTo(16.75F, 8.412F)
          lineToRelative(24.417F, 12.705F)
          curveToRelative(1.593F, 0.828F, 2.212F, 2.79F, 1.383F, 4.383F)
          curveToRelative(-0.308F, 0.592F, -0.79F, 1.075F, -1.383F, 1.383F)
          lineTo(16.75F, 39.588F)
          curveToRelative(-1.592F, 0.828F, -3.555F, 0.209F, -4.383F, -1.383F)
          curveTo(12.126F, 37.74F, 12.0F, 37.227F, 12.0F, 36.705F)
          verticalLineToRelative(-25.41F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          curveToRelative(0.448F, 0.0F, 0.89F, 0.092F, 1.299F, 0.27F)
          lineToRelative(0.201F, 0.097F)
          close()        
      }
    }
    return _play48!!
  }

private var _play48: ImageVector? = null
