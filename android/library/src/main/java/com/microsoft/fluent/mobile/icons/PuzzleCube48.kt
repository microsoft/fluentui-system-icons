package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PuzzleCube48: ImageVector
  get() {
    if (_puzzleCube48 != null) {
      return _puzzleCube48!!
    }
    _puzzleCube48 = fluentIcon(name = "Filled.PuzzleCube48", 48f) {
      materialPath {
          moveTo(19.0F, 6.0F)
          verticalLineToRelative(10.5F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(19.0F)
          close()
          moveToRelative(-2.5F, 13.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(10.5F)
          verticalLineTo(19.0F)
          close()
          moveTo(19.0F, 29.0F)
          verticalLineTo(19.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(19.0F)
          close()
          moveToRelative(-2.5F, 2.5F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(4.25F)
          curveTo(6.0F, 39.202F, 8.798F, 42.0F, 12.25F, 42.0F)
          horizontalLineToRelative(4.25F)
          verticalLineTo(31.5F)
          close()
          moveTo(19.0F, 42.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(31.5F)
          horizontalLineTo(19.0F)
          verticalLineTo(42.0F)
          close()
          moveToRelative(12.5F, 0.0F)
          verticalLineTo(31.5F)
          horizontalLineTo(42.0F)
          verticalLineToRelative(4.25F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineTo(31.5F)
          close()
          moveTo(42.0F, 19.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(31.5F)
          verticalLineTo(19.0F)
          horizontalLineTo(42.0F)
          close()
          moveToRelative(0.0F, -2.5F)
          verticalLineToRelative(-4.25F)
          curveTo(42.0F, 8.798F, 39.202F, 6.0F, 35.75F, 6.0F)
          horizontalLineTo(31.5F)
          verticalLineToRelative(10.5F)
          horizontalLineTo(42.0F)
          close()        
      }
    }
    return _puzzleCube48!!
  }

private var _puzzleCube48: ImageVector? = null
