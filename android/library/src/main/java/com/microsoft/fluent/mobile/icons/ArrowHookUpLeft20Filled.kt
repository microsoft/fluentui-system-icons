package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookUpLeft20: ImageVector
  get() {
    if (_arrowHookUpLeft20 != null) {
      return _arrowHookUpLeft20!!
    }
    _arrowHookUpLeft20 = fluentIcon(name = "Filled.ArrowHookUpLeft20", 20f) {
      materialPath {
          moveTo(6.0F, 15.25F)
          curveTo(6.0F, 15.664F, 6.336F, 16.0F, 6.75F, 16.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.586F, 0.0F, 2.696F, -0.621F, 3.53F, -1.588F)
          curveTo(15.6F, 13.46F, 16.0F, 12.216F, 16.0F, 11.0F)
          curveToRelative(0.0F, -1.216F, -0.3F, -2.46F, -1.12F, -3.412F)
          curveTo(14.046F, 6.621F, 12.836F, 6.0F, 11.25F, 6.0F)
          horizontalLineTo(6.56F)
          lineToRelative(2.22F, -2.22F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveTo(4.076F, 6.364F, 3.996F, 6.56F, 4.0F, 6.764F)
          curveTo(4.004F, 6.968F, 4.09F, 7.16F, 4.24F, 7.3F)
          lineToRelative(3.5F, 3.25F)
          curveToRelative(0.303F, 0.281F, 0.778F, 0.264F, 1.06F, -0.04F)
          curveToRelative(0.281F, -0.303F, 0.264F, -0.778F, -0.04F, -1.06F)
          lineTo(6.66F, 7.5F)
          horizontalLineToRelative(4.59F)
          curveToRelative(1.164F, 0.0F, 1.86F, 0.441F, 2.4F, 1.068F)
          curveTo(14.204F, 9.21F, 14.5F, 10.091F, 14.5F, 11.0F)
          reflectiveCurveToRelative(-0.296F, 1.79F, -0.85F, 2.432F)
          curveToRelative(-0.54F, 0.627F, -1.236F, 1.068F, -2.4F, 1.068F)
          horizontalLineToRelative(-4.5F)
          curveTo(6.336F, 14.5F, 6.0F, 14.836F, 6.0F, 15.25F)
          close()        
      }
    }
    return _arrowHookUpLeft20!!
  }

private var _arrowHookUpLeft20: ImageVector? = null
