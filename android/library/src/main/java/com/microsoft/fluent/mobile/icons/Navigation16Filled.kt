package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Navigation16: ImageVector
  get() {
    if (_navigation16 != null) {
      return _navigation16!!
    }
    _navigation16 = fluentIcon(name = "Filled.Navigation16", 16f) {
      materialPath {
          moveTo(2.0F, 3.75F)
          curveTo(2.0F, 3.336F, 2.336F, 3.0F, 2.75F, 3.0F)
          horizontalLineToRelative(10.5F)
          curveTo(13.664F, 3.0F, 14.0F, 3.336F, 14.0F, 3.75F)
          reflectiveCurveTo(13.664F, 4.5F, 13.25F, 4.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 4.5F, 2.0F, 4.164F, 2.0F, 3.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(2.0F, 7.336F, 2.336F, 7.0F, 2.75F, 7.0F)
          horizontalLineToRelative(10.5F)
          curveTo(13.664F, 7.0F, 14.0F, 7.336F, 14.0F, 7.75F)
          reflectiveCurveTo(13.664F, 8.5F, 13.25F, 8.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 8.5F, 2.0F, 8.164F, 2.0F, 7.75F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(2.0F, 11.336F, 2.336F, 11.0F, 2.75F, 11.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 12.5F, 2.0F, 12.164F, 2.0F, 11.75F)
          close()        
      }
    }
    return _navigation16!!
  }

private var _navigation16: ImageVector? = null
