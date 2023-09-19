package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Add28: ImageVector
  get() {
    if (_add28 != null) {
      return _add28!!
    }
    _add28 = fluentIcon(name = "Regular.Add28", 28f) {
      materialPath {
          moveTo(14.5F, 13.0F)
          verticalLineTo(3.754F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(13.0F, 3.34F, 13.0F, 3.754F)
          verticalLineTo(13.0F)
          horizontalLineTo(3.754F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(9.253F)
          curveToRelative(0.0F, 0.413F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.337F, 0.75F, -0.75F)
          verticalLineTo(14.5F)
          lineToRelative(9.25F, 0.003F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          lineTo(14.5F, 13.0F)
          close()        
      }
    }
    return _add28!!
  }

private var _add28: ImageVector? = null
