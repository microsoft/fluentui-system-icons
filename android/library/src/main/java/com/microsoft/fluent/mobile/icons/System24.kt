package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.System24: ImageVector
  get() {
    if (_system24 != null) {
      return _system24!!
    }
    _system24 = fluentIcon(name = "Filled.System24", 24f) {
      materialPath {
          moveTo(4.946F, 5.0F)
          horizontalLineToRelative(14.108F)
          curveTo(20.678F, 5.0F, 22.0F, 6.304F, 22.0F, 7.92F)
          verticalLineToRelative(8.16F)
          curveToRelative(0.0F, 1.616F, -1.322F, 2.92F, -2.946F, 2.92F)
          horizontalLineTo(4.946F)
          curveTo(3.322F, 19.0F, 2.0F, 17.696F, 2.0F, 16.08F)
          verticalLineTo(7.92F)
          curveTo(2.0F, 6.304F, 3.322F, 5.0F, 4.946F, 5.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveTo(4.42F, 7.0F, 4.0F, 7.415F, 4.0F, 7.92F)
          verticalLineToRelative(8.16F)
          curveTo(4.0F, 16.585F, 4.42F, 17.0F, 4.946F, 17.0F)
          horizontalLineToRelative(14.108F)
          curveTo(19.58F, 17.0F, 20.0F, 16.585F, 20.0F, 16.08F)
          verticalLineTo(7.92F)
          curveTo(20.0F, 7.415F, 19.58F, 7.0F, 19.054F, 7.0F)
          horizontalLineTo(4.946F)
          close()        
      }
    }
    return _system24!!
  }

private var _system24: ImageVector? = null
