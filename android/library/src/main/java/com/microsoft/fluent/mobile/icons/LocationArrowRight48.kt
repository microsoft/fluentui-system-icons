package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrowRight48: ImageVector
  get() {
    if (_locationArrowRight48 != null) {
      return _locationArrowRight48!!
    }
    _locationArrowRight48 = fluentIcon(name = "Filled.LocationArrowRight48", 48f) {
      materialPath {
          moveTo(37.0F, 32.0F)
          lineTo(26.912F, 42.71F)
          curveToRelative(-1.58F, 1.676F, -4.244F, 1.676F, -5.824F, 0.0F)
          lineTo(11.0F, 32.0F)
          horizontalLineToRelative(0.038F)
          lineToRelative(-0.017F, -0.02F)
          lineTo(11.0F, 31.955F)
          curveToRelative(-0.644F, -0.764F, -1.222F, -1.585F, -1.726F, -2.455F)
          curveTo(7.828F, 27.0F, 7.0F, 24.096F, 7.0F, 21.0F)
          curveToRelative(0.0F, -9.389F, 7.611F, -17.0F, 17.0F, -17.0F)
          reflectiveCurveToRelative(17.0F, 7.611F, 17.0F, 17.0F)
          curveToRelative(0.0F, 3.096F, -0.828F, 6.0F, -2.274F, 8.5F)
          curveToRelative(-0.504F, 0.87F, -1.082F, 1.691F, -1.726F, 2.455F)
          lineToRelative(-0.021F, 0.025F)
          lineTo(36.962F, 32.0F)
          horizontalLineTo(37.0F)
          close()
          moveTo(25.116F, 16.884F)
          lineToRelative(2.866F, 2.866F)
          horizontalLineTo(17.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(10.982F)
          lineToRelative(-2.866F, 2.866F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(1.28F, 0.488F, 1.768F, 0.0F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-5.0F, -5.0F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          close()        
      }
    }
    return _locationArrowRight48!!
  }

private var _locationArrowRight48: ImageVector? = null
