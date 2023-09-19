package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShoppingBag16: ImageVector
  get() {
    if (_shoppingBag16 != null) {
      return _shoppingBag16!!
    }
    _shoppingBag16 = fluentIcon(name = "Filled.ShoppingBag16", 16f) {
      materialPath {
          moveTo(5.0F, 5.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          curveToRelative(0.364F, 0.0F, 0.706F, 0.097F, 1.0F, 0.268F)
          curveTo(8.294F, 1.098F, 8.636F, 1.0F, 9.0F, 1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(0.5F)
          curveTo(12.328F, 5.0F, 13.0F, 5.672F, 13.0F, 6.5F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 1.014F, -0.754F, 1.851F, -1.732F, 1.982F)
          curveTo(10.55F, 14.871F, 10.0F, 14.25F, 10.0F, 13.5F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.086F, 0.0F, -0.17F, 0.01F, -0.25F, 0.031F)
          curveTo(8.91F, 2.318F, 9.0F, 2.65F, 9.0F, 3.0F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.563F, 0.186F, 1.082F, 0.5F, 1.5F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.5F)
          curveTo(3.0F, 5.672F, 3.672F, 5.0F, 4.5F, 5.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(1.0F, -2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveTo(6.0F, 2.448F, 6.0F, 3.0F)
          close()        
      }
    }
    return _shoppingBag16!!
  }

private var _shoppingBag16: ImageVector? = null
