package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FoodCarrot24: ImageVector
  get() {
    if (_foodCarrot24 != null) {
      return _foodCarrot24!!
    }
    _foodCarrot24 = fluentIcon(name = "Filled.FoodCarrot24", 24f) {
      materialPath {
          moveTo(17.5F, 2.75F)
          curveTo(17.5F, 2.336F, 17.164F, 2.0F, 16.75F, 2.0F)
          reflectiveCurveTo(16.0F, 2.336F, 16.0F, 2.75F)
          verticalLineToRelative(4.015F)
          curveToRelative(-2.026F, -1.358F, -4.867F, -0.881F, -6.293F, 1.215F)
          lineTo(2.353F, 18.786F)
          curveToRelative(-0.556F, 0.818F, -0.45F, 1.91F, 0.255F, 2.608F)
          curveToRelative(0.715F, 0.707F, 1.84F, 0.804F, 2.667F, 0.23F)
          lineToRelative(10.79F, -7.469F)
          curveTo(18.12F, 12.731F, 18.574F, 9.977F, 17.24F, 8.0F)
          horizontalLineToRelative(4.009F)
          curveTo(21.664F, 8.0F, 22.0F, 7.664F, 22.0F, 7.25F)
          reflectiveCurveTo(21.664F, 6.5F, 21.25F, 6.5F)
          horizontalLineToRelative(-2.69F)
          lineToRelative(3.22F, -3.22F)
          curveToRelative(0.293F, -0.292F, 0.294F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.292F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(17.5F, 5.439F)
          verticalLineTo(2.75F)
          close()        
      }
    }
    return _foodCarrot24!!
  }

private var _foodCarrot24: ImageVector? = null
