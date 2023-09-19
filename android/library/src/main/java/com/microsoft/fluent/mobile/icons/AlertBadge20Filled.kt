package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlertBadge20: ImageVector
  get() {
    if (_alertBadge20 != null) {
      return _alertBadge20!!
    }
    _alertBadge20 = fluentIcon(name = "Filled.AlertBadge20", 20f) {
      materialPath {
          moveTo(12.45F, 16.002F)
          curveTo(12.218F, 17.142F, 11.21F, 18.0F, 10.0F, 18.0F)
          curveToRelative(-1.209F, 0.0F, -2.217F, -0.858F, -2.45F, -1.998F)
          horizontalLineToRelative(4.9F)
          close()
          moveTo(9.998F, 2.0F)
          curveToRelative(1.09F, 0.0F, 2.113F, 0.28F, 2.995F, 0.77F)
          curveTo(12.383F, 3.32F, 12.0F, 4.115F, 12.0F, 5.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          curveToRelative(0.35F, 0.0F, 0.687F, -0.06F, 1.0F, -0.17F)
          verticalLineToRelative(3.578F)
          lineToRelative(0.953F, 2.587F)
          lineToRelative(0.026F, 0.085F)
          lineToRelative(0.015F, 0.086F)
          lineToRelative(0.005F, 0.089F)
          curveToRelative(0.0F, 0.315F, -0.195F, 0.59F, -0.522F, 0.707F)
          lineToRelative(-0.113F, 0.033F)
          lineToRelative(-0.115F, 0.01F)
          horizontalLineTo(3.752F)
          curveToRelative(-0.089F, 0.0F, -0.177F, -0.016F, -0.26F, -0.047F)
          curveToRelative(-0.287F, -0.105F, -0.475F, -0.372F, -0.482F, -0.716F)
          lineToRelative(0.004F, -0.117F)
          lineToRelative(0.034F, -0.13F)
          lineToRelative(0.951F, -2.584F)
          lineTo(4.0F, 7.793F)
          lineToRelative(0.005F, -0.225F)
          curveTo(4.127F, 4.451F, 6.77F, 2.0F, 9.998F, 2.0F)
          close()
          moveTo(15.0F, 7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _alertBadge20!!
  }

private var _alertBadge20: ImageVector? = null
