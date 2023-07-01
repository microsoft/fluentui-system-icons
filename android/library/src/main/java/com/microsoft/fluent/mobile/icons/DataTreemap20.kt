package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataTreemap20: ImageVector
  get() {
    if (_dataTreemap20 != null) {
      return _dataTreemap20!!
    }
    _dataTreemap20 = fluentIcon(name = "Filled.DataTreemap20", 20f) {
      materialPath {
          moveTo(7.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(1.0F, 14.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(9.0F, -5.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(9.0F)
          horizontalLineToRelative(9.0F)
          close()        
      }
    }
    return _dataTreemap20!!
  }

private var _dataTreemap20: ImageVector? = null
