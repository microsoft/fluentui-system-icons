package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpRight48: ImageVector
  get() {
    if (_arrowUpRight48 != null) {
      return _arrowUpRight48!!
    }
    _arrowUpRight48 = fluentIcon(name = "Filled.ArrowUpRight48", 48f) {
      materialPath {
          moveTo(22.5F, 6.0F)
          curveTo(21.672F, 6.0F, 21.0F, 6.672F, 21.0F, 7.5F)
          reflectiveCurveTo(21.672F, 9.0F, 22.5F, 9.0F)
          horizontalLineToRelative(14.379F)
          lineTo(6.439F, 39.44F)
          curveToRelative(-0.585F, 0.585F, -0.585F, 1.535F, 0.0F, 2.12F)
          curveToRelative(0.586F, 0.587F, 1.536F, 0.587F, 2.122F, 0.0F)
          lineTo(39.0F, 11.122F)
          verticalLineTo(25.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-18.0F)
          curveTo(42.0F, 6.672F, 41.328F, 6.0F, 40.5F, 6.0F)
          horizontalLineToRelative(-18.0F)
          close()        
      }
    }
    return _arrowUpRight48!!
  }

private var _arrowUpRight48: ImageVector? = null
