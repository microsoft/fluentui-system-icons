package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LinkSquare12: ImageVector
  get() {
    if (_linkSquare12 != null) {
      return _linkSquare12!!
    }
    _linkSquare12 = fluentIcon(name = "Regular.LinkSquare12", 12f) {
      materialPath {
          moveTo(1.0F, 3.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 2.0F, 2.0F, 2.448F, 2.0F, 3.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          verticalLineToRelative(1.0F)
          curveTo(1.895F, 8.0F, 1.0F, 7.105F, 1.0F, 6.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(3.0F, 6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveTo(4.895F, 4.0F, 4.0F, 4.895F, 4.0F, 6.0F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _linkSquare12!!
  }

private var _linkSquare12: ImageVector? = null
