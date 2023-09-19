package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PuzzlePiece24: ImageVector
  get() {
    if (_puzzlePiece24 != null) {
      return _puzzlePiece24!!
    }
    _puzzlePiece24 = fluentIcon(name = "Filled.PuzzlePiece24", 24f) {
      materialPath {
          moveTo(13.0F, 2.0F)
          curveToRelative(1.364F, 0.0F, 2.47F, 1.106F, 2.47F, 2.47F)
          lineTo(15.469F, 5.0F)
          horizontalLineTo(19.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          lineToRelative(-0.001F, 3.499F)
          lineToRelative(-1.53F, 0.001F)
          curveToRelative(-1.309F, 0.0F, -2.38F, 1.019F, -2.464F, 2.307F)
          lineTo(16.0F, 11.97F)
          verticalLineToRelative(0.06F)
          curveToRelative(0.0F, 1.31F, 1.019F, 2.381F, 2.307F, 2.465F)
          lineTo(18.47F, 14.5F)
          lineToRelative(1.529F, -0.001F)
          lineTo(20.0F, 18.003F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          lineToRelative(-3.531F, -0.001F)
          verticalLineToRelative(0.528F)
          curveTo(15.47F, 20.894F, 14.365F, 22.0F, 13.0F, 22.0F)
          curveToRelative(-1.364F, 0.0F, -2.47F, -1.106F, -2.47F, -2.47F)
          verticalLineToRelative(-0.528F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.447F, -1.0F, -1.0F)
          lineToRelative(-0.001F, -3.531F)
          horizontalLineToRelative(-0.53F)
          curveTo(4.107F, 14.471F, 3.0F, 13.365F, 3.0F, 12.001F)
          reflectiveCurveToRelative(1.106F, -2.47F, 2.47F, -2.47F)
          horizontalLineToRelative(0.529F)
          lineTo(6.0F, 6.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.53F)
          verticalLineTo(4.47F)
          curveTo(10.53F, 3.106F, 11.636F, 2.0F, 13.0F, 2.0F)
          close()        
      }
    }
    return _puzzlePiece24!!
  }

private var _puzzlePiece24: ImageVector? = null
