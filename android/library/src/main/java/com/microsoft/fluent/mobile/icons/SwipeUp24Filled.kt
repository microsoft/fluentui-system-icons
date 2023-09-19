package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SwipeUp24: ImageVector
  get() {
    if (_swipeUp24 != null) {
      return _swipeUp24!!
    }
    _swipeUp24 = fluentIcon(name = "Filled.SwipeUp24", 24f) {
      materialPath {
          moveTo(12.0F, 18.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.415F)
          lineToRelative(1.293F, 1.292F)
          curveToRelative(0.36F, 0.36F, 0.928F, 0.388F, 1.32F, 0.083F)
          lineToRelative(0.094F, -0.083F)
          curveToRelative(0.36F, -0.36F, 0.388F, -0.928F, 0.083F, -1.32F)
          lineToRelative(-0.083F, -0.094F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.36F, -0.36F, -0.928F, -0.388F, -1.32F, -0.083F)
          lineToRelative(-0.094F, 0.083F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.36F, 0.36F, 0.928F, 0.388F, 1.32F, 0.083F)
          lineToRelative(0.094F, -0.083F)
          lineTo(11.0F, 5.415F)
          verticalLineTo(17.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          curveToRelative(0.0F, -2.05F, -1.234F, -3.812F, -3.0F, -4.584F)
          verticalLineToRelative(1.712F)
          curveToRelative(0.907F, 0.633F, 1.5F, 1.683F, 1.5F, 2.872F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(8.5F, 18.933F, 8.5F, 17.0F)
          curveToRelative(0.0F, -1.19F, 0.593F, -2.24F, 1.5F, -2.873F)
          verticalLineToRelative(-1.711F)
          curveTo(8.235F, 13.187F, 7.0F, 14.95F, 7.0F, 17.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          close()        
      }
    }
    return _swipeUp24!!
  }

private var _swipeUp24: ImageVector? = null
