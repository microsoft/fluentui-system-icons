package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Filter28: ImageVector
  get() {
    if (_filter28 != null) {
      return _filter28!!
    }
    _filter28 = fluentIcon(name = "Regular.Filter28", 28f) {
      materialPath {
          moveTo(17.25F, 19.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(10.336F, 19.0F, 10.75F, 19.0F)
          horizontalLineToRelative(6.5F)
          close()
          moveToRelative(4.0F, -6.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 14.5F, 6.0F, 14.164F, 6.0F, 13.75F)
          reflectiveCurveTo(6.336F, 13.0F, 6.75F, 13.0F)
          horizontalLineToRelative(14.5F)
          close()
          moveToRelative(3.0F, -6.0F)
          curveTo(24.664F, 7.0F, 25.0F, 7.336F, 25.0F, 7.75F)
          reflectiveCurveTo(24.664F, 8.5F, 24.25F, 8.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 8.5F, 3.0F, 8.164F, 3.0F, 7.75F)
          reflectiveCurveTo(3.336F, 7.0F, 3.75F, 7.0F)
          horizontalLineToRelative(20.5F)
          close()        
      }
    }
    return _filter28!!
  }

private var _filter28: ImageVector? = null
