package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flash28: ImageVector
  get() {
    if (_flash28 != null) {
      return _flash28!!
    }
    _flash28 = fluentIcon(name = "Filled.Flash28", 28f) {
      materialPath {
          moveTo(8.406F, 2.852F)
          curveTo(8.606F, 2.338F, 9.1F, 2.0F, 9.65F, 2.0F)
          horizontalLineToRelative(8.516F)
          curveToRelative(0.927F, 0.0F, 1.57F, 0.922F, 1.252F, 1.792F)
          lineTo(17.324F, 9.5F)
          horizontalLineToRelative(4.837F)
          curveToRelative(1.178F, 0.0F, 1.777F, 1.416F, 0.957F, 2.262F)
          lineTo(9.784F, 25.503F)
          curveToRelative(-1.14F, 1.175F, -3.106F, 0.117F, -2.753F, -1.482F)
          lineToRelative(1.66F, -7.521F)
          horizontalLineTo(5.917F)
          curveToRelative(-1.347F, 0.0F, -2.274F, -1.353F, -1.787F, -2.61F)
          lineTo(8.405F, 2.853F)
          close()        
      }
    }
    return _flash28!!
  }

private var _flash28: ImageVector? = null
