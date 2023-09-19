package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareMultiple32: ImageVector
  get() {
    if (_squareMultiple32 != null) {
      return _squareMultiple32!!
    }
    _squareMultiple32 = fluentIcon(name = "Filled.SquareMultiple32", 32f) {
      materialPath {
          moveTo(8.113F, 5.5F)
          horizontalLineToRelative(2.097F)
          curveTo(10.596F, 4.617F, 11.477F, 4.0F, 12.502F, 4.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 1.026F, -0.618F, 1.907F, -1.502F, 2.293F)
          verticalLineToRelative(2.096F)
          curveToRelative(2.005F, -0.454F, 3.502F, -2.247F, 3.502F, -4.389F)
          verticalLineToRelative(-11.0F)
          curveToRelative(0.0F, -3.59F, -2.91F, -6.5F, -6.5F, -6.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(10.36F, 2.0F, 8.568F, 3.496F, 8.113F, 5.5F)
          close()
          moveTo(6.5F, 7.0F)
          curveTo(4.015F, 7.0F, 2.0F, 9.015F, 2.0F, 11.5F)
          verticalLineToRelative(14.0F)
          curveTo(2.0F, 27.985F, 4.015F, 30.0F, 6.5F, 30.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-14.0F)
          curveTo(25.0F, 9.015F, 22.985F, 7.0F, 20.5F, 7.0F)
          horizontalLineToRelative(-14.0F)
          close()        
      }
    }
    return _squareMultiple32!!
  }

private var _squareMultiple32: ImageVector? = null
