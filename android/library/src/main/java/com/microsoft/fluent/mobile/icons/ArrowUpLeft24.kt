package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpLeft24: ImageVector
  get() {
    if (_arrowUpLeft24 != null) {
      return _arrowUpLeft24!!
    }
    _arrowUpLeft24 = fluentIcon(name = "Regular.ArrowUpLeft24", 24f) {
      materialPath {
          moveTo(13.246F, 3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(13.66F, 4.5F, 13.246F, 4.5F)
          horizontalLineTo(5.577F)
          lineToRelative(15.2F, 15.2F)
          curveToRelative(0.298F, 0.298F, 0.298F, 0.782F, 0.0F, 1.081F)
          curveToRelative(-0.299F, 0.299F, -0.783F, 0.299F, -1.082F, 0.0F)
          lineTo(4.496F, 5.581F)
          verticalLineToRelative(7.669F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-9.5F)
          curveTo(2.996F, 3.336F, 3.332F, 3.0F, 3.746F, 3.0F)
          horizontalLineToRelative(9.5F)
          close()        
      }
    }
    return _arrowUpLeft24!!
  }

private var _arrowUpLeft24: ImageVector? = null
