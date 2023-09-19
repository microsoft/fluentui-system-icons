package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Board16: ImageVector
  get() {
    if (_board16 != null) {
      return _board16!!
    }
    _board16 = fluentIcon(name = "Filled.Board16", 16f) {
      materialPath {
          moveTo(7.5F, 2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineToRelative(8.0F)
          horizontalLineTo(14.0F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(5.5F, 9.0F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(-6.5F, 3.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          close()        
      }
    }
    return _board16!!
  }

private var _board16: ImageVector? = null
