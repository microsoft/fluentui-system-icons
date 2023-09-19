package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCircleRight24: ImageVector
  get() {
    if (_arrowCircleRight24 != null) {
      return _arrowCircleRight24!!
    }
    _arrowCircleRight24 = fluentIcon(name = "Regular.ArrowCircleRight24", 24f) {
      materialPath {
          moveTo(12.001F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveToRelative(-10.0F, -4.477F, -10.0F, -10.0F)
          reflectiveCurveToRelative(4.477F, -10.0F, 10.0F, -10.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          close()
          moveToRelative(-0.353F, 4.053F)
          lineToRelative(0.073F, -0.084F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineToRelative(0.084F, 0.073F)
          lineToRelative(4.001F, 4.0F)
          curveToRelative(0.266F, 0.267F, 0.29F, 0.684F, 0.073F, 0.977F)
          lineToRelative(-0.073F, 0.085F)
          lineToRelative(-4.002F, 4.0F)
          curveToRelative(-0.292F, 0.292F, -0.767F, 0.292F, -1.06F, 0.0F)
          curveToRelative(-0.266F, -0.267F, -0.29F, -0.684F, -0.073F, -0.977F)
          lineToRelative(0.073F, -0.084F)
          lineToRelative(2.722F, -2.721F)
          horizontalLineTo(7.75F)
          curveToRelative(-0.38F, 0.0F, -0.693F, -0.282F, -0.743F, -0.648F)
          lineTo(7.0F, 12.0F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.649F, -0.743F)
          lineTo(7.75F, 11.25F)
          horizontalLineToRelative(6.69F)
          lineToRelative(-2.72F, -2.72F)
          curveToRelative(-0.266F, -0.266F, -0.29F, -0.682F, -0.072F, -0.976F)
          lineToRelative(0.073F, -0.084F)
          lineToRelative(-0.073F, 0.084F)
          close()        
      }
    }
    return _arrowCircleRight24!!
  }

private var _arrowCircleRight24: ImageVector? = null
