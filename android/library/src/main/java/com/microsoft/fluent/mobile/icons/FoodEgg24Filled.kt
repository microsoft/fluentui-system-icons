package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FoodEgg24: ImageVector
  get() {
    if (_foodEgg24 != null) {
      return _foodEgg24!!
    }
    _foodEgg24 = fluentIcon(name = "Filled.FoodEgg24", 24f) {
      materialPath {
          moveTo(11.5F, 12.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(13.0F, 11.164F, 13.0F, 10.75F)
          reflectiveCurveTo(12.664F, 10.0F, 12.25F, 10.0F)
          curveTo(11.007F, 10.0F, 10.0F, 11.007F, 10.0F, 12.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          close()
          moveTo(13.5F, 2.0F)
          curveToRelative(-3.117F, 0.0F, -5.812F, 1.825F, -7.285F, 4.494F)
          curveToRelative(-0.24F, 0.435F, -0.609F, 0.813F, -1.056F, 1.115F)
          curveTo(3.25F, 8.9F, 2.0F, 11.18F, 2.0F, 13.75F)
          curveTo(2.0F, 17.696F, 4.967F, 21.0F, 8.75F, 21.0F)
          curveToRelative(0.324F, 0.0F, 0.643F, -0.024F, 0.955F, -0.072F)
          curveToRelative(0.87F, -0.132F, 1.792F, 0.0F, 2.567F, 0.38F)
          curveTo(13.17F, 21.753F, 14.182F, 22.0F, 15.25F, 22.0F)
          curveToRelative(3.728F, 0.0F, 6.75F, -3.022F, 6.75F, -6.75F)
          curveToRelative(0.0F, -0.42F, -0.038F, -0.832F, -0.112F, -1.232F)
          curveToRelative(-0.07F, -0.373F, -0.08F, -0.739F, -0.024F, -1.082F)
          curveToRelative(0.09F, -0.54F, 0.136F, -1.095F, 0.136F, -1.661F)
          curveTo(22.0F, 6.221F, 18.26F, 2.0F, 13.5F, 2.0F)
          close()
          moveToRelative(3.75F, 10.5F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          reflectiveCurveToRelative(-4.75F, -2.127F, -4.75F, -4.75F)
          reflectiveCurveToRelative(2.127F, -4.75F, 4.75F, -4.75F)
          reflectiveCurveToRelative(4.75F, 2.127F, 4.75F, 4.75F)
          close()        
      }
    }
    return _foodEgg24!!
  }

private var _foodEgg24: ImageVector? = null
