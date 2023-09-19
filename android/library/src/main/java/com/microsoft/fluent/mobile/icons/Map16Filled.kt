package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Map16: ImageVector
  get() {
    if (_map16 != null) {
      return _map16!!
    }
    _map16 = fluentIcon(name = "Filled.Map16", 16f) {
      materialPath {
          moveTo(5.0F, 2.223F)
          lineTo(1.235F, 4.576F)
          curveTo(1.089F, 4.667F, 1.0F, 4.828F, 1.0F, 5.0F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.182F, 0.099F, 0.35F, 0.258F, 0.437F)
          curveToRelative(0.159F, 0.088F, 0.353F, 0.083F, 0.507F, -0.013F)
          lineTo(5.0F, 11.902F)
          verticalLineToRelative(-9.68F)
          close()
          moveToRelative(1.0F, 9.586F)
          lineToRelative(4.0F, 2.0F)
          verticalLineTo(4.191F)
          lineToRelative(-4.0F, -2.0F)
          verticalLineToRelative(9.618F)
          close()
          moveToRelative(8.765F, -0.385F)
          lineTo(11.0F, 13.777F)
          verticalLineToRelative(-9.68F)
          lineToRelative(3.235F, -2.021F)
          curveToRelative(0.154F, -0.096F, 0.348F, -0.101F, 0.507F, -0.013F)
          curveTo(14.902F, 2.15F, 15.0F, 2.318F, 15.0F, 2.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.172F, -0.089F, 0.333F, -0.235F, 0.424F)
          close()        
      }
    }
    return _map16!!
  }

private var _map16: ImageVector? = null
