package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareMultiple16: ImageVector
  get() {
    if (_squareMultiple16 != null) {
      return _squareMultiple16!!
    }
    _squareMultiple16 = fluentIcon(name = "Filled.SquareMultiple16", 16f) {
      materialPath {
          moveTo(5.085F, 4.0F)
          horizontalLineTo(10.0F)
          curveToRelative(1.104F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.915F)
          curveToRelative(0.582F, -0.206F, 1.0F, -0.762F, 1.0F, -1.415F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.344F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.5F)
          curveTo(5.846F, 3.0F, 5.29F, 3.417F, 5.085F, 4.0F)
          close()
          moveTo(4.5F, 5.0F)
          curveTo(3.672F, 5.0F, 3.0F, 5.672F, 3.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-5.0F)
          curveTo(11.0F, 5.672F, 10.328F, 5.0F, 9.5F, 5.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _squareMultiple16!!
  }

private var _squareMultiple16: ImageVector? = null
