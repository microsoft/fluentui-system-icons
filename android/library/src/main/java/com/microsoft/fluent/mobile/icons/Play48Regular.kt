package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Play48: ImageVector
  get() {
    if (_play48 != null) {
      return _play48!!
    }
    _play48 = fluentIcon(name = "Regular.Play48", 48f) {
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
          moveToRelative(-1.154F, 2.218F)
          lineToRelative(-0.11F, -0.047F)
          curveToRelative(-0.076F, -0.025F, -0.156F, -0.038F, -0.236F, -0.038F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(25.41F)
          curveToRelative(0.0F, 0.12F, 0.029F, 0.239F, 0.085F, 0.346F)
          curveToRelative(0.19F, 0.367F, 0.644F, 0.51F, 1.011F, 0.319F)
          lineToRelative(24.417F, -12.705F)
          curveToRelative(0.137F, -0.071F, 0.248F, -0.182F, 0.32F, -0.32F)
          curveToRelative(0.19F, -0.366F, 0.048F, -0.82F, -0.32F, -1.01F)
          lineTo(15.596F, 10.63F)
          close()        
      }
    }
    return _play48!!
  }

private var _play48: ImageVector? = null
