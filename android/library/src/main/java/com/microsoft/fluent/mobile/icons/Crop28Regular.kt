package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Crop28: ImageVector
  get() {
    if (_crop28 != null) {
      return _crop28!!
    }
    _crop28 = fluentIcon(name = "Regular.Crop28", 28f) {
      materialPath {
          moveTo(8.0F, 2.75F)
          curveTo(8.0F, 2.336F, 7.664F, 2.0F, 7.25F, 2.0F)
          reflectiveCurveTo(6.5F, 2.336F, 6.5F, 2.75F)
          verticalLineTo(6.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 6.5F, 2.0F, 6.836F, 2.0F, 7.25F)
          reflectiveCurveTo(2.336F, 8.0F, 2.75F, 8.0F)
          horizontalLineTo(6.5F)
          verticalLineToRelative(9.75F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineTo(20.0F)
          verticalLineToRelative(3.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(21.5F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(25.664F, 20.0F, 25.25F, 20.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(9.007F, 20.0F, 8.0F, 18.993F, 8.0F, 17.75F)
          verticalLineToRelative(-15.0F)
          close()
          moveToRelative(12.0F, 7.5F)
          verticalLineTo(19.0F)
          horizontalLineToRelative(1.5F)
          verticalLineToRelative(-8.75F)
          curveToRelative(0.0F, -2.071F, -1.679F, -3.75F, -3.75F, -3.75F)
          horizontalLineTo(9.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(8.75F)
          curveTo(18.993F, 8.0F, 20.0F, 9.007F, 20.0F, 10.25F)
          close()        
      }
    }
    return _crop28!!
  }

private var _crop28: ImageVector? = null
