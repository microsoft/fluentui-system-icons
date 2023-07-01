package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PuzzlePiece20: ImageVector
  get() {
    if (_puzzlePiece20 != null) {
      return _puzzlePiece20!!
    }
    _puzzlePiece20 = fluentIcon(name = "Filled.PuzzlePiece20", 20f) {
      materialPath {
          moveTo(11.0F, 2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          lineToRelative(-0.001F, 0.056F)
          horizontalLineTo(16.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          lineTo(16.999F, 8.0F)
          horizontalLineTo(16.0F)
          curveToRelative(-1.054F, 0.0F, -1.918F, 0.816F, -1.995F, 1.85F)
          lineTo(14.0F, 10.0F)
          curveToRelative(0.0F, 1.054F, 0.816F, 1.918F, 1.85F, 1.995F)
          lineTo(16.0F, 12.0F)
          lineToRelative(0.999F, -0.001F)
          lineTo(17.0F, 15.056F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-3.003F)
          lineToRelative(-0.002F, 0.093F)
          curveTo(12.918F, 17.184F, 12.055F, 18.0F, 11.0F, 18.0F)
          curveToRelative(-1.085F, 0.0F, -1.969F, -0.865F, -2.0F, -1.943F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(12.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          verticalLineTo(5.056F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.999F)
          lineTo(9.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _puzzlePiece20!!
  }

private var _puzzlePiece20: ImageVector? = null
