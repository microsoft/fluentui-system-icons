package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.List24: ImageVector
  get() {
    if (_list24 != null) {
      return _list24!!
    }
    _list24 = fluentIcon(name = "Regular.List24", 24f) {
      materialPath {
          moveTo(2.0F, 5.75F)
          curveTo(2.0F, 5.336F, 2.336F, 5.0F, 2.75F, 5.0F)
          horizontalLineToRelative(15.5F)
          curveTo(18.664F, 5.0F, 19.0F, 5.336F, 19.0F, 5.75F)
          reflectiveCurveTo(18.664F, 6.5F, 18.25F, 6.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 6.5F, 2.0F, 6.164F, 2.0F, 5.75F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveTo(2.0F, 17.336F, 2.336F, 17.0F, 2.75F, 17.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 18.5F, 2.0F, 18.164F, 2.0F, 17.75F)
          close()
          moveTo(2.75F, 11.0F)
          curveTo(2.336F, 11.0F, 2.0F, 11.336F, 2.0F, 11.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(18.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(21.664F, 11.0F, 21.25F, 11.0F)
          horizontalLineTo(2.75F)
          close()        
      }
    }
    return _list24!!
  }

private var _list24: ImageVector? = null
