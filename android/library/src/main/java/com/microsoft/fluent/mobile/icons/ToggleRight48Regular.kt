package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ToggleRight48: ImageVector
  get() {
    if (_toggleRight48 != null) {
      return _toggleRight48!!
    }
    _toggleRight48 = fluentIcon(name = "Regular.ToggleRight48", 48f) {
      materialPath {
          moveTo(38.5F, 24.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveToRelative(-5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          close()
          moveToRelative(5.5F, 0.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          horizontalLineTo(14.0F)
          curveTo(8.477F, 14.0F, 4.0F, 18.477F, 4.0F, 24.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          horizontalLineToRelative(20.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          close()
          moveToRelative(-10.0F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          horizontalLineTo(14.0F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          horizontalLineToRelative(20.0F)
          close()        
      }
    }
    return _toggleRight48!!
  }

private var _toggleRight48: ImageVector? = null
