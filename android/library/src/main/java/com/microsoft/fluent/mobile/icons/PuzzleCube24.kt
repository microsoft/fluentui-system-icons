package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PuzzleCube24: ImageVector
  get() {
    if (_puzzleCube24 != null) {
      return _puzzleCube24!!
    }
    _puzzleCube24 = fluentIcon(name = "Filled.PuzzleCube24", 24f) {
      materialPath {
          moveTo(9.5F, 21.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          close()
          moveToRelative(6.5F, 0.0F)
          horizontalLineToRelative(1.75F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          close()
          moveToRelative(5.0F, -6.5F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveTo(21.0F, 8.0F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveToRelative(-6.5F, -5.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineTo(3.0F)
          close()
          moveTo(3.0F, 9.5F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineTo(3.0F)
          close()
          moveTo(3.0F, 16.0F)
          verticalLineToRelative(1.75F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(11.5F, -6.5F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(5.0F)
          close()        
      }
    }
    return _puzzleCube24!!
  }

private var _puzzleCube24: ImageVector? = null
