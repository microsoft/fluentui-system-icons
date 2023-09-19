package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Add20: ImageVector
  get() {
    if (_add20 != null) {
      return _add20!!
    }
    _add20 = fluentIcon(name = "Filled.Add20", 20f) {
      materialPath {
          moveTo(10.5F, 2.75F)
          curveTo(10.5F, 2.336F, 10.164F, 2.0F, 9.75F, 2.0F)
          reflectiveCurveTo(9.0F, 2.336F, 9.0F, 2.75F)
          verticalLineTo(9.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 9.0F, 2.0F, 9.336F, 2.0F, 9.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(6.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(10.5F)
          horizontalLineToRelative(6.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.164F, 9.0F, 16.75F, 9.0F)
          horizontalLineTo(10.5F)
          verticalLineTo(2.75F)
          close()        
      }
    }
    return _add20!!
  }

private var _add20: ImageVector? = null
