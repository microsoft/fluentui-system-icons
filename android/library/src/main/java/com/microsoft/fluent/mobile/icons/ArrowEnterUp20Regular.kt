package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowEnterUp20: ImageVector
  get() {
    if (_arrowEnterUp20 != null) {
      return _arrowEnterUp20!!
    }
    _arrowEnterUp20 = fluentIcon(name = "Regular.ArrowEnterUp20", 20f) {
      materialPath {
          moveTo(8.864F, 2.157F)
          curveTo(8.77F, 2.057F, 8.638F, 2.0F, 8.5F, 2.0F)
          curveTo(8.362F, 2.0F, 8.23F, 2.057F, 8.136F, 2.157F)
          lineToRelative(-4.0F, 4.25F)
          curveToRelative(-0.19F, 0.201F, -0.18F, 0.518F, 0.021F, 0.707F)
          curveToRelative(0.201F, 0.19F, 0.518F, 0.18F, 0.707F, -0.021F)
          lineTo(8.0F, 3.76F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.776F, 17.0F, 15.5F, 17.0F)
          horizontalLineTo(11.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(3.76F)
          lineToRelative(3.136F, 3.333F)
          curveToRelative(0.19F, 0.2F, 0.506F, 0.21F, 0.707F, 0.021F)
          curveToRelative(0.2F, -0.19F, 0.21F, -0.506F, 0.021F, -0.707F)
          lineToRelative(-4.0F, -4.25F)
          close()        
      }
    }
    return _arrowEnterUp20!!
  }

private var _arrowEnterUp20: ImageVector? = null
