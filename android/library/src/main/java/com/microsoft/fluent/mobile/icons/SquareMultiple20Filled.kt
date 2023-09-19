package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareMultiple20: ImageVector
  get() {
    if (_squareMultiple20 != null) {
      return _squareMultiple20!!
    }
    _squareMultiple20 = fluentIcon(name = "Filled.SquareMultiple20", 20f) {
      materialPath {
          moveTo(6.085F, 4.0F)
          horizontalLineTo(5.05F)
          curveTo(5.282F, 2.859F, 6.29F, 2.0F, 7.5F, 2.0F)
          horizontalLineTo(14.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.21F, -0.859F, 2.218F, -2.0F, 2.45F)
          verticalLineToRelative(-1.035F)
          curveToRelative(0.583F, -0.206F, 1.0F, -0.762F, 1.0F, -1.415F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(7.5F)
          curveTo(6.847F, 3.0F, 6.291F, 3.417F, 6.085F, 4.0F)
          close()
          moveTo(2.0F, 7.5F)
          curveTo(2.0F, 6.12F, 3.12F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(8.0F)
          curveTo(13.88F, 5.0F, 15.0F, 6.12F, 15.0F, 7.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-8.0F)
          curveTo(3.12F, 18.0F, 2.0F, 16.88F, 2.0F, 15.5F)
          verticalLineToRelative(-8.0F)
          close()        
      }
    }
    return _squareMultiple20!!
  }

private var _squareMultiple20: ImageVector? = null
