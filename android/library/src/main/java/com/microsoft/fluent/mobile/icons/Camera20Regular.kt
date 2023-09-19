package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Camera20: ImageVector
  get() {
    if (_camera20 != null) {
      return _camera20!!
    }
    _camera20 = fluentIcon(name = "Regular.Camera20", 20f) {
      materialPath {
          moveTo(10.0F, 6.0F)
          curveToRelative(-2.209F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.791F, 4.0F, 4.0F, 4.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(-3.0F, 4.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveToRelative(1.124F, -8.0F)
          curveToRelative(-0.567F, 0.0F, -1.086F, 0.32F, -1.34F, 0.826F)
          lineTo(6.194F, 4.0F)
          horizontalLineToRelative(-1.69F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.382F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -1.381F, -1.118F, -2.5F, -2.5F, -2.5F)
          horizontalLineToRelative(-1.69F)
          lineTo(13.23F, 2.83F)
          curveTo(12.976F, 2.32F, 12.456F, 2.0F, 11.888F, 2.0F)
          horizontalLineTo(8.124F)
          close()
          moveTo(7.677F, 3.276F)
          curveTo(7.762F, 3.106F, 7.935F, 3.0F, 8.124F, 3.0F)
          horizontalLineToRelative(3.764F)
          curveToRelative(0.19F, 0.0F, 0.363F, 0.107F, 0.448F, 0.276F)
          lineToRelative(0.723F, 1.447F)
          curveToRelative(0.084F, 0.17F, 0.258F, 0.276F, 0.447F, 0.276F)
          horizontalLineToRelative(1.999F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.829F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -0.829F, 0.671F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(1.998F)
          curveToRelative(0.189F, 0.0F, 0.362F, -0.107F, 0.446F, -0.276F)
          lineToRelative(0.728F, -1.449F)
          close()        
      }
    }
    return _camera20!!
  }

private var _camera20: ImageVector? = null
