package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Add16: ImageVector
  get() {
    if (_add16 != null) {
      return _add16!!
    }
    _add16 = fluentIcon(name = "Filled.Add16", 16f) {
      materialPath {
          moveTo(8.5F, 2.75F)
          curveTo(8.5F, 2.336F, 8.164F, 2.0F, 7.75F, 2.0F)
          reflectiveCurveTo(7.0F, 2.336F, 7.0F, 2.75F)
          verticalLineTo(7.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 7.0F, 2.0F, 7.336F, 2.0F, 7.75F)
          reflectiveCurveTo(2.336F, 8.5F, 2.75F, 8.5F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(4.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.164F, 7.0F, 12.75F, 7.0F)
          horizontalLineTo(8.5F)
          verticalLineTo(2.75F)
          close()        
      }
    }
    return _add16!!
  }

private var _add16: ImageVector? = null
