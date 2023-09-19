package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PuzzleCube28: ImageVector
  get() {
    if (_puzzleCube28 != null) {
      return _puzzleCube28!!
    }
    _puzzleCube28 = fluentIcon(name = "Filled.PuzzleCube28", 28f) {
      materialPath {
          moveTo(3.0F, 11.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(6.5F)
          verticalLineToRelative(-6.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(0.0F, 7.5F)
          verticalLineToRelative(2.75F)
          curveTo(3.0F, 23.321F, 4.679F, 25.0F, 6.75F, 25.0F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(-6.5F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(8.0F, 6.5F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(-6.5F)
          horizontalLineToRelative(-6.0F)
          verticalLineTo(25.0F)
          close()
          moveToRelative(7.5F, 0.0F)
          horizontalLineToRelative(2.75F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(18.5F)
          horizontalLineToRelative(-6.5F)
          verticalLineTo(25.0F)
          close()
          moveToRelative(6.5F, -8.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(-6.5F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(25.0F)
          close()
          moveToRelative(0.0F, -7.5F)
          verticalLineTo(6.75F)
          curveTo(25.0F, 4.679F, 23.321F, 3.0F, 21.25F, 3.0F)
          horizontalLineTo(18.5F)
          verticalLineToRelative(6.5F)
          horizontalLineTo(25.0F)
          close()
          moveTo(17.0F, 3.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(6.5F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(0.0F, 8.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(6.0F)
          close()        
      }
    }
    return _puzzleCube28!!
  }

private var _puzzleCube28: ImageVector? = null
