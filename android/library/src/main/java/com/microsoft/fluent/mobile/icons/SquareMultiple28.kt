package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SquareMultiple28: ImageVector
  get() {
    if (_squareMultiple28 != null) {
      return _squareMultiple28!!
    }
    _squareMultiple28 = fluentIcon(name = "Filled.SquareMultiple28", 28f) {
      materialPath {
          moveTo(7.066F, 5.0F)
          horizontalLineTo(8.62F)
          curveToRelative(0.31F, -0.874F, 1.143F, -1.5F, 2.122F, -1.5F)
          horizontalLineToRelative(9.5F)
          curveToRelative(2.348F, 0.0F, 4.25F, 1.903F, 4.25F, 4.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.976F, -0.62F, 1.807F, -1.49F, 2.118F)
          verticalLineToRelative(1.555F)
          curveToRelative(1.707F, -0.351F, 2.99F, -1.862F, 2.99F, -3.673F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -3.176F, -2.574F, -5.75F, -5.75F, -5.75F)
          horizontalLineToRelative(-9.5F)
          curveTo(8.927F, 2.0F, 7.414F, 3.288F, 7.066F, 5.0F)
          close()
          moveTo(5.75F, 6.0F)
          curveTo(3.679F, 6.0F, 2.0F, 7.679F, 2.0F, 9.75F)
          verticalLineToRelative(12.5F)
          curveTo(2.0F, 24.321F, 3.679F, 26.0F, 5.75F, 26.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(9.75F)
          curveTo(22.0F, 7.679F, 20.321F, 6.0F, 18.25F, 6.0F)
          horizontalLineTo(5.75F)
          close()        
      }
    }
    return _squareMultiple28!!
  }

private var _squareMultiple28: ImageVector? = null
