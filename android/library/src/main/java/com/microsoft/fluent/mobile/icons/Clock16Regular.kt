package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Clock16: ImageVector
  get() {
    if (_clock16 != null) {
      return _clock16!!
    }
    _clock16 = fluentIcon(name = "Regular.Clock16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(7.502F, 5.0F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(8.002F, 5.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(9.5F)
          curveTo(9.776F, 8.0F, 10.0F, 8.224F, 10.0F, 8.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(9.5F, 9.0F)
          horizontalLineTo(7.502F)
          curveTo(7.255F, 9.0F, 7.051F, 8.823F, 7.01F, 8.59F)
          lineTo(7.002F, 8.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.276F, 0.223F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _clock16!!
  }

private var _clock16: ImageVector? = null
