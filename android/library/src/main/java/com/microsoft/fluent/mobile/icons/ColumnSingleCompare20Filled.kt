package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ColumnSingleCompare20: ImageVector
  get() {
    if (_columnSingleCompare20 != null) {
      return _columnSingleCompare20!!
    }
    _columnSingleCompare20 = fluentIcon(name = "Filled.ColumnSingleCompare20", 20f) {
      materialPath {
          moveTo(6.0F, 2.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.035F, 0.787F, 1.887F, 1.795F, 1.99F)
          curveTo(5.863F, 17.997F, 5.931F, 18.0F, 6.0F, 18.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(5.0F, 6.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(-3.0F)
          close()        
      }
    }
    return _columnSingleCompare20!!
  }

private var _columnSingleCompare20: ImageVector? = null
