package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CellularData520: ImageVector
  get() {
    if (_cellularData520 != null) {
      return _cellularData520!!
    }
    _cellularData520 = fluentIcon(name = "Regular.CellularData520", 520f) {
      materialPath {
          moveTo(4.5F, 12.0F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(5.0F, 12.5F)
          verticalLineToRelative(3.0F)
          curveTo(5.0F, 15.776F, 4.776F, 16.0F, 4.5F, 16.0F)
          curveToRelative(-0.245F, 0.0F, -0.45F, -0.177F, -0.492F, -0.41F)
          lineTo(4.0F, 15.5F)
          verticalLineToRelative(-3.0F)
          curveTo(4.0F, 12.224F, 4.224F, 12.0F, 4.5F, 12.0F)
          close()        
      }
    }
    return _cellularData520!!
  }

private var _cellularData520: ImageVector? = null
