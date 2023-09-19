package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Video28: ImageVector
  get() {
    if (_video28 != null) {
      return _video28!!
    }
    _video28 = fluentIcon(name = "Filled.Video28", 28f) {
      materialPath {
          moveTo(5.25F, 5.5F)
          curveTo(3.455F, 5.5F, 2.0F, 6.955F, 2.0F, 8.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(9.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(8.75F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineToRelative(-9.5F)
          close()
          moveToRelative(17.873F, 15.143F)
          lineToRelative(-3.623F, -3.55F)
          verticalLineTo(11.0F)
          lineToRelative(3.612F, -3.628F)
          curveToRelative(0.787F, -0.79F, 2.136F, -0.234F, 2.136F, 0.881F)
          verticalLineTo(19.75F)
          curveToRelative(0.0F, 1.108F, -1.334F, 1.668F, -2.125F, 0.893F)
          close()        
      }
    }
    return _video28!!
  }

private var _video28: ImageVector? = null
