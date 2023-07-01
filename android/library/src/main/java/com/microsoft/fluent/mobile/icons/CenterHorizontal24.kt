package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CenterHorizontal24: ImageVector
  get() {
    if (_centerHorizontal24 != null) {
      return _centerHorizontal24!!
    }
    _centerHorizontal24 = fluentIcon(name = "Filled.CenterHorizontal24", 24f) {
      materialPath {
          moveTo(3.75F, 3.0F)
          curveTo(4.164F, 3.0F, 4.5F, 3.336F, 4.5F, 3.75F)
          verticalLineToRelative(16.5F)
          curveTo(4.5F, 20.664F, 4.164F, 21.0F, 3.75F, 21.0F)
          reflectiveCurveTo(3.0F, 20.664F, 3.0F, 20.25F)
          verticalLineTo(3.75F)
          curveTo(3.0F, 3.336F, 3.336F, 3.0F, 3.75F, 3.0F)
          close()
          moveToRelative(16.5F, 0.0F)
          curveTo(20.664F, 3.0F, 21.0F, 3.336F, 21.0F, 3.75F)
          verticalLineToRelative(16.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(3.75F)
          curveTo(19.5F, 3.336F, 19.836F, 3.0F, 20.25F, 3.0F)
          close()
          moveToRelative(-10.0F, 2.0F)
          curveTo(9.007F, 5.0F, 8.0F, 6.007F, 8.0F, 7.25F)
          verticalLineToRelative(9.5F)
          curveTo(8.0F, 17.993F, 9.007F, 19.0F, 10.25F, 19.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-9.5F)
          curveTo(16.0F, 6.007F, 14.993F, 5.0F, 13.75F, 5.0F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _centerHorizontal24!!
  }

private var _centerHorizontal24: ImageVector? = null
