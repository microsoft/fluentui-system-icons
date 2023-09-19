package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipHorizontal28: ImageVector
  get() {
    if (_flipHorizontal28 != null) {
      return _flipHorizontal28!!
    }
    _flipHorizontal28 = fluentIcon(name = "Regular.FlipHorizontal28", 28f) {
      materialPath {
          moveTo(25.882F, 23.654F)
          curveTo(25.744F, 23.869F, 25.506F, 24.0F, 25.25F, 24.0F)
          horizontalLineToRelative(-9.5F)
          curveTo(15.336F, 24.0F, 15.0F, 23.664F, 15.0F, 23.25F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.352F, 0.245F, -0.657F, 0.588F, -0.732F)
          curveToRelative(0.344F, -0.076F, 0.694F, 0.097F, 0.842F, 0.417F)
          lineToRelative(9.5F, 20.5F)
          curveToRelative(0.108F, 0.232F, 0.09F, 0.503F, -0.048F, 0.719F)
          close()
          moveTo(16.5F, 6.152F)
          verticalLineTo(22.5F)
          horizontalLineToRelative(7.576F)
          lineTo(16.5F, 6.152F)
          close()
          moveTo(2.75F, 24.0F)
          curveToRelative(-0.256F, 0.0F, -0.494F, -0.13F, -0.632F, -0.346F)
          curveToRelative(-0.138F, -0.216F, -0.156F, -0.487F, -0.048F, -0.719F)
          lineToRelative(9.5F, -20.5F)
          curveToRelative(0.147F, -0.32F, 0.498F, -0.493F, 0.841F, -0.417F)
          curveTo(12.755F, 2.094F, 13.0F, 2.398F, 13.0F, 2.75F)
          verticalLineToRelative(20.5F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _flipHorizontal28!!
  }

private var _flipHorizontal28: ImageVector? = null
