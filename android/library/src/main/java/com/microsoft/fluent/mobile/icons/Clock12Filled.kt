package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clock12: ImageVector
  get() {
    if (_clock12 != null) {
      return _clock12!!
    }
    _clock12 = fluentIcon(name = "Filled.Clock12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveTo(5.5F, 3.5F)
          curveTo(5.224F, 3.5F, 5.0F, 3.724F, 5.0F, 4.0F)
          verticalLineToRelative(2.5F)
          curveTo(5.0F, 6.776F, 5.224F, 7.0F, 5.5F, 7.0F)
          horizontalLineToRelative(2.0F)
          curveTo(7.776F, 7.0F, 8.0F, 6.776F, 8.0F, 6.5F)
          reflectiveCurveTo(7.776F, 6.0F, 7.5F, 6.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _clock12!!
  }

private var _clock12: ImageVector? = null
