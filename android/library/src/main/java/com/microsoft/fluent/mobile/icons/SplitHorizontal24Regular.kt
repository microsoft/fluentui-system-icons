package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SplitHorizontal24: ImageVector
  get() {
    if (_splitHorizontal24 != null) {
      return _splitHorizontal24!!
    }
    _splitHorizontal24 = fluentIcon(name = "Regular.SplitHorizontal24", 24f) {
      materialPath {
          moveTo(21.25F, 12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(21.664F, 11.0F, 21.25F, 11.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 11.0F, 2.0F, 11.336F, 2.0F, 11.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(18.5F)
          close()
          moveTo(20.0F, 4.25F)
          curveTo(20.0F, 3.007F, 18.993F, 2.0F, 17.75F, 2.0F)
          horizontalLineTo(6.25F)
          curveTo(5.007F, 2.0F, 4.0F, 3.007F, 4.0F, 4.25F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(1.5F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(10.0F)
          horizontalLineTo(20.0F)
          verticalLineTo(4.25F)
          close()
          moveToRelative(-14.5F, 15.0F)
          verticalLineTo(13.5F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(5.75F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(13.5F)
          horizontalLineToRelative(-1.5F)
          verticalLineToRelative(5.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _splitHorizontal24!!
  }

private var _splitHorizontal24: ImageVector? = null
