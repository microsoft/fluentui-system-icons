package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SwipeRight24: ImageVector
  get() {
    if (_swipeRight24 != null) {
      return _swipeRight24!!
    }
    _swipeRight24 = fluentIcon(name = "Filled.SwipeRight24", 24f) {
      materialPath {
          moveTo(6.0F, 12.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(11.585F)
          lineToRelative(-1.292F, 1.293F)
          curveToRelative(-0.36F, 0.36F, -0.388F, 0.928F, -0.083F, 1.32F)
          lineToRelative(0.083F, 0.094F)
          curveToRelative(0.36F, 0.36F, 0.928F, 0.388F, 1.32F, 0.083F)
          lineToRelative(0.094F, -0.083F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.36F, -0.36F, 0.388F, -0.928F, 0.083F, -1.32F)
          lineToRelative(-0.083F, -0.094F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.36F, 0.36F, -0.388F, 0.928F, -0.083F, 1.32F)
          lineToRelative(0.083F, 0.094F)
          lineTo(18.585F, 11.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          close()
          moveToRelative(-4.0F, 0.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          curveToRelative(2.05F, 0.0F, 3.812F, -1.234F, 4.584F, -3.0F)
          horizontalLineTo(9.872F)
          curveTo(9.239F, 14.908F, 8.189F, 15.5F, 7.0F, 15.5F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveTo(5.067F, 8.5F, 7.0F, 8.5F)
          curveToRelative(1.19F, 0.0F, 2.24F, 0.593F, 2.873F, 1.5F)
          horizontalLineToRelative(1.711F)
          curveTo(10.813F, 8.235F, 9.05F, 7.0F, 7.0F, 7.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          close()        
      }
    }
    return _swipeRight24!!
  }

private var _swipeRight24: ImageVector? = null
