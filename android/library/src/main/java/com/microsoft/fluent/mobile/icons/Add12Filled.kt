package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Add12: ImageVector
  get() {
    if (_add12 != null) {
      return _add12!!
    }
    _add12 = fluentIcon(name = "Filled.Add12", 12f) {
      materialPath {
          moveTo(6.5F, 1.75F)
          curveTo(6.5F, 1.336F, 6.164F, 1.0F, 5.75F, 1.0F)
          reflectiveCurveTo(5.0F, 1.336F, 5.0F, 1.75F)
          verticalLineTo(5.0F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 5.0F, 1.0F, 5.336F, 1.0F, 5.75F)
          reflectiveCurveTo(1.336F, 6.5F, 1.75F, 6.5F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(3.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(6.5F, 10.164F, 6.5F, 9.75F)
          verticalLineTo(6.5F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(10.164F, 5.0F, 9.75F, 5.0F)
          horizontalLineTo(6.5F)
          verticalLineTo(1.75F)
          close()        
      }
    }
    return _add12!!
  }

private var _add12: ImageVector? = null
