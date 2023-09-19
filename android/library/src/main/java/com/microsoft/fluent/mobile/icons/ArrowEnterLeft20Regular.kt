package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowEnterLeft20: ImageVector
  get() {
    if (_arrowEnterLeft20 != null) {
      return _arrowEnterLeft20!!
    }
    _arrowEnterLeft20 = fluentIcon(name = "Regular.ArrowEnterLeft20", 20f) {
      materialPath {
          moveTo(3.76F, 12.0F)
          lineToRelative(3.333F, 3.136F)
          curveToRelative(0.2F, 0.19F, 0.21F, 0.506F, 0.021F, 0.707F)
          curveToRelative(-0.19F, 0.2F, -0.506F, 0.21F, -0.707F, 0.021F)
          lineToRelative(-4.25F, -4.0F)
          curveTo(2.057F, 11.77F, 2.0F, 11.638F, 2.0F, 11.5F)
          curveToRelative(0.0F, -0.138F, 0.057F, -0.27F, 0.157F, -0.364F)
          lineToRelative(4.25F, -4.0F)
          curveToRelative(0.201F, -0.19F, 0.518F, -0.18F, 0.707F, 0.021F)
          curveToRelative(0.19F, 0.202F, 0.18F, 0.518F, -0.021F, 0.707F)
          lineTo(3.76F, 11.0F)
          horizontalLineTo(15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.5F)
          curveTo(17.0F, 4.224F, 17.224F, 4.0F, 17.5F, 4.0F)
          reflectiveCurveTo(18.0F, 4.224F, 18.0F, 4.5F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(3.76F)
          close()        
      }
    }
    return _arrowEnterLeft20!!
  }

private var _arrowEnterLeft20: ImageVector? = null
