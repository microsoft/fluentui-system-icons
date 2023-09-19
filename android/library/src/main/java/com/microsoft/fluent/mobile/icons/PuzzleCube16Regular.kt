package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PuzzleCube16: ImageVector
  get() {
    if (_puzzleCube16 != null) {
      return _puzzleCube16!!
    }
    _puzzleCube16 = fluentIcon(name = "Regular.PuzzleCube16", 16f) {
      materialPath {
          moveTo(2.0F, 5.0F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineTo(4.999F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(8.0F, 8.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(-7.0F, -2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(7.0F, -1.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(3.0F, 6.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(7.0F, -1.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(1.0F, 1.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(-2.0F)
          close()
          moveToRelative(2.0F, -6.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(0.5F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          close()        
      }
    }
    return _puzzleCube16!!
  }

private var _puzzleCube16: ImageVector? = null
