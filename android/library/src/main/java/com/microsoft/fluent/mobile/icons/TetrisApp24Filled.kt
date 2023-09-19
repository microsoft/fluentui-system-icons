package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TetrisApp24: ImageVector
  get() {
    if (_tetrisApp24 != null) {
      return _tetrisApp24!!
    }
    _tetrisApp24 = fluentIcon(name = "Filled.TetrisApp24", 24f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(3.0F)
          close()
          moveTo(3.0F, 8.0F)
          curveTo(2.448F, 8.0F, 2.0F, 8.448F, 2.0F, 9.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(10.0F, 0.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(5.0F, -6.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveTo(4.0F, 17.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          close()
          moveToRelative(11.0F, -1.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(1.0F, -6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _tetrisApp24!!
  }

private var _tetrisApp24: ImageVector? = null
