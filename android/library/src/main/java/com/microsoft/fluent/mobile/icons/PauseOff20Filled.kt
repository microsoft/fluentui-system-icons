package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PauseOff20: ImageVector
  get() {
    if (_pauseOff20 != null) {
      return _pauseOff20!!
    }
    _pauseOff20 = fluentIcon(name = "Filled.PauseOff20", 20f) {
      materialPath {
          moveTo(3.0F, 3.707F)
          verticalLineTo(16.5F)
          curveTo(3.0F, 17.328F, 3.672F, 18.0F, 4.5F, 18.0F)
          horizontalLineToRelative(2.0F)
          curveTo(7.328F, 18.0F, 8.0F, 17.328F, 8.0F, 16.5F)
          verticalLineTo(8.707F)
          lineToRelative(4.0F, 4.0F)
          verticalLineTo(16.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.489F, 0.0F, 0.923F, -0.234F, 1.197F, -0.596F)
          lineToRelative(0.45F, 0.45F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(3.0F, 3.707F)
          close()
          moveToRelative(9.0F, 6.172F)
          lineToRelative(5.0F, 5.0F)
          verticalLineTo(3.5F)
          curveTo(17.0F, 2.672F, 16.328F, 2.0F, 15.5F, 2.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(12.672F, 2.0F, 12.0F, 2.672F, 12.0F, 3.5F)
          verticalLineToRelative(6.379F)
          close()
          moveToRelative(-7.84F, -7.84F)
          lineTo(8.0F, 5.879F)
          verticalLineTo(3.5F)
          curveTo(8.0F, 2.672F, 7.328F, 2.0F, 6.5F, 2.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(4.383F, 2.0F, 4.27F, 2.013F, 4.16F, 2.039F)
          close()        
      }
    }
    return _pauseOff20!!
  }

private var _pauseOff20: ImageVector? = null
