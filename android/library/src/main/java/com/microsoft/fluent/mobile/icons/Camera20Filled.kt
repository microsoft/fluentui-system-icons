package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Camera20: ImageVector
  get() {
    if (_camera20 != null) {
      return _camera20!!
    }
    _camera20 = fluentIcon(name = "Filled.Camera20", 20f) {
      materialPath {
          moveTo(7.0F, 10.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveTo(6.784F, 2.826F)
          curveTo(7.039F, 2.32F, 7.557F, 2.0F, 8.124F, 2.0F)
          horizontalLineToRelative(3.764F)
          curveToRelative(0.569F, 0.0F, 1.088F, 0.321F, 1.342F, 0.83F)
          lineTo(13.815F, 4.0F)
          horizontalLineToRelative(1.69F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.119F, 2.5F, 2.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -1.381F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(1.69F)
          lineToRelative(0.589F, -1.174F)
          close()
          moveTo(10.0F, 6.0F)
          curveToRelative(-2.209F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.791F, 4.0F, 4.0F, 4.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()        
      }
    }
    return _camera20!!
  }

private var _camera20: ImageVector? = null
