package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SquareMultiple32: ImageVector
  get() {
    if (_squareMultiple32 != null) {
      return _squareMultiple32!!
    }
    _squareMultiple32 = fluentIcon(name = "Regular.SquareMultiple32", 32f) {
      materialPath {
          moveTo(10.208F, 5.5F)
          horizontalLineTo(8.11F)
          curveTo(8.566F, 3.496F, 10.358F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(11.0F)
          curveTo(27.09F, 2.0F, 30.0F, 4.91F, 30.0F, 8.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 2.142F, -1.497F, 3.935F, -3.502F, 4.389F)
          verticalLineToRelative(-2.096F)
          curveTo(27.382F, 21.407F, 28.0F, 20.526F, 28.0F, 19.5F)
          verticalLineToRelative(-11.0F)
          curveTo(28.0F, 6.015F, 25.985F, 4.0F, 23.5F, 4.0F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-1.025F, 0.0F, -1.906F, 0.617F, -2.292F, 1.5F)
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
          moveTo(4.0F, 11.5F)
          curveTo(4.0F, 10.12F, 5.12F, 9.0F, 6.5F, 9.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-14.0F)
          curveTo(5.12F, 28.0F, 4.0F, 26.88F, 4.0F, 25.5F)
          verticalLineToRelative(-14.0F)
          close()        
      }
    }
    return _squareMultiple32!!
  }

private var _squareMultiple32: ImageVector? = null
