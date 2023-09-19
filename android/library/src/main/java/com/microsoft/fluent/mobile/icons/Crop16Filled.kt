package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Crop16: ImageVector
  get() {
    if (_crop16 != null) {
      return _crop16!!
    }
    _crop16 = fluentIcon(name = "Filled.Crop16", 16f) {
      materialPath {
          moveTo(5.0F, 1.75F)
          curveTo(5.0F, 1.336F, 4.664F, 1.0F, 4.25F, 1.0F)
          reflectiveCurveTo(3.5F, 1.336F, 3.5F, 1.75F)
          verticalLineTo(3.5F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 3.5F, 1.0F, 3.836F, 1.0F, 4.25F)
          reflectiveCurveTo(1.336F, 5.0F, 1.75F, 5.0F)
          horizontalLineTo(3.5F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(1.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(12.5F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(14.664F, 11.0F, 14.25F, 11.0F)
          horizontalLineTo(6.5F)
          curveTo(5.672F, 11.0F, 5.0F, 10.328F, 5.0F, 9.5F)
          verticalLineTo(1.75F)
          close()
          moveToRelative(6.0F, 4.75F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(1.5F)
          verticalLineTo(6.5F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(3.5F)
          curveTo(10.328F, 5.0F, 11.0F, 5.672F, 11.0F, 6.5F)
          close()        
      }
    }
    return _crop16!!
  }

private var _crop16: ImageVector? = null
