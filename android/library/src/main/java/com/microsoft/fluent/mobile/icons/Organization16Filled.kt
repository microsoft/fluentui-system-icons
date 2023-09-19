package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Organization16: ImageVector
  get() {
    if (_organization16 != null) {
      return _organization16!!
    }
    _organization16 = fluentIcon(name = "Filled.Organization16", 16f) {
      materialPath {
          moveTo(5.5F, 3.5F)
          curveTo(5.5F, 2.12F, 6.62F, 1.0F, 8.0F, 1.0F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          curveToRelative(0.0F, 1.21F, -0.86F, 2.219F, -2.0F, 2.45F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(2.134F)
          curveTo(11.388F, 7.0F, 12.0F, 7.612F, 12.0F, 8.367F)
          verticalLineToRelative(1.683F)
          curveToRelative(1.141F, 0.232F, 2.0F, 1.24F, 2.0F, 2.45F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(9.0F, 13.88F, 9.0F, 12.5F)
          curveToRelative(0.0F, -1.21F, 0.859F, -2.219F, 2.0F, -2.45F)
          verticalLineTo(8.366F)
          curveTo(11.0F, 8.165F, 10.836F, 8.0F, 10.634F, 8.0F)
          horizontalLineTo(5.367F)
          curveTo(5.164F, 8.0F, 5.0F, 8.164F, 5.0F, 8.367F)
          verticalLineToRelative(1.683F)
          curveToRelative(1.141F, 0.232F, 2.0F, 1.24F, 2.0F, 2.45F)
          curveTo(7.0F, 13.88F, 5.88F, 15.0F, 4.5F, 15.0F)
          reflectiveCurveTo(2.0F, 13.88F, 2.0F, 12.5F)
          curveToRelative(0.0F, -1.21F, 0.859F, -2.219F, 2.0F, -2.45F)
          verticalLineTo(8.366F)
          curveTo(4.0F, 7.613F, 4.612F, 7.0F, 5.367F, 7.0F)
          horizontalLineTo(7.5F)
          verticalLineTo(5.95F)
          curveToRelative(-1.141F, -0.232F, -2.0F, -1.24F, -2.0F, -2.45F)
          close()        
      }
    }
    return _organization16!!
  }

private var _organization16: ImageVector? = null
