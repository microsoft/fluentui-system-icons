package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Crop20: ImageVector
  get() {
    if (_crop20 != null) {
      return _crop20!!
    }
    _crop20 = fluentIcon(name = "Filled.Crop20", 20f) {
      materialPath {
          moveTo(6.0F, 2.75F)
          curveTo(6.0F, 2.336F, 5.664F, 2.0F, 5.25F, 2.0F)
          reflectiveCurveTo(4.5F, 2.336F, 4.5F, 2.75F)
          verticalLineTo(4.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 4.5F, 2.0F, 4.836F, 2.0F, 5.25F)
          reflectiveCurveTo(2.336F, 6.0F, 2.75F, 6.0F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(6.75F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(1.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(15.5F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.664F, 14.0F, 17.25F, 14.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(6.56F, 14.0F, 6.0F, 13.44F, 6.0F, 12.75F)
          verticalLineToRelative(-10.0F)
          close()
          moveToRelative(8.0F, 4.5F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(1.5F)
          verticalLineTo(7.25F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          horizontalLineTo(7.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(5.75F)
          curveTo(13.44F, 6.0F, 14.0F, 6.56F, 14.0F, 7.25F)
          close()        
      }
    }
    return _crop20!!
  }

private var _crop20: ImageVector? = null
