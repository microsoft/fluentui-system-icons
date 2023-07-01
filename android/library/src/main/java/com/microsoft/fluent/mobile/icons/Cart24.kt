package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cart24: ImageVector
  get() {
    if (_cart24 != null) {
      return _cart24!!
    }
    _cart24 = fluentIcon(name = "Filled.Cart24", 24f) {
      materialPath {
          moveTo(2.5F, 4.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(0.558F)
          curveToRelative(0.95F, 0.0F, 1.52F, 0.639F, 1.845F, 1.233F)
          curveTo(5.87F, 5.129F, 6.027F, 5.588F, 6.15F, 6.004F)
          curveTo(6.183F, 6.001F, 6.217F, 6.0F, 6.25F, 6.0F)
          horizontalLineToRelative(12.498F)
          curveToRelative(0.83F, 0.0F, 1.43F, 0.794F, 1.202F, 1.593F)
          lineToRelative(-1.828F, 6.409F)
          curveToRelative(-0.336F, 1.181F, -1.416F, 1.996F, -2.644F, 1.996F)
          horizontalLineTo(9.53F)
          curveToRelative(-1.239F, 0.0F, -2.324F, -0.828F, -2.652F, -2.022F)
          lineToRelative(-0.76F, -2.772F)
          lineToRelative(-1.26F, -4.248F)
          lineToRelative(-0.001F, -0.008F)
          curveTo(4.7F, 6.38F, 4.555F, 5.85F, 4.337F, 5.454F)
          curveTo(4.128F, 5.069F, 3.96F, 5.0F, 3.809F, 5.0F)
          horizontalLineTo(3.25F)
          curveTo(2.836F, 5.0F, 2.5F, 4.664F, 2.5F, 4.25F)
          close()
          moveTo(9.0F, 21.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _cart24!!
  }

private var _cart24: ImageVector? = null
