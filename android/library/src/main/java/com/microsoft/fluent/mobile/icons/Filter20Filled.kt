package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Filter20: ImageVector
  get() {
    if (_filter20 != null) {
      return _filter20!!
    }
    _filter20 = fluentIcon(name = "Filled.Filter20", 20f) {
      materialPath {
          moveTo(12.25F, 13.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(12.664F, 15.0F, 12.25F, 15.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(7.336F, 15.0F, 7.0F, 14.664F, 7.0F, 14.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(4.5F)
          close()
          moveToRelative(2.0F, -4.25F)
          curveTo(14.664F, 9.25F, 15.0F, 9.586F, 15.0F, 10.0F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(5.336F, 10.75F, 5.0F, 10.414F, 5.0F, 10.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(8.5F)
          close()
          moveToRelative(2.0F, -4.25F)
          curveTo(16.664F, 5.0F, 17.0F, 5.336F, 17.0F, 5.75F)
          reflectiveCurveTo(16.664F, 6.5F, 16.25F, 6.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 6.5F, 3.0F, 6.164F, 3.0F, 5.75F)
          reflectiveCurveTo(3.336F, 5.0F, 3.75F, 5.0F)
          horizontalLineToRelative(12.5F)
          close()        
      }
    }
    return _filter20!!
  }

private var _filter20: ImageVector? = null
