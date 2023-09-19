package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCounterclockwise12: ImageVector
  get() {
    if (_arrowCounterclockwise12 != null) {
      return _arrowCounterclockwise12!!
    }
    _arrowCounterclockwise12 = fluentIcon(name = "Filled.ArrowCounterclockwise12", 12f) {
      materialPath {
          moveTo(1.5F, 2.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(3.0F, 1.586F, 3.0F, 2.0F)
          verticalLineToRelative(0.646F)
          curveTo(3.796F, 1.933F, 4.848F, 1.5F, 6.0F, 1.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          reflectiveCurveTo(8.485F, 10.5F, 6.0F, 10.5F)
          curveToRelative(-2.194F, 0.0F, -4.021F, -1.57F, -4.42F, -3.648F)
          curveTo(1.492F, 6.387F, 1.885F, 6.0F, 2.358F, 6.0F)
          curveToRelative(0.355F, 0.0F, 0.636F, 0.291F, 0.711F, 0.638F)
          curveTo(3.36F, 7.988F, 4.562F, 9.0F, 6.0F, 9.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveTo(7.657F, 3.0F, 6.0F, 3.0F)
          curveTo(5.383F, 3.0F, 4.81F, 3.186F, 4.334F, 3.505F)
          horizontalLineTo(4.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-2.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(2.0F)
          close()        
      }
    }
    return _arrowCounterclockwise12!!
  }

private var _arrowCounterclockwise12: ImageVector? = null
