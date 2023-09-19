package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FoodCarrot24: ImageVector
  get() {
    if (_foodCarrot24 != null) {
      return _foodCarrot24!!
    }
    _foodCarrot24 = fluentIcon(name = "Regular.FoodCarrot24", 24f) {
      materialPath {
          moveTo(17.5F, 2.75F)
          curveTo(17.5F, 2.336F, 17.164F, 2.0F, 16.75F, 2.0F)
          reflectiveCurveTo(16.0F, 2.336F, 16.0F, 2.75F)
          verticalLineToRelative(4.013F)
          curveToRelative(-2.026F, -1.355F, -4.866F, -0.879F, -6.291F, 1.217F)
          lineTo(2.355F, 18.786F)
          curveToRelative(-0.556F, 0.818F, -0.45F, 1.91F, 0.255F, 2.608F)
          curveToRelative(0.715F, 0.707F, 1.84F, 0.804F, 2.667F, 0.23F)
          lineToRelative(10.79F, -7.469F)
          curveToRelative(2.056F, -1.424F, 2.51F, -4.178F, 1.176F, -6.155F)
          horizontalLineToRelative(4.007F)
          curveTo(21.664F, 8.0F, 22.0F, 7.664F, 22.0F, 7.25F)
          reflectiveCurveTo(21.664F, 6.5F, 21.25F, 6.5F)
          horizontalLineToRelative(-2.69F)
          lineToRelative(3.22F, -3.22F)
          curveToRelative(0.293F, -0.292F, 0.294F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.292F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(17.5F, 5.439F)
          verticalLineTo(2.75F)
          close()
          moveToRelative(-6.54F, 6.063F)
          curveToRelative(1.062F, -1.561F, 3.3F, -1.776F, 4.646F, -0.445F)
          curveToRelative(1.33F, 1.315F, 1.136F, 3.499F, -0.405F, 4.565F)
          lineToRelative(-10.789F, 7.47F)
          curveToRelative(-0.228F, 0.158F, -0.538F, 0.13F, -0.736F, -0.064F)
          curveToRelative(-0.194F, -0.192F, -0.223F, -0.494F, -0.07F, -0.72F)
          lineTo(10.96F, 8.813F)
          close()        
      }
    }
    return _foodCarrot24!!
  }

private var _foodCarrot24: ImageVector? = null
