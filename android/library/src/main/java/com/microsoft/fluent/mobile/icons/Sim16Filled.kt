package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Sim16: ImageVector
  get() {
    if (_sim16 != null) {
      return _sim16!!
    }
    _sim16 = fluentIcon(name = "Filled.Sim16", 16f) {
      materialPath {
          moveTo(5.5F, 1.0F)
          curveTo(4.12F, 1.0F, 3.0F, 2.12F, 3.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 13.88F, 4.12F, 15.0F, 5.5F, 15.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(5.328F)
          curveToRelative(0.0F, -0.663F, -0.263F, -1.299F, -0.732F, -1.767F)
          lineToRelative(-1.829F, -1.829F)
          curveTo(9.97F, 1.263F, 9.335F, 1.0F, 8.672F, 1.0F)
          horizontalLineTo(5.5F)
          close()
          moveToRelative(1.0F, 7.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(6.5F)
          curveTo(5.672F, 13.0F, 5.0F, 12.328F, 5.0F, 11.5F)
          verticalLineToRelative(-2.0F)
          curveTo(5.0F, 8.672F, 5.672F, 8.0F, 6.5F, 8.0F)
          close()
          moveTo(9.0F, 8.0F)
          horizontalLineToRelative(0.5F)
          curveTo(10.328F, 8.0F, 11.0F, 8.672F, 11.0F, 9.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(9.0F)
          verticalLineTo(8.0F)
          close()        
      }
    }
    return _sim16!!
  }

private var _sim16: ImageVector? = null
