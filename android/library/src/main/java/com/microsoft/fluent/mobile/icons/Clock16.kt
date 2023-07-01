package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clock16: ImageVector
  get() {
    if (_clock16 != null) {
      return _clock16!!
    }
    _clock16 = fluentIcon(name = "Filled.Clock16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveTo(7.502F, 5.0F)
          curveToRelative(-0.277F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.223F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(9.5F)
          curveTo(9.776F, 9.0F, 10.0F, 8.776F, 10.0F, 8.5F)
          reflectiveCurveTo(9.776F, 8.0F, 9.5F, 8.0F)
          horizontalLineTo(8.002F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _clock16!!
  }

private var _clock16: ImageVector? = null
