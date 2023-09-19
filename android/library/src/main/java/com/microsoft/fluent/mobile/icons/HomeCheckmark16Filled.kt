package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HomeCheckmark16: ImageVector
  get() {
    if (_homeCheckmark16 != null) {
      return _homeCheckmark16!!
    }
    _homeCheckmark16 = fluentIcon(name = "Filled.HomeCheckmark16", 16f) {
      materialPath {
          moveTo(8.687F, 1.273F)
          curveToRelative(-0.385F, -0.364F, -0.988F, -0.364F, -1.374F, 0.0F)
          lineTo(2.47F, 5.848F)
          curveTo(2.17F, 6.131F, 2.0F, 6.525F, 2.0F, 6.938F)
          verticalLineTo(12.5F)
          curveTo(2.0F, 13.33F, 2.672F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.671F, 1.5F, -1.499F)
          verticalLineTo(6.937F)
          curveToRelative(0.0F, -0.412F, -0.17F, -0.806F, -0.47F, -1.089F)
          lineTo(8.688F, 1.273F)
          close()
          moveToRelative(2.167F, 5.38F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-3.5F, 3.497F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.499F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.706F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(7.0F, 9.797F)
          lineToRelative(3.146F, -3.143F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          close()        
      }
    }
    return _homeCheckmark16!!
  }

private var _homeCheckmark16: ImageVector? = null
