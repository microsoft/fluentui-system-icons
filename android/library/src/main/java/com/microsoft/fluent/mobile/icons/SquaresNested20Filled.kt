package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquaresNested20: ImageVector
  get() {
    if (_squaresNested20 != null) {
      return _squaresNested20!!
    }
    _squaresNested20 = fluentIcon(name = "Filled.SquaresNested20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(1.764F)
          curveTo(16.47F, 7.289F, 15.768F, 7.0F, 15.0F, 7.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.768F, 0.289F, 1.47F, 0.764F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(7.0F, 11.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _squaresNested20!!
  }

private var _squaresNested20: ImageVector? = null
