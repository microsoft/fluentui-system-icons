package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PuzzlePiece16: ImageVector
  get() {
    if (_puzzlePiece16 != null) {
      return _puzzlePiece16!!
    }
    _puzzlePiece16 = fluentIcon(name = "Filled.PuzzlePiece16", 16f) {
      materialPath {
          moveTo(9.0F, 1.0F)
          curveTo(7.894F, 1.0F, 7.0F, 1.895F, 7.0F, 3.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 3.0F, 4.0F, 3.672F, 4.0F, 4.5F)
          verticalLineTo(6.0F)
          curveTo(2.896F, 6.0F, 2.0F, 6.896F, 2.0F, 8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 12.33F, 4.672F, 13.0F, 5.5F, 13.0F)
          horizontalLineTo(7.0F)
          curveToRelative(0.0F, 1.105F, 0.896F, 2.0F, 2.0F, 2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.447F, -1.0F, -1.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.672F, 13.328F, 3.0F, 12.5F, 3.0F)
          horizontalLineTo(11.0F)
          curveToRelative(0.0F, -1.104F, -0.896F, -2.0F, -2.0F, -2.0F)
          close()        
      }
    }
    return _puzzlePiece16!!
  }

private var _puzzlePiece16: ImageVector? = null
