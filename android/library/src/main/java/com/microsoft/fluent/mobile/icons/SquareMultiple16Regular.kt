package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SquareMultiple16: ImageVector
  get() {
    if (_squareMultiple16 != null) {
      return _squareMultiple16!!
    }
    _squareMultiple16 = fluentIcon(name = "Regular.SquareMultiple16", 16f) {
      materialPath {
          moveTo(5.085F, 4.0F)
          curveTo(5.291F, 3.417F, 5.846F, 3.0F, 6.5F, 3.0F)
          horizontalLineTo(10.0F)
          curveToRelative(1.656F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.653F, -0.418F, 1.209F, -1.0F, 1.415F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.896F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.085F)
          close()
          moveTo(4.5F, 5.0F)
          horizontalLineToRelative(5.0F)
          curveTo(10.328F, 5.0F, 11.0F, 5.672F, 11.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineToRelative(-5.0F)
          curveTo(3.0F, 5.672F, 3.672F, 5.0F, 4.5F, 5.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(4.224F, 6.0F, 4.0F, 6.224F, 4.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveTo(4.0F, 11.776F, 4.224F, 12.0F, 4.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-5.0F)
          curveTo(10.0F, 6.224F, 9.776F, 6.0F, 9.5F, 6.0F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _squareMultiple16!!
  }

private var _squareMultiple16: ImageVector? = null
