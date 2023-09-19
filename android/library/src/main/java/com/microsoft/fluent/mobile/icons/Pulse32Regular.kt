package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pulse32: ImageVector
  get() {
    if (_pulse32 != null) {
      return _pulse32!!
    }
    _pulse32 = fluentIcon(name = "Regular.Pulse32", 32f) {
      materialPath {
          moveTo(11.52F, 5.0F)
          curveToRelative(0.443F, 0.009F, 0.827F, 0.308F, 0.944F, 0.735F)
          lineToRelative(4.578F, 16.646F)
          lineToRelative(3.5F, -11.668F)
          curveToRelative(0.122F, -0.405F, 0.484F, -0.69F, 0.906F, -0.712F)
          curveToRelative(0.422F, -0.021F, 0.813F, 0.224F, 0.975F, 0.614F)
          lineTo(24.667F, 16.0F)
          horizontalLineTo(28.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.404F, 0.0F, -0.768F, -0.243F, -0.923F, -0.615F)
          lineToRelative(-1.424F, -3.417F)
          lineToRelative(-3.695F, 12.32F)
          curveToRelative(-0.128F, 0.426F, -0.524F, 0.717F, -0.97F, 0.712F)
          curveToRelative(-0.445F, -0.005F, -0.834F, -0.305F, -0.952F, -0.735F)
          lineTo(11.43F, 9.517F)
          lineToRelative(-2.477F, 7.786F)
          curveTo(8.82F, 17.718F, 8.435F, 18.0F, 8.0F, 18.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.269F)
          lineToRelative(3.278F, -10.303F)
          curveTo(10.681F, 5.275F, 11.077F, 4.99F, 11.52F, 5.0F)
          close()        
      }
    }
    return _pulse32!!
  }

private var _pulse32: ImageVector? = null
