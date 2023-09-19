package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShoppingBag24: ImageVector
  get() {
    if (_shoppingBag24 != null) {
      return _shoppingBag24!!
    }
    _shoppingBag24 = fluentIcon(name = "Filled.ShoppingBag24", 24f) {
      materialPath {
          moveTo(7.0F, 7.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(0.768F, 0.0F, 1.47F, 0.289F, 2.0F, 0.764F)
          curveTo(12.53F, 2.289F, 13.232F, 2.0F, 14.0F, 2.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(1.5F)
          curveTo(19.328F, 7.0F, 20.0F, 7.672F, 20.0F, 8.5F)
          verticalLineTo(18.0F)
          curveToRelative(0.0F, 1.407F, -0.726F, 2.644F, -1.825F, 3.357F)
          lineToRelative(-0.545F, -0.096F)
          curveToRelative(-0.775F, -0.136F, -1.574F, -0.563F, -2.175F, -1.172F)
          curveTo(14.855F, 19.48F, 14.5F, 18.743F, 14.5F, 18.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          curveToRelative(-0.465F, 0.0F, -0.88F, 0.212F, -1.156F, 0.544F)
          curveTo(12.945F, 4.344F, 13.0F, 4.666F, 13.0F, 5.0F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 1.229F, 0.582F, 2.326F, 1.387F, 3.142F)
          curveToRelative(0.322F, 0.326F, 0.687F, 0.616F, 1.08F, 0.858F)
          horizontalLineTo(8.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          verticalLineTo(8.5F)
          curveTo(4.0F, 7.672F, 4.672F, 7.0F, 5.5F, 7.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(1.5F, -2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveTo(8.5F, 4.172F, 8.5F, 5.0F)
          close()        
      }
    }
    return _shoppingBag24!!
  }

private var _shoppingBag24: ImageVector? = null
