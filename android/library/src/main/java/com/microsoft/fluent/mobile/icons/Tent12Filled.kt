package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tent12: ImageVector
  get() {
    if (_tent12 != null) {
      return _tent12!!
    }
    _tent12 = fluentIcon(name = "Filled.Tent12", 12f) {
      materialPath {
          moveTo(6.432F, 1.457F)
          curveToRelative(-0.095F, -0.114F, -0.235F, -0.18F, -0.384F, -0.18F)
          curveToRelative(-0.148F, 0.0F, -0.289F, 0.066F, -0.384F, 0.18F)
          curveToRelative(-0.727F, 0.873F, -2.18F, 1.924F, -3.017F, 2.391F)
          curveToRelative(-0.137F, 0.077F, -0.23F, 0.213F, -0.252F, 0.369F)
          lineTo(1.736F, 8.998F)
          horizontalLineTo(1.504F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(8.993F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(10.36F)
          lineTo(9.701F, 4.217F)
          curveTo(9.68F, 4.06F, 9.587F, 3.925F, 9.45F, 3.848F)
          curveTo(8.613F, 3.381F, 7.16F, 2.33F, 6.432F, 1.458F)
          close()
          moveTo(4.833F, 8.998F)
          curveTo(5.24F, 8.365F, 5.651F, 7.581F, 6.035F, 6.493F)
          curveTo(6.39F, 7.492F, 6.78F, 8.268F, 7.241F, 8.998F)
          horizontalLineTo(4.833F)
          close()        
      }
    }
    return _tent12!!
  }

private var _tent12: ImageVector? = null
