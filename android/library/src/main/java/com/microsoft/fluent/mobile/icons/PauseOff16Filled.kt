package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PauseOff16: ImageVector
  get() {
    if (_pauseOff16 != null) {
      return _pauseOff16!!
    }
    _pauseOff16 = fluentIcon(name = "Filled.PauseOff16", 16f) {
      materialPath {
          moveTo(13.147F, 13.854F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveTo(2.053F, 3.048F, 2.0F, 3.267F, 2.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 13.328F, 2.672F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(2.0F)
          curveTo(6.328F, 14.0F, 7.0F, 13.328F, 7.0F, 12.5F)
          verticalLineTo(7.707F)
          lineToRelative(2.0F, 2.0F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.232F, 0.0F, 0.45F, -0.053F, 0.647F, -0.146F)
          close()
          moveTo(9.0F, 6.879F)
          lineToRelative(5.0F, 5.0F)
          verticalLineTo(3.5F)
          curveTo(14.0F, 2.672F, 13.328F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(9.672F, 2.0F, 9.0F, 2.672F, 9.0F, 3.5F)
          verticalLineToRelative(3.379F)
          close()
          moveTo(4.121F, 2.0F)
          lineTo(7.0F, 4.879F)
          verticalLineTo(3.5F)
          curveTo(7.0F, 2.672F, 6.328F, 2.0F, 5.5F, 2.0F)
          horizontalLineTo(4.121F)
          close()        
      }
    }
    return _pauseOff16!!
  }

private var _pauseOff16: ImageVector? = null
