package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColumnSingleCompare20: ImageVector
  get() {
    if (_columnSingleCompare20 != null) {
      return _columnSingleCompare20!!
    }
    _columnSingleCompare20 = fluentIcon(name = "Regular.ColumnSingleCompare20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(5.448F, 3.0F, 5.0F, 3.448F, 5.0F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(-1.0F, 8.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _columnSingleCompare20!!
  }

private var _columnSingleCompare20: ImageVector? = null
