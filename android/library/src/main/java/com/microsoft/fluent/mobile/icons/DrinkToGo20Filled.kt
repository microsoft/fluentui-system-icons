package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DrinkToGo20: ImageVector
  get() {
    if (_drinkToGo20 != null) {
      return _drinkToGo20!!
    }
    _drinkToGo20 = fluentIcon(name = "Filled.DrinkToGo20", 20f) {
      materialPath {
          moveTo(13.853F, 2.147F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(12.706F, 4.0F)
          horizontalLineToRelative(1.624F)
          curveToRelative(0.314F, 0.0F, 0.595F, 0.196F, 0.704F, 0.492F)
          lineToRelative(0.917F, 2.5F)
          curveTo(16.131F, 7.48F, 15.77F, 8.0F, 15.247F, 8.0F)
          horizontalLineToRelative(-0.339F)
          lineToRelative(-1.425F, 8.337F)
          curveTo(13.319F, 17.297F, 12.486F, 18.0F, 11.512F, 18.0F)
          horizontalLineTo(8.487F)
          curveToRelative(-0.975F, 0.0F, -1.807F, -0.702F, -1.972F, -1.663F)
          lineTo(5.09F, 8.0F)
          horizontalLineTo(4.75F)
          curveTo(4.23F, 8.0F, 3.867F, 7.48F, 4.048F, 6.99F)
          lineToRelative(0.923F, -2.5F)
          curveTo(5.079F, 4.196F, 5.36F, 4.0F, 5.674F, 4.0F)
          horizontalLineToRelative(5.642F)
          curveToRelative(0.022F, -0.037F, 0.048F, -0.072F, 0.08F, -0.103F)
          lineToRelative(1.75F, -1.75F)
          curveToRelative(0.195F, -0.196F, 0.512F, -0.196F, 0.707F, 0.0F)
          close()
          moveTo(5.109F, 7.0F)
          horizontalLineToRelative(9.78F)
          lineToRelative(-0.734F, -2.0F)
          horizontalLineTo(5.848F)
          lineTo(5.109F, 7.0F)
          close()        
      }
    }
    return _drinkToGo20!!
  }

private var _drinkToGo20: ImageVector? = null
