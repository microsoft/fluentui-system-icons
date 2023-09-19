package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SwipeDown24: ImageVector
  get() {
    if (_swipeDown24 != null) {
      return _swipeDown24!!
    }
    _swipeDown24 = fluentIcon(name = "Filled.SwipeDown24", 24f) {
      materialPath {
          moveTo(12.0F, 6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(11.585F)
          lineToRelative(1.293F, -1.292F)
          curveToRelative(0.36F, -0.36F, 0.928F, -0.388F, 1.32F, -0.083F)
          lineToRelative(0.094F, 0.083F)
          curveToRelative(0.36F, 0.36F, 0.388F, 0.928F, 0.083F, 1.32F)
          lineToRelative(-0.083F, 0.094F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.36F, 0.36F, -0.928F, 0.388F, -1.32F, 0.083F)
          lineToRelative(-0.094F, -0.083F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.36F, -0.36F, 0.928F, -0.388F, 1.32F, -0.083F)
          lineToRelative(0.094F, 0.083F)
          lineTo(11.0F, 18.585F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.0F, -4.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          curveToRelative(0.0F, 2.05F, -1.234F, 3.812F, -3.0F, 4.584F)
          verticalLineTo(9.872F)
          curveTo(14.908F, 9.239F, 15.5F, 8.189F, 15.5F, 7.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          reflectiveCurveTo(8.5F, 5.067F, 8.5F, 7.0F)
          curveToRelative(0.0F, 1.19F, 0.593F, 2.24F, 1.5F, 2.873F)
          verticalLineToRelative(1.711F)
          curveTo(8.235F, 10.813F, 7.0F, 9.05F, 7.0F, 7.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          close()        
      }
    }
    return _swipeDown24!!
  }

private var _swipeDown24: ImageVector? = null
