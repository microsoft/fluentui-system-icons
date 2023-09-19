package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PositionForward20: ImageVector
  get() {
    if (_positionForward20 != null) {
      return _positionForward20!!
    }
    _positionForward20 = fluentIcon(name = "Filled.PositionForward20", 20f) {
      materialPath {
          moveTo(7.0F, 14.0F)
          verticalLineToRelative(1.5F)
          curveTo(7.0F, 16.88F, 8.12F, 18.0F, 9.5F, 18.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-6.0F)
          curveTo(18.0F, 8.12F, 16.88F, 7.0F, 15.5F, 7.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.5F)
          curveTo(16.328F, 8.0F, 17.0F, 8.672F, 17.0F, 9.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(8.672F, 17.0F, 8.0F, 16.328F, 8.0F, 15.5F)
          verticalLineTo(14.0F)
          horizontalLineTo(7.0F)
          close()
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveTo(11.88F, 2.0F, 13.0F, 3.12F, 13.0F, 4.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(3.12F, 13.0F, 2.0F, 11.88F, 2.0F, 10.5F)
          verticalLineToRelative(-6.0F)
          close()        
      }
    }
    return _positionForward20!!
  }

private var _positionForward20: ImageVector? = null
