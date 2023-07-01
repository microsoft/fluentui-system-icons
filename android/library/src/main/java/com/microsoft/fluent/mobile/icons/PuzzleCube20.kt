package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PuzzleCube20: ImageVector
  get() {
    if (_puzzleCube20 != null) {
      return _puzzleCube20!!
    }
    _puzzleCube20 = fluentIcon(name = "Regular.PuzzleCube20", 20f) {
      materialPath {
          moveTo(3.0F, 14.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(7.5F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          close()
          moveTo(8.0F, 4.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(5.5F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          horizontalLineTo(13.0F)
          close()
          moveToRelative(3.0F, 4.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(13.0F)
          close()
          moveToRelative(-4.0F, 3.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(-3.0F, -4.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(8.0F, -4.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(8.0F)
          close()        
      }
    }
    return _puzzleCube20!!
  }

private var _puzzleCube20: ImageVector? = null
